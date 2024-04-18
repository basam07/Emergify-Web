import "./Dashboard.css";

function pendingRequests() {

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
              <button className="bar-btn">
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
              <button className="bar-btn">
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
              <button className="bar-btn">
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

                <div class="text">Pending</div>
              </button>
            </li>
            <li>
              <button className="bar-btn">
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
            <h2>Requests</h2>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
            <li className="row">
              <div class="column" id="name">
                <text>Name of Victum</text>
              </div>
              <div class="column" id="pNo">
                <text>Phone No</text>
              </div>
              <div class="column" id="distance">
                <text>Distance</text>
              </div>
              <div class="column" id="button">
                <button className="list-btn">
                  <p>Show</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default pendingRequests;
