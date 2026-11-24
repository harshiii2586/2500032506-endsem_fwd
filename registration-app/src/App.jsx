
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "") {
      setMessage("Please enter your name");
    }
    else if (name.trim().length < 3) {
      setMessage("Name must have 3 characters");
    }
    else if (!email.includes("@")) {
      setMessage("Enter a valid email");
    }
    else if (password.length < 6) {
      setMessage("Password must have 6 characters");
    }
    else if (password !== confirm) {
      setMessage("Passwords do not match");
    }
    else {
      setMessage("Registration Successful!");
    }
  }

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button type="submit">Register</button>

        <p>{message}</p>
      </form>
    </div>
  );
}

export default App;
