import { database } from "../../FirebaseInstance";
import { doc, setDoc, getDoc } from "firebase/firestore";

// 파이어베이스에 유저 정보를 추가하는 함수
export const addMemberInformation = async (databaseName, uid, data) => {
    await setDoc(doc(database, databaseName, uid), data)
        .then(response => {console.log('로그인 성공, 유저정보 등록')})
        .catch(e => { console.error(`add member info error : ${e}`)});
}

// 파이어베이스에 유저 정보가 있는지 체크하는 함수
export const getMemberInformation = async (databaseName, uid) => {
    const docRef = doc(database, databaseName, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}

