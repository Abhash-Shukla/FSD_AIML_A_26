import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {

    if (uname === "admin" && pass === "manager") {
      navigate("/admin");
      return;
    }
    if (uname === "user" && pass === "abes") {
      navigate("/user");
      return;
    }
    alert("Credentials are incorrect!!");
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uname">Username</label>
        <input
          type="text"
          id="uname"
          name="uname"
          placeholder="Enter User Name"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />

        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Login;
