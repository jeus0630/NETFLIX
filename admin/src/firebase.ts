import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBfkd2jzs9zRPBLfFP5VZ_KVL875Gncgds",
    authDomain: "netflix-d4d6d.firebaseapp.com",
    projectId: "netflix-d4d6d", 
    storageBucket: "netflix-d4d6d.appspot.com",
    messagingSenderId: "810138780070",
    appId: "1:810138780070:web:612f8678ea462c658b0f67",
    measurementId: "G-CVBC4RKL0M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage();