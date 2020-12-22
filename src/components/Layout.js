import Content from "./Content";
import Sidebar from "./Sidebar";
import "../scss/layout.scss";
import { BrowserRouter } from "react-router-dom";

function Layout() {
  return (
    <div className="layout-container">
      <BrowserRouter>
        <Sidebar />
        <Content />
        <Sidebar isHistory={true} />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
