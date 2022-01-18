import { database } from "../../FirebaseInstance";
import { doc, setDoc } from "firebase/firestore";

export const addMemberInformation = async (databaseName, uid, data) => {
    await setDoc(doc(database, databaseName, uid), data)
        .then(response => {console.log('로그인 성공, 유저정보 등록')})
        .catch(e => { console.error(`add member info error : ${e}`)});
}
