import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
``;

// const user = {
//   login: "iamsayeeduddin",
//   avatar_url: "https://avatars.githubusercontent.com/u/76648428?v=4",
//   html_url: "https://github.com/iamsayeeduddin",
//   name: "Syed Sayeeduddin",
//   company: "SingleView",
//   location: "Hyderabad, India",
//   bio: "Software Development Engineer | Front End Developer | React JS Developer | MERN Full Stack Developer | React | Node JS | Express JS | MongoDB | Next JS | Redux",
//   twitter_username: "imsayeeduddin",
//   public_repos: 31,
//   followers: 33,
//   following: 8,
// };

const getValue = (val) => (val ? val : "NA");

const UserProfile = () => {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (params?.username) {
      axios
        .get(`https://api.github.com/users/${params?.username}`)
        .then((res) => setUser(res.data))
        .catch(console.error);
    }
  }, [params?.username]);

  return user ? (
    <div className="max-w-xs mx-auto mt-8 p-6 border border-gray-200 rounded-xl shadow-md bg-white text-center">
      <img
        src={getValue(user.avatar_url)}
        alt={getValue(user.login)}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border"
      />
      <h2 className="text-xl font-semibold mb-1">{getValue(user.name)}</h2>
      <p className="text-gray-500 mb-2">@{getValue(user.login)}</p>
      <p className="text-sm mb-2">{getValue(user.bio)}</p>
      <p className="text-sm text-gray-500 mb-2">
        <span>🏢 {getValue(user.company)}</span>
        <br />
        <span>📍 {getValue(user.location)}</span>
      </p>
      <div className="flex justify-around mt-4">
        <div>
          <span className="font-bold">{getValue(user.followers)}</span>
          <div className="text-xs text-gray-500">Followers</div>
        </div>
        <div>
          <span className="font-bold">{getValue(user.following)}</span>
          <div className="text-xs text-gray-500">Following</div>
        </div>
        <div>
          <span className="font-bold">{getValue(user.public_repos)}</span>
          <div className="text-xs text-gray-500">Repos</div>
        </div>
      </div>
      <div className="mt-4">
        <a
          href={getValue(user.html_url)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub Profile
        </a>
        {user.twitter_username ? (
          <span>
            {" "}
            |{" "}
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>
          </span>
        ) : null}
      </div>
    </div>
  ) : (
    <p className="animate-pulse">Loading...</p>
  );
};

export default UserProfile;
