import React from "react";
import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="44" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
