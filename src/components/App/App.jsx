import { useState } from "react";
import FriendList from "../FriendList/Friendlist";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Profile from "../Profile/Profile";

import "./App.module.css";
import userData from "../Data/userData.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
