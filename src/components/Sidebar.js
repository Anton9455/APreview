import { createBrowserHistory } from "history";
import { NavLink } from "react-router-dom";
import "../scss/sidebar.scss";

const history = createBrowserHistory();

const handleClick = (e) => {
  if (e.target === e.currentTarget) {
    history.push(e.currentTarget.dataset.href);
    history.go();
  }
};

function Sidebar({ isHistory }) {
  return isHistory ? (
    <div className="layout-container__sidebar layout-container__sidebar_right sidebar">
      <nav className="layout-container__nav sidebar__nav">
        <div className="sidebar__item">
          <div data-href="/red" onClick={handleClick}>
            Красный
          </div>
        </div>
        <div className="sidebar__item">
          <div data-href="/green" onClick={handleClick}>
            Зеленый
          </div>
        </div>
        <div className="sidebar__item">
          <div data-href="/blue" onClick={handleClick}>
            Синий
          </div>
        </div>
      </nav>
    </div>
  ) : (
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
