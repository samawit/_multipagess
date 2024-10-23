import "./Login.css";
import { useRef } from "react";
import { Form } from "react-bootstrap"; // Corrected import
import { verifyUser } from "../../data/users"; // นำเข้าจาก users.jsx

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();

    // Clear input fields
    userRef.current.value = "";
    passRef.current.value = "";

    const userInfo = verifyUser(user, pass);

    if (userInfo === null) {
      // Not authorized
      alert("Username or password incorrect!");
      userRef.current.focus();
    } else {
      // Authorized
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  return (
    <div className="login-container">
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        style={{ textAlign: "center" }}
        placeholder="Username" // Capitalized for consistency
        ref={userRef}
      />
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        style={{ textAlign: "center" }}
        placeholder="Password" // Capitalized for consistency
        ref={passRef}
      />
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
