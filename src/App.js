import React from "react";
import { AuthProvider } from "./components/Auth";
import Router from "./routes";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
