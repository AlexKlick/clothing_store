import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { BrowserRouter, Route, useNavigate, Navigate } from "react-router-dom";
import { Routes } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
const App = () => {
  let unsubscribeFromAuth = () => null;
  const dispatch = useDispatch();
  const [currentUser, setcurrentUser] = useState();

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
      dispatch(setCurrentUser(user));
      setcurrentUser(user);
    });
  }, []);
  useEffect(() => {
    dispatch(setCurrentUser(user));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            currentUser ? (
              <Homepage />
            ) : (
              <>
                {" "}
                <SignInSignUp />
                <Navigate to="/signin" />
              </>
            )
          }
        />
        <Route
          exact
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInSignUp />}
        />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default App;
