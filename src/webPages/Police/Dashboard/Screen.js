import "./Screen.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../index";
import Map from "../../../components/Map.js";

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

      <div className="details">
        {userData ? (
          <>
            <h2>User Details</h2>
            <p>
              Name: {userData.firstName} {userData.lastName}
            </p>
            <p>
              Location: {userData.latitude}, {userData.longitude}
            </p>
            <p>Phone Number: {userData.phoneNumber}</p>
            <p>User ID: {userId}</p>
            <Map latitude={userData.latitude} longitude={userData.longitude} />
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>

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
  );
};

export default PoliceScreen;
