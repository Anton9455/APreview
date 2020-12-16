import { NavLink } from "react-router-dom";
import "../scss/sidebar.scss";

function Sidebar() {
  return (
    <div className="layout-container__sidebar sidebar">
      <nav className="layout-container__nav sidebar__nav">
        <div className="sidebar__item">
          <NavLink to="/red">Красный</NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink to="/green">Зеленый</NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink to="/blue">Синий</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
