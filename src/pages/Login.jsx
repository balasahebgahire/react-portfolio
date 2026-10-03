import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const navigate = useNavigate();

    const handleLogin = (e) => {
    e.preventDefault();

    setUsernameError("");
    setPasswordError("");

    let isValid = true;

    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isValid) return;

    if (username !== "bala.gahire@gmail.com") {
      setUsernameError("Invalid username");
      return;
    }

    if (password !== "abcd123") {
      setPasswordError("Invalid password");
      return;
    }

    navigate("/services");
  };


  return (
    <div className="container-fluid py-5">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-6 border rounded shadow-sm p-5 bg-light">
                <div className="w-100 text-center mb-4"><h1>Login</h1></div>
                <form onSubmit={handleLogin}>
                    <div className="w-100">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username"></input>
                        {usernameError && <p className="fs-6 text-danger mt-2">{usernameError}</p>}
                    </div>
                    <div className="w-100 mt-3">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password"></input>
                        {passwordError && <p className="fs-6 text-danger mt-2">{passwordError}</p>}
                    </div>
                    <div className="w-100 mt-3 text-center">
                        <Button type="submit">Login</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  );
}
