import "./header.css";
import { useState } from "react";
import usegitnameStore from "./store/store";

function Header() {
  const gitname = usegitnameStore((state) => state.gitname);
  const Username = usegitnameStore((state) => state.Username);
  const [name, setUsername] = useState();

  const handleInput = (ev) => {
    setUsername(ev.target.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log(Username);
    gitname(name);
    console.log(gitname);
  };

  return (
    <div className="header">
      <div>
        <h1 className="title">GITHUB FINDER</h1>
      </div>
      <div className="link">
        <p>
          {" "}
          <a href="github/johnndi">by john ndirangu</a>
        </p>
      </div>
      <form className="search">
        <input
          type="text"
          placeholder="enter a username"
          onChange={handleInput}
        />
        <button type="search-btn" onClick={handleClick}>
          search
        </button>
      </form>
    </div>
  );
}
export default Header;
