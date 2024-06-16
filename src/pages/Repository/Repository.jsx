import "./repository.css";
import { RiStarSFill } from "react-icons/ri";
import { IoIosGitNetwork } from "react-icons/io";
import { useState } from "react";
import usegitnameStore from "../../store/store";
function Repository() {
  const [Repo, setRepo] = useState([]);
  const Username = usegitnameStore((state) => state.Username);
  console.log(`repositry username ${Username}`);

  if (Username != null) {
    (async () => {
      try {
        const api2 = `https://api.github.com/users/${Username}/repos`;

        const answer2 = await fetch(api2);
        const final2 = await answer2.json();
        setRepo(final2);
      } catch (error) {
        setRepo("there was an error");
      }
    })();
  } else {
    setRepo("your requests have expired");
  }
  return (
    <div>
      <div>
        <h2 className="sectitle">repositories</h2>
      </div>
      <div className="gititemrepo">
        {Repo.map((repo) => (
          <div className="repoitem" key={repo.id}>
            <div className="repotitle">
              <h2>{repo.name}</h2>
            </div>
            <div className="description">
              <p>{repo.description}</p>
            </div>
            <div className="rate">
              <p>
                <IoIosGitNetwork />
                {repo.forks_count}
              </p>
              <p>
                <RiStarSFill />
                {repo.stargazers_count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Repository;
