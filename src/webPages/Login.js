import "./Login.css";
function Login() {
  const signupHandle = () => {
    window.location.href = "/signup";
  };
  const loginHandle = () => {
    window.location.href = "/login";
    alert("Login");
  };

  return (
    <div className="Main">
      <nav>
        <div className="logo">
          <img src="./images/logo-nav.png" alt="Emergify Logo" onClick={loginHandle}/>
        </div>
        <ul className="nav-links">
          <li>
            <button href="#" className="nav-btn" onClick={signupHandle}>
              Sign Up
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
        
        <div className="login-form">
          {/* Login form */}
          <h2>Login</h2>
          <form>
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
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <button className="nav-btn" type="submit" onClick={loginHandle}>
              Login
            </button>
            <p className="note">
              Note: <br />
              <il>If you haven't signed up yet? </il> <br />
              <il>Click Sign Up Button to create an account.</il>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
