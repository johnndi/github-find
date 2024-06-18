import { useState } from "react";
import usegitnameStore from "../../../store/store";
import "./Followers.css";

function Followers() {
  const [follower, setfollower] = useState([]);
  const Username = usegitnameStore((state) => state.Username);
  console.log(`follower username ${Username}`);

  if (Username != null) {
    (async () => {
      try {
        const api4 = `https://api.github.com/users/${Username}/followers`;

        const answer4 = await fetch(api4);
        const final4 = await answer4.json();
        setfollower(final4);
      } catch (error) {
        console.log("there was an error");
      }
    })();
  } else {
    setfollower("your requests expired");
  }

  return (
    <div>
      <div className="followers">
        <h2 className="heads">followers</h2>
      </div>
      <div className="gititemfollow">
        {follower.map((follow) => (
          <div className="repoitemfollowers" key={follow.id}>
            <img src={follow.avatar_url} className="repoimage" />            
            <button className="name" onClick{Username:"follow.login"}>{follow.login}/>
            <p className="followlink">
              <a href={follow.html_url}>view on github</a>
            </p>
          </div>
        ))}
      </div>
      <div className="following">
        <h2 className="heads">following</h2>
      </div>
    </div>
  );
}
export default Followers;
