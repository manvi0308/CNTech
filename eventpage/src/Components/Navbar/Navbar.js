import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-blue font-white fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.vhv.rs/dpng/d/575-5752613_coding-ninjas-blog-graphic-design-hd-png-download.png"
              width="140"
              height="60"
              alt="Logo"
              className="logo"
            />
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown outside-list-items">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Data Structures and Algorithms
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Competitive Programming
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Interview Preparation
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Web Development
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Analytics and Data Science
                    </a>
                  </li>{" "}
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Android Development
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Career Camp Freshers
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Career Camp Professionals
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown  outside-list-items">
                <a
                  class="nav-link "
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mock Interviews
                </a>
              </li>
              <li class="nav-item dropdown  outside-list-items">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Community
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Events
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Placement Prep
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Placement Cell
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Campus Ninja
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown  outside-list-items">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Practice
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Contest
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Guided Paths{" "}
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Code Problems
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Interview Experiences
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Mock Tests
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown  outside-list-items">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Career Camp
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Professionals
                    </a>
                  </li>
                  <li className="inside-list-items">
                    <a class="dropdown-item inside-links" href="#">
                      Freshers
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown  outside-list-items">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <button className="enrolButton">Enrol Now</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
