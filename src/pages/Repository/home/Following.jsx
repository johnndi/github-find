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
          <h3>{following.login}</h3>
          <p>
            <a href={following.html_url}>view</a>
          </p>
        </div>
      ))}
    </div>
  );
}
export default Following;
