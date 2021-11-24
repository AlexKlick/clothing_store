import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

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
        <FormInput
          type="text"
          name="email"
          value={signInState.email}
          label="email"
          required
          handleChange={(e, name) => handleChange(e, name)}
        />
        <FormInput
          type="text"
          name="password"
          value={signInState.password}
          label="password"
          required
          handleChange={(e, name) => handleChange(e, name)}
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          {" "}
          Sign In with Google{" "}
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
