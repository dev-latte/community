import './App.css';
import { auth, database } from './FirebaseInstance';

import { useLayoutEffect, useState } from 'react';
import AppRouter from './pages/AppRouter';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/user/action';
import { doc, onSnapshot } from 'firebase/firestore';
import { addStatus } from './redux/status/action';
import { addData } from './components/api/firebaseAPI';
import { nvl } from './components/validation/common';

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('check user >>', Boolean(userObj));
      if(user) {
        // realtime check status data
        onSnapshot(doc(database, "characterStatus", user.uid), (response) => {
          let status = response.data();
          console.log("change data >> ", status);
          if(!nvl(status)) {
            // level up statement
            if(status.lv * process.env.REACT_APP_LEVEL_UP_EXP <= status.exp) {
              status = {...status, lv:status['lv']+1, exp:0, sp:3};
              addData('characterStatus', user.uid, status);
            }
            dispatch(addStatus(status));
          }
        });

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
