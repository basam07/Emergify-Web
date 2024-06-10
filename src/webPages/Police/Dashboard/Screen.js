import "./Screen.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../index";
import Map from "../../../components/Map";

const PoliceScreen = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!userId) {
          return; // Exit early if userId is undefined
        }

        const userRef = doc(db, "policerequests", userId);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUserData(userData);
        } else {
          console.log("User not found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleAccept = async () => {
    try {
      const userRef1 = doc(db, "policerequests", userId);
      const userRef2 = doc(db, "policeDeclined", userId);
      const userData = await getDoc(userRef1);
      if (userData.exists()) {
        const acceptsDocRef = doc(db, "policeAccepts", userId); // Use userId instead of userData.id
        await setDoc(acceptsDocRef, userData.data());
        await deleteDoc(userRef1);
        await deleteDoc(userRef2);
        console.log("User data moved to accepts collection successfully.");
        navigate("/policerequests");
      }
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleDecline = async () => {
    try {
      const userRef1 = doc(db, "policerequests", userId);
      const userRef2 = doc(db, "policeAccepts", userId);
      const userData = await getDoc(userRef1);
      if (userData.exists()) {
        const acceptsDocRef = doc(db, "policeDeclined", userId);
        await setDoc(acceptsDocRef, userData.data());
        await deleteDoc(userRef1);
        await deleteDoc(userRef2);
        console.log("User data moved to declined collection successfully.");
        navigate("/policerequests");
      }
    } catch (error) {
      console.error("Error declining request:", error);
    }
  };

  return (
    <div className="d-Main">
      <nav>
        <div className="logo">
          <img src="../images/logo-nav.png" alt="Emergify Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <button className="nav-btn">About Us</button>
          </li>
        </ul>
      </nav>

      <div className="d-Details">
        <div className="upper-Cont">
          <ul>
            {userData ? (
              <li className="rows">
                <div className="columns">
                  <p>
                    <b>Name:</b> {userData.firstName} {userData.lastName}
                  </p>
                </div>
                <div className="columns">
                  <p><b>Phone NO:</b> {userData.phoneNumber}</p>
                </div>
                <div class="columns" >
                  <p><b>Gender:</b> {userData.gender}</p>
                </div>
                <div class="columns" >
                  <p><b>Gender:</b> {userData.cnic}</p>
                </div>
              </li>
            ) : (
              <p>Loading user data...</p>
            )}
          </ul>
        </div>

        <div className="details">
        <div className="left-Map-Cont">
          {userData ? (
            <>
              <Map
                latitude={userData.latitude}
                longitude={userData.longitude}
              />
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
        <div className="right-Camera-Cont">
          <h2>Camera</h2>
        </div>
        </div>
        
        
        <div className="lower-Cont">
        <button className="show-btn" type="button" onClick={handleAccept}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            ></path>
          </svg>
          <div className="text">Accept</div>
        </button>
        <button className="show-btn" type="button" onClick={handleDecline}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            ></path>
          </svg>
          <div className="text">Decline</div>
        </button>

        </div>
        
      </div>
    </div>
  );
};

export default PoliceScreen;
