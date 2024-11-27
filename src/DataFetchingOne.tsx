import axios from "axios";
import { useEffect, useState } from "react";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/4")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "...Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
