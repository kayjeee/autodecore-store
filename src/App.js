import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import {
  Header,
  Home,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  Signup,
  Footer,
  Error404,
  Toast,
  SingleProductPage,
  UserProfile,
  PersonalInfo,
  Addresses,
  Orders,
  OrderSummary,
  ScrollToTop,
} from "./components";

import {
  getProducts,
  getCategories,
  getWishList,
  getCart,
} from "./utils/server-requests";
import { useData, useAuth, useToast } from "./context";
import { PrivateRoute } from "./PrivateRoute";

import "./style.css";

function App() {
  const { dispatch } = useData();
  const {
    state: { token },
  } = useAuth();
  const {
    toastMessage: { type, message },
  } = useToast();

  useEffect(() => {
    getProducts(dispatch);
    getCategories(dispatch);
    getWishList(dispatch, token);
    getCart(dispatch, token);
  }, []);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
    
  
        <Route path="*" element={<Error404 />} />

        {/* private routes */}
        
       


      </Routes>
      <Footer />
      <Toast type={type} message={message} />
    </>
  );
}

export default App;
