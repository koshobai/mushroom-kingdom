import React from 'react';

export default function FriendList({ f, hDelete }) {
  return (
    <div>
      {f.map((friend, index) => (
        <React.Fragment key={friend.id}>
          <h2>{friend.title}</h2>
          <h2>{index}</h2>
          <button onClick={() => hDelete(friend.id)}>delete</button>
        </React.Fragment>
      ))}
    </div>
  );
}
