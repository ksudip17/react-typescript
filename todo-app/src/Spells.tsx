import React from "react";
import { useQuery } from "@tanstack/react-query";

// Define the Spell interface to represent each spell object
interface Spell {
  index: string;
  name: string;
  url: string;
}

// Define the SpellResponse interface to represent the structure of the API response
interface SpellResponse {
  count: number;
  results: Spell[];
}

// Function to fetch spells from the D&D API, with proper typing
const fetchSpells = async (): Promise<SpellResponse> => {
  const response = await fetch("https://www.dnd5eapi.co/api/spells");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Spells component to display the list of spells
const Spells: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["spells"],
    queryFn: fetchSpells,
  });

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  // Error state
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  // Render the list of spells
  return (
    <div>
      <h1>Spell List</h1>
      <ul>
        {data?.results.map((spell: Spell) => (
          <li key={spell.index}>{spell.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Spells;
