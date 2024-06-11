import "./Dashboard.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../index";
import { useEffect, useState } from "react";

const PoliceAccepts = () => {
  const [victimData, setVictimData] = useState([]);

  const requestsHandle = () => {
    window.location.href = "/policerequests";
  };
  const acceptsHandle = () => {
    window.location.href = "/policeaccepts";
  }; 
  const pendingHandle = () => {
    window.location.href = "/policecompleted";
  };
  const declinedHandle = () => {
    window.location.href = "/policedeclined";
  };
  

  //fetch data from server
  useEffect(() => {
    const fetchData = async (doc) => {

      try {
        const usersRef = collection(db, "policeAccepts");
        const querySnapshot = await getDocs(usersRef);


        const userDataArray = [];

        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            const UId = doc.id;
            const { firstName, lastName, phoneNumber } = userData;

            userDataArray.push({ firstName, lastName, phoneNumber, UId });
            // console.log("!!! yes user data show in list",userData);
          } else {
            console.log("No such document!");
          }
        });

        setVictimData(userDataArray); // Store data array in state
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchData();
  }, []);

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
        <div className="left-Cont">
          <div className="bar-logo">
            <img src="./images/logo1.png" alt="Emergify Logo" />
          </div>
          <ul>
            <li>
              <button className="bar-btn" onClick={requestsHandle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>

                <div class="text">Requests</div>
              </button>
            </li>
            <li>
              <button className="bar-btn" onClick={acceptsHandle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>

                <div class="text">Accepts</div>
              </button>
            </li>
            <li>
              <button className="bar-btn" onClick={pendingHandle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>

                <div class="text">Completed</div>
              </button>
            </li>
            <li>
              <button className="bar-btn" onClick={declinedHandle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>

                <div class="text">Declined</div>
              </button>
            </li>
          </ul>
        </div>
        <div className="right-Cont custom-scrollbar">
          <ul>
            <h2>Accepts</h2>
            {victimData.map((victim, index) => (
              <li className="row" key={index}>
                <div className="column" id="name">
                  <text>{victim.firstName + " " + victim.lastName}</text>
                </div>
                <div className="column" id="pNo">
                  <text>{victim.phoneNumber}</text>
                </div>
                <div class="column" id="distance">
                  <text>Distance</text>
                </div>
                <div className="column" id="status">
                    <text><b>Working</b></text>                
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PoliceAccepts;


