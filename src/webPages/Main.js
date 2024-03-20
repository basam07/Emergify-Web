import "./Main.css";

function Main() {
  const loginHandle = () => {
    window.location.href = "/login";
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
            <button id="dept" onClick={loginHandle}>
              <span>Police</span>
            </button>
            <button id="dept" onClick={loginHandle}>
              <span>Ambulance</span>
            </button>
            <button id="dept" onClick={loginHandle}>
              <span>Fire Brigade</span>
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
