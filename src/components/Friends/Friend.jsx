import React, {useState} from "react";
import Img from "../image";

const status = {
  online: {
    backgroundColor: "green",
    display: "block",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
  },
  offline: {
    backgroundColor: "red",
    display: "block",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
  }
};

const FriendItem = ({isOnline, avatarUrl, name, id}) => {
  const [set, setStatus] = useState(isOnline);
  return (
    <>
      <li key={id}>
        <span className={set ? 'online': 'offline'} style={set ? status.online : status.offline}></span>
        <Img src={avatarUrl} alt={name}/>
        <h2>{name}</h2>
      </li>
    </>
  )
}

export default FriendItem;
