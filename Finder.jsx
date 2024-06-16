import "./Finder.css";
import Repository from "./src/pages/Repository/Repository";
import Profile from "./src/pages/Repository/home/Profile";
import Followers from "./src/pages/Repository/home/Followers";
import Following from "./src/pages/Repository/home/Following";
function Finder() {
  return (
    <div>
      <div className="home">
        <div className="prof">
          <Profile />
        </div>

        <div className="git">
          <Repository />
          <Followers />
          <Following/>
        </div>
      </div>
    </div>
  );
}
export default Finder;
