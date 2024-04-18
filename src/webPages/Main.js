import "./Main.css";

function Main() {
  const policeLoginHandle = () => {
    window.location.href = "/policelogin";
  };
  const fireLoginHandle = () => {
    window.location.href = "/firelogin";
  };
  const ambulanceLoginHandle = () => {
    window.location.href = "/ambulancelogin";
  };

  return (
    <div className="Main">
      
      <nav>
        <div className="logo">
          <img
            src="./images/logo-nav.png"
            alt="Emergify Logo"
          />
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
      <div className="container">
        <div className="background">
          {/* Background image */}
          <img src="./images/back.jpg" alt="Background" />
        </div>
        <div className="login-form">
          {/* Login form */}
          <h2>Select Department</h2>

          <div className="dept-btn">
            <button id="dept" onClick={policeLoginHandle}>
              <span>Police</span>
            </button>
            <button id="dept" onClick={fireLoginHandle}>
              <span>Fire Brigade</span>
            </button>
            <button id="dept" onClick={ambulanceLoginHandle}>
              <span>Ambulance</span>
            </button>
          </div>

          <p className="note">
            Note: <br />
            <il>Please select your specific department.</il> <br />
            <il>Register your self.</il> <br />
            <il>If you have already account then login.</il>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
