import "./Screen.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../index";

const AmbulanceScreen = ({ navigation }) => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!userId) {
          return; // Exit early if userId is undefined
        }
        
        const userRef = doc(db, "ambulancerequests", userId);
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

  const handleAccept = async (userId) => {
    console.log(userId);
    try {
      const userRef1 = doc(db, "ambulancerequests", userId);
      const userRef2 = doc(db, "ambulanceDeclined", userId);
      const userData = await getDoc(userRef1);
      console.log("User data:", userData);
      if (userData.exists) {
        const acceptsDocRef = doc(db, "ambulanceAccepts", userData.id); // Correctly reference the document in the "ambulanceAccepts" collection
        await setDoc(acceptsDocRef, userData.data());
        await deleteDoc(userRef1);
        await deleteDoc(userRef2);
        console.log("User data moved to accepts collection successfully.");
        window.location.href = "/ambulancerequests";
      }
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };
  
  const handleDecline = async (userId) => {
    console.log(userId);
    try {
      const userRef1 = doc(db, "ambulancerequests", userId);
      const userRef2 = doc(db, "ambulanceAccepts", userId);
      const userData = await getDoc(userRef1);
      console.log("User data:", userData);
      if (userData.exists) {
        const acceptsDocRef = doc(db, "ambulanceDeclined", userData.id); // Correctly reference the document in the "ambulanceAccepts" collection
        await setDoc(acceptsDocRef, userData.data());
        await deleteDoc(userRef1);
        await deleteDoc(userRef2);
        console.log("User data moved to accepts collection successfully.");
        window.location.href = "/ambulancerequests";
      }
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  return (
    <div className="d-Main">
      <nav>
        <div className="logo">
          <img src="./images/logo-nav.png" alt="Emergify Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <button href="#" className="nav-btn">
              About Us
            </button>
          </li>
        </ul>
      </nav>

      {/* Home */}
      <div className="main-Cont">
      {userData ? (
        <div>
          <h2>User Details</h2>
          <p>Name: {userData.firstName} {userData.lastName}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
          <p>User ID: {userId}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      </div>

      <button className="show-btn" type="submit" onClick={() => handleAccept(userId)}>
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
      <button className="show-btn" type="submit" onClick={() => handleDecline(userId)}>
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
              <div className="text">Declined</div>
            </button>
    </div>
  );
};

export default AmbulanceScreen;
