// import react from 'react';
import "./App.css";

function App() {
  return (
    <div className="Main">
      <nav>
        <div className="logo">
          <img src="./images/logo1.png" alt="Emergify Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <button href="#" className="nav-btn">
              About Us
            </button>
          </li>
          <li>
            <button href="#" className="nav-btn" id="form-open">
              Login
            </button>
          </li>
          <li>
            <button href="#" className="nav-btn">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>

      {/* Home */}
      <section class="home">
        <div class="form_container">
          <i class="uil uil-times form_open"></i>
          <div class="form login_form">
            <form >
              <h2>Login</h2>

              <div class="input_box">
                <input type="email" placeholder="Enter your email" required />
                <i class="uil uil-envelope-alt email"></i>
              </div>
              <div class="input_box">
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <i class="uil uil-lock password"></i>
                <i class="uil uil-eye-slash pw_hide"></i>
              </div>

              <div class="option_field">
                <span class="checkbox">
                  <input type="checkbox" id="check" />
                  <label for="check">Remember me</label>
                </span>
                <a href="#" class="forgot_pw">
                  Forgot password?
                </a>
              </div>

              <button class="button">Login Now</button>

              <div class="login_signup">
                Don't have an account?{" "}
                <a href="#" id="signup">
                  Signup
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
