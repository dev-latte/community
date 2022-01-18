import './App.css';
import { auth } from './FirebaseInstance';

import { useEffect, useState } from 'react';
import AppRouter from './pages/AppRouter';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('user>> ',user, Boolean(userObj));
      if(user) {
        setUserObj({
          displayName: user.displayName,
          screenName: user.reloadUserInfo.screenName,
          photoURL: user.photoURL,
          uid: user.uid
        });
        setInit(true);
      } else {
        setUserObj({});
      }
    });
  }, []);

  return (
    <>
      {
        init
        ? <AppRouter 
            userObj={userObj} 
            isLoggedIn={Boolean(userObj)}
          />
        : <LoginPage/>
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
