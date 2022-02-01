import { database } from "../../FirebaseInstance";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";

// 파이어베이스에 유저 정보를 추가하는 함수
export const addData = async (databaseName, uid, data) => {
    await setDoc(doc(database, databaseName, uid), data)
        .then(response => { console.log(`${databaseName}, 정보 등록 성공`)} )
        .catch(e => { console.error(`add member info error : ${e}`)});
}

// 파이어베이스에 유저 정보가 있는지 체크하는 함수
export const getData = async (databaseName, uid) => {
    const docRef = doc(database, databaseName, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}

// 실시간으로 데이터 변경을 감지하는 함수
export const snapshotData = (databaseName, uid) => {
    onSnapshot(doc(database, databaseName, uid), (response) => {
        console.log("Current data: ", response.data());
        return response.data();
    });
};