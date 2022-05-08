import React from "react";
import FriendItem from "./Friend";

const Friends = ({itemsArray}) => {
  return (
    <ul>
      {
        itemsArray.map((friend) =>
          <FriendItem
            isOnline={friend.isOnline}
            avatarUrl={friend.avatar}
            name={friend.name}
            key={friend.id} id={undefined}/>
        )}
    </ul>
  )
}

export default Friends;
