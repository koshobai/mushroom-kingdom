import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  let [modalState, setModalState] = useState(false);
  let [friendsState, setFriendsState] = useState(true);
  let [e, setE] = useState([
    { title: 'mario bash', id: 1 },
    { title: 'bowser', id: 2 },
    { title: 'peach', id: 3 },
  ]);

  const hDelete = (id) => {
    setE((currentFriends) => {
      return currentFriends.filter((realFriends) => {
        return id !== realFriends.id;
      });
    });
    console.log(id);
  };

  const hShow = () => {
    setModalState(true);
  };
  const hClose = () => {
    setModalState(false);
  };

  const header = 'thisthatandtheother';
  const subHeader = 'quietonset';
  const header2 = 'I told you to quiet down';
  const subHeader2 = 'now or else';

  return (
    <div className="App">
      {/* Title.js components come before the = */}
      <Title headeR={header} subHeadeR={subHeader} />
      <Title subHeadeR={subHeader2} headeR={header2} />

      {friendsState && (
        <button onClick={() => setFriendsState(false)}>hide</button>
      )}
      {!friendsState && (
        <button onClick={() => setFriendsState(true)}>show</button>
      )}

      {friendsState &&
        e.map((friend, index) => (
          <React.Fragment key={friend.id}>
            <h2>{friend.title}</h2>
            <h2>{index}</h2>
            <button onClick={() => hDelete(friend.id)}>delete</button>
          </React.Fragment>
        ))}
      {<button onClick={hShow}>Show</button>}
      {modalState && (
        <Modal hCloseModalSide={hClose}>
          <h2>EULA</h2>
        </Modal>
      )}
    </div>
  );
}

export default App;
