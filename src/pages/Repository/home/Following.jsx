import { useState } from "react";
import usegitnameStore from "../../../store/store";
import "./following.css";
function Following() {
  const [following, setfollowing] = useState([]);
  const Username = usegitnameStore((state) => state.Username);
  if (Username != null) {
    (async () => {
      try {
        const api3 = `https://api.github.com/users/${Username}/following`;

        const answer3 = await fetch(api3);
        const final3 = await answer3.json();
        setfollowing(final3);
      } catch (error) {
        setfollowing("there was an error");
      }
    })();
  } else {
    setfollowing("your requests expired");
  }
  return (
    <div className="gititemfollowing">
      {following.map((following) => (
        <div className="repoitemfollowing" key={following.id}>
          <img src={following.avatar_url} className="repoimage" />
          <div className="ftext">
           <button className="name">{following.login}</button>
          <p className="followinglink">
            <a href={following.html_url}>view on github</a>
          </p>
          </div>
         
        </div>
      ))}
    </div>
  );
}
export default Following;
