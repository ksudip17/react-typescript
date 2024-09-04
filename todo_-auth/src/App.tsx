import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "./Auth/Auth";
import Todo from "./Todo/Todo";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/todo" replace />
            ) : (
              <Auth onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/todo"
          element={isAuthenticated ? <Todo /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
