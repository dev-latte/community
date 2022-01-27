import './App.css';
import { auth } from './FirebaseInstance';

import { useLayoutEffect, useState } from 'react';
import AppRouter from './pages/AppRouter';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/user/action';

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('check user >>', Boolean(userObj));
      if(user) {
        const userInfo = {
          displayName: user.displayName,
          screenName: user.reloadUserInfo.screenName,
          photoURL: user.photoURL,
          uid: user.uid,
          securityLevel: user.securityLevel
        };

        setUserObj(userInfo);
        dispatch(addUser(userInfo));
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
            isLoggedIn={Boolean(userObj)}
          />
        : <LoginPage/>
      }
    </>
  );
}

export default App;
