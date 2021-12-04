import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Loading from "./components/loading/loading.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { BrowserRouter, Route, useNavigate, Navigate } from "react-router-dom";
import { Routes } from "react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
let App = () => {
  const store = useStore();
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  let unsubscribeFromAuth = () => null;
  const dispatch = useDispatch();

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setLoading(false);
      dispatch(setCurrentUser(user));
      setcurrentUser(user);
    });
  }, []);
  useEffect(() => {
    dispatch(setCurrentUser(currentUser));
  }, [dispatch]);
  // useEffect(() => {
  //   setLoading(false);
  // }, [currentUser]);
  return (
    <BrowserRouter>
      <Header />
      {loading === true ? (
        <Loading />
      ) : (
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/signin"
            element={
              currentUser ? (
                <>
                  <Homepage />
                  <Navigate to="/" />
                </>
              ) : (
                <SignInSignUp />
              )
            }
          />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
