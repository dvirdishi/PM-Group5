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
  doc, setDoc,addDoc, 
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
    window.location.reload(false);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged In Successfully!");
    window.location.reload(false);
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
    window.location.reload(false);
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
    DoctorSettings(user.uid);
    auth.signOut();
    window.location.reload(false);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const fetchClientName = async (temp_cid) => {
  const q = query(collection(db, "users"), where("uid", "==", temp_cid));
  const doc = await getDocs(q);
  const data = doc.docs[0].data();
  return data.name;
  };

const fetchDoctorName = async (temp_did) => {
  const q = query(collection(db, "users"), where("uid", "==", temp_did));
  const doc = await getDocs(q);
  const data = doc.docs[0].data();
  return data.name;
  };

const NewAppointment = async (did,cid,date,hour,duration,type) => {
  try {
    const x =  await fetchDoctorName(did);
    console.log("X:" + x);
    const y =  await fetchClientName(cid);
    console.log("Y:" + y);
    const res2 = await addDoc(collection(db, "appointments"), {
      dname: x,
      cname: y,
      did,
      cid,
      date,
      hour,
      duration,
      type,
      isdeleted: "0",
      button: " ",
    })
    NewSummary(res2.id,did,cid,date,x,y);
    alert("New Appointment Added Successfully!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const NewSummary = async (uid,did,cid,date,x,y) => {
  try {
    await setDoc(doc(db, "summaries", uid), {
      dname: x,
      cname: y,
      did,
      cid,
      date,
      summary: "Empty",
      isdeleted: "0",
      summary_button: " ",
    });
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
  window.location.reload(false);
};

const DoctorSettings = async (uid) => {
  try {
    await setDoc(doc(db, "doctor_settings", uid), {
      uid,
      free_day:'3',
      vaction_from:Date(),//date
      vaction_until: Date(),// date
      duration_one: 10,// number (minutes)
      duration_two: 10// number minutes
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
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
  DoctorSettings,
  NewSummary,
};