import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useToast } from "../../context";
import { useData } from "../../context";
import { BtnSecondary } from "../buttons";
import "./header.css";

export function NavButtons() {
  const location = useLocation();

  const {
    state: { productsInCart, productsInWishList },
    dispatch: dataDispatch,
  } = useData();

  const {
    state: { userName, token },
    handleLogout,
  } = useAuth();
  const { setToastMessage } = useToast();
  const navigate = useNavigate();

  return (
    <div>
      <ul className="hy-navbar-links flex align-center">
        <li>
          <Link to="/about" className="nav-link blue">
            About
          </Link>
        </li>
     
      </ul>
    </div>
  );
}
