import "./SignUp.css";
function SignUp() {
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
        {/* Background image */}
        <div className="background">
          <img src="./images/back.jpg" alt="Background" />
        </div>
        {/* Sign Up form */}
        <div className="signup-form custom-scrollbar">
          <h2>Sign Up</h2>
          <form>
            <div className="s-form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="name"
                id="name"
                placeholder="Enter your Full Name"
                name="name"
                required
              />
            </div>
            <div className="s-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="s-form-group">
              <label htmlFor="phoneNo">Mobile Number:</label>
              <input
                type="phoneNo"
                id="phoneNo"
                placeholder="Enter your Moble Number"
                name="phoneNo"
                required
              />
            </div>
            <div className="s-form-group">
              <label htmlFor="cnic">CNIC:</label>
              <input
                type="cnic"
                id="cnic"
                placeholder="Enter your CNIC"
                name="cnic"
                required
              />
            </div>
            <div className="s-form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <div className="s-form-group">
              <label htmlFor="conPassword">Confirm Password:</label>
              <input
                type="conPassword"
                id="conPassword"
                placeholder="Enter your password"
                name="conPassword"
                required
              />
            </div>

            <button className="signUp-btn" type="submit" onClick={loginHandle}>
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

              <div class="text">Sign Up</div>
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
