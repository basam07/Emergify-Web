import "./SignUp.css";
function SignUp() {
  const signupHandle = () => {
    window.location.href = "/signup";
    alert("Sign Up Success");
  };
  const loginHandle = () => {
    window.location.href = "/login";
    
  };
  return (
    <div className="Main">
      <nav>
        <div className="logo">
          <img src="./images/logo-nav.png" alt="Emergify Logo" onClick={loginHandle}/>
        </div>
        <ul className="nav-links">
          <li>
            <button href="#" className="nav-btn" onClick={loginHandle}>
              Login
            </button>
          </li>
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
        <div className="login-form custom-scrollbar">
          {/* Login form */}
          <h2>Sign Up</h2>
          <form>
          <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="name"
                id="name"
                placeholder="Enter your Full Name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">Mobile Number:</label>
              <input
                type="phoneNo"
                id="phoneNo"
                placeholder="Enter your Moble Number"
                name="phoneNo"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cnic">Cnic:</label>
              <input
                type="cnic"
                id="cnic"
                placeholder="Enter your CNIC"
                name="cnic"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="conPassword">Confirm Password:</label>
              <input
                type="conPassword"
                id="conPassword"
                placeholder="Enter your password"
                name="conPassword"
                required
              />
            </div>
            
            <button className="nav-btn" type="submit" onClick={signupHandle}>
              Sign Up
            </button>
            <p className="note">
              Note: <br />
              <il>If you have already account. </il> <br />
              <il>Click Login Button to move on Dashboard.</il>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
