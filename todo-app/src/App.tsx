import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Todo from "./Todo";
import Spells from "./Spells";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <Link to="/">Todo</Link>
          <Link to="/spells" style={{ marginLeft: "10px" }}>
            Spells
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/spells" element={<Spells />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
