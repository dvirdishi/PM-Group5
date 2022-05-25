import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  doc, setDoc,addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWoJ-_m01P6Q3T5xdEjyCaeH8Jbir04xE",
  authDomain: "dona-cf141.firebaseapp.com",
  projectId: "dona-cf141",
  storageBucket: "dona-cf141.appspot.com",
  messagingSenderId: "597694322136",
  appId: "1:597694322136:web:84810d2432972dd4ac0ead"
};

const now = new Date(Date.now());
const defaultBirthday = new Date(now.getTime() + 86400000);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        day: defaultBirthday.getDate(),
        month: defaultBirthday.getMonth(),
        year: defaultBirthday.getFullYear(),
        speciality: "Empty",
        treatment: "Empty",
        private_phone: "Empty", clinic_phone: "Empty", address: "Empty", isdoctor:"0",
      });
    }
    alert("Logged In Successfully!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await sendEmailVerification(user)
    .then(setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      password,
      day: defaultBirthday.getDate(),
      month: defaultBirthday.getMonth(),
      year: defaultBirthday.getFullYear(),
      speciality: "Empty",
      treatment: "Empty",
      private_phone: "Empty", clinic_phone: "Empty", address: "Empty", isdoctor:"0",
    }));
    alert("User Added Successfully!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerNewDoctor = async (name, email, password, clinic_phone, speciality, treatment, address) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      password,
      day: defaultBirthday.getDate(),
      month: defaultBirthday.getMonth(),
      year: defaultBirthday.getFullYear(),
      speciality,
      treatment,
      private_phone: "Empty", clinic_phone, address, isdoctor:"1",
    });
    auth.signOut();
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const NewAppointment = async (did,cid,date,hour,duration,type) => {
  try {
    await addDoc(collection(db, "appointments"), {
      did,
      cid,
      date,
      hour,
      duration,
      type,
      isdeleted: "0",
      button: " ",
    });
    alert("New Appointment Added Successfully!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const NewSummary = async (did,cid,date,summary) => {
  try {
    await addDoc(collection(db, "summaries"), {
      did,
      cid,
      date,
      summary,
      summary_button: " ",
    });
    alert("New Summary Added Successfully!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert("Password Reset Link Sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  registerNewDoctor,
  NewAppointment,
  NewSummary,
};