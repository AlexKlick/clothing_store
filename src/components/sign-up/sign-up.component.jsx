import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
//import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

const SignUp = () => {
  const [signUpState, setSignUpState] = useState({
    displayName: "",
    email: "",
    password: "",
    confrimPassword: "",
  });
  return <div className="sign-up"></div>;
};

export default SignUp;
