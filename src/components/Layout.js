import Content from "./Content";
import Sidebar from "./Sidebar";
import "../scss/layout.scss";

function Layout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Layout;
