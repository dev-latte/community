import './App.css';
import { auth } from './FirebaseInstance';

import { useEffect, useState } from 'react';
import AppRouter from './pages/AppRouter';

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user);
        setUserObj({
          displayName: user.displayName,
          screenName: user.reloadUserInfo.screenName,
          photoURL: user.photoURL,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args)
        });
        setInit(true);
      } else {
        setUserObj({});
      }
    });
  }, []);

  const refreshUser = () => {
    const user = auth.currentUser;
    setUserObj({
      displayName: user.displayName,
      screenName: user.reloadUserInfo.screenName,
      photoURL: user.photoURL,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args)
    });
  };

  return (
    <>
      {
        init
        ? <AppRouter 
            userObj={userObj} 
            refreshUser={refreshUser}
            isLoggedIn={Boolean(userObj)}
          />
        : <>로딩중...</>
      }
    </>


    // <Routes>
    //   { isTwitterLogin
    //     ? <Main></Main>
    //     : <Route path="/" element={ <LoginPage onClickLogin={onClickLogin}/> } />
    //   }
    // </Routes>
  );
}

export default App;
