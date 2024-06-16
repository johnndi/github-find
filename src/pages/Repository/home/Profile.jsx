//import image from "../../../assets/you 019.jpeg"
import { CiLocationOn } from "react-icons/ci";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
//import github from "../../../assets/64880b9b0fe5b53bbe3f7280d262b33f.jpg";
import "./profile.css";
import usegitnameStore from "../../../store/store";
import { useState } from "react";
function Profile() {
  const [Img, setImg] = useState(null);
  const [Login, setLogin] = useState(null);
  const [company, setcompany] = useState(null);
  const [Url, setUrl] = useState(null);
  const [location, setlocation] = useState(null);
  const [repos, setrepos] = useState(null);
  const [followers, setfollowers] = useState(null);
  const [following, setfollowing] = useState(null);
  const [bio, setbio] = useState(null);

  const Username = usegitnameStore((state) => state.Username);
  console.log(`from the profile the username is ${Username}`);
  if (Username != null) {
    (async () => {
      try {
        const api = `https://api.github.com/users/${Username}`;
        const answer = await fetch(api);
        const final = await answer.json();
        setImg(final.avatar_url);
        setLogin(final.Login);
        setcompany(final.company);
        setbio(final.bio);
        setUrl(final.html_url);
        setlocation(final.location);
        setrepos(final.public_repos);
        setfollowers(final.followers);
      } catch (error) {
        setfollowing("error");
      }
    })();
  } else {
    ("your requests have expired");
  }

  return (
    <div className="contain">
      <h2>profile</h2>
      <div className="logo">
        <img src={Img} className="gitimage" />
      </div>
      <div className="info">
        <h2>{Login}</h2>
        <p>{company}</p>
      </div>
      <div className="bio">
        <p>{bio}</p>
      </div>
      <div className="links">
        <p>
          {<RiExternalLinkLine />}
          <a href={Url} target="blank">
            view on github
          </a>
        </p>
      </div>
      <div className="other">
        <p>
          {" "}
          {<CiLocationOn />} {location}
        </p>
        <p>
          {<RiGitRepositoryFill />} {repos}
          repositories
        </p>
        <p>
          {<MdGroups />}
          {followers}
          followers
        </p>
        <p>
          {<MdGroups />}
          {following}
          following
        </p>
      </div>
    </div>
  );
}
export default Profile;
