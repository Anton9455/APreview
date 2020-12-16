import { NavLink } from "react-router-dom";
import "../scss/sidebar.scss";

function Sidebar() {
  return (
    <div className="layout-container__sidebar sidebar">
      <nav>
        <div>
          <NavLink to="/red">Красный</NavLink>
        </div>
        <div>
          <NavLink to="/green">Зеленый</NavLink>
        </div>
        <div>
          <NavLink to="/blue">Голубой</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
