import { useState, useEffect } from "react";
const SignIn = () => {
  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setSignInState({ ...signInState, [name]: value });
  };
  useEffect(() => {});
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form action="" onSubmit={() => handleSubmit()}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={signInState.email}
          required
          onChange={(e, name) => handleChange(e, name)}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          value={signInState.password}
          required
          onChange={(e, name) => handleChange(e, name)}
        />
        <input type="submit" value="Submit form" />
      </form>
    </div>
  );
};

export default SignIn;
