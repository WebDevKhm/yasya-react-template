import React from "react";
import Img from "../image";

const statusUser = (isOnline) => (
  isOnline ? 'isOnline' : 'isOffline'
)

const FriendItem = ({isOnline, avatarUrl, name, id}) =>
  <li key={id}>
    <span className={statusUser(isOnline)}></span>
    <Img src={avatarUrl} alt={name}/>
    <h2>{name}</h2>
  </li>

export default FriendItem;
