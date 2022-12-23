import { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  });
  const setId = (id) => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        var res_data = res.data.data;
        setUser({
          first_name: res_data.first_name,
          email: res_data.email,
          avatar: res_data.avatar,
        });
      })
      .catch((err) => {
        setUser({});
        alert("Failed to fetch data!");
      });
  };

  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(100)}>100</button>
      <div>
        <ul>
          <li>Email: {user.email}</li>
          <li>Name: {user.first_name}</li>
          <img
            src={user.avatar}
            alt={user.avatar ? user.first_name : "Not available"}
          />
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
