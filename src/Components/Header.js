import { FaFlag } from "react-icons/fa";
import "./style.css";

function Header() {
  return (
    <div className="header flex">
      <div className="content flex">
        <p>
          <FaFlag />
        </p>
        <p>
          <b>CRUD</b>
        </p>
        <p>Text</p>
      </div>
      <div className="content flex">
        <p>Settings</p>
        <p>About</p>
      </div>
    </div>
  );
}

export default Header;
