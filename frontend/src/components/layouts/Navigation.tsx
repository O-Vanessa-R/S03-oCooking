import "../../assets/styles/navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Toutes les recettes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
