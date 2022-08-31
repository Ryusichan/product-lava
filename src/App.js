// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "./res/css/bootstrap.min.css";
import "./res/css/flex-slider.css";
import "./res/css/font-awesome.css";
import "./res/css/owl-carousel.css";
import "./res/css/templatemo-lava.css";
import { Link } from "react-scroll";

function App() {
  const [menuShow, setMenuShow] = React.useState(false);

  const menuShowHandler = () => {
    setMenuShow(!menuShow);
  };

  const imageUrl = "./res/images";
  return (
    <div className="App">
      {/* <!-- ***** Preloader Start ***** --> */}
      {/* <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      {/* <!-- ***** Preloader End ***** --> */}

      {/* <!-- ***** Header Area Start ***** --> */}
      <header
        className="header-area header-sticky fixed"
        style={{ position: "fixed", backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                  Lava
                </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                <ul className="nav" style={{ display: menuShow && "block" }}>
                  <li className="scroll-to-section">
                    <Link
                      to="welcome"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="menu-item"
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="menu-item"
                      style={{ cursor: "pointer" }}
                    >
                      About
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="menu-item"
                      style={{ cursor: "pointer" }}
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="contact-us"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="menu-item"
                      style={{ cursor: "pointer" }}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <a className="menu-trigger" onClick={menuShowHandler}>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}

      {/* <!-- ***** Welcome Area Start ***** --> */}
      <div className="welcome-area" id="welcome">
        {/* <!-- ***** Header Text Start ***** --> */}
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Simple App that we <em>CREATE</em>
                </h1>
                <p>
                  Lava <a>HTML landing page</a> template is provided by{" "}
                  <a>TemplateMo</a>. You can modify and use it for your
                  commercial websites for free of charge. This template is last
                  updated on 29 Oct 2019.
                </p>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  // className="main-button-slider"
                >
                  <button className="main-button">KNOW US BETTER</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
      {/* <!-- ***** Welcome Area End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>01</h2>
                  <img
                    src={require(`${imageUrl}/features-icon-1.png`)}
                    alt=""
                  />
                  <h4>Trend Analysis</h4>
                  <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p>
                  <Link
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // className="main-button"
                  >
                    <button className="main-button">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              // data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>02</h2>
                  <img
                    src={require(`${imageUrl}/features-icon-2.png`)}
                    alt=""
                  />
                  <h4>Site Optimization</h4>
                  <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p>
                  <Link
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <button className="main-button">Discover More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              // data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>03</h2>
                  <img
                    src={require(`${imageUrl}/features-icon-3.png`)}
                    alt=""
                  />
                  <h4>Email Design</h4>
                  <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p>
                  <Link
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <button className="main-button">More Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      <div className="left-image-decor" style={{ left: 0 }}></div>

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section className="section" id="promotion">
        <div className="container">
          <div className="row">
            <div
              className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
              // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src={require(`${imageUrl}/left-image.png`)}
                className="rounded image-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
              <ul>
                <li
                // data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
                >
                  <img src={require(`${imageUrl}/about-icon-01.png`)} alt="" />
                  <div className="text">
                    <h4>Vestibulum pulvinar rhoncus</h4>
                    <p>
                      Please do not redistribute this template ZIP file for a
                      download purpose. You may{" "}
                      <a rel="nofollow" href="/" target="_parent">
                        contact
                      </a>{" "}
                      us for additional licensing of our template or to get a
                      PSD file.
                    </p>
                  </div>
                </li>
                <li
                // data-scroll-reveal="enter right move 30px over 0.6s after 0.5s"
                >
                  <img src={require(`${imageUrl}/about-icon-02.png`)} alt="" />
                  <div className="text">
                    <h4>Sed blandit quam in velit</h4>
                    <p>
                      You can{" "}
                      <a rel="nofollow" href="/">
                        download Lava Template
                      </a>{" "}
                      from our website. Duis viverra, ipsum et scelerisque
                      placerat, orci magna consequat ligula.
                    </p>
                  </div>
                </li>
                <li
                // data-scroll-reveal="enter right move 30px over 0.6s after 0.6s"
                >
                  <img src={require(`${imageUrl}/about-icon-03.png`)} alt="" />
                  <div className="text">
                    <h4>Aenean faucibus venenatis</h4>
                    <p>
                      Phasellus in imperdiet felis, eget vestibulum nulla.
                      Aliquam nec dui nec augue maximus porta. Curabitur
                      tristique lacus.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      <div className="right-image-decor" style={{ right: 0 }}></div>

      {/* <!-- ***** Testimonials Starts ***** --> */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="center-heading">
                <h2>
                  What They Think <em>About Us</em>
                </h2>
                <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p>
              </div>
            </div>
            <div
              className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
              // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div
                className="owl-carousel owl-theme"
                style={{ display: "flex" }}
              >
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src={require(`${imageUrl}/testimonial-author-1.png`)}
                        alt="Author One"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                    <h4>Jonathan Smart</h4>
                    <p>
                      “Nullam hendrerit, elit a semper pharetra, ipsum nibh
                      tristique tortor, in tempus urna elit in mauris.”
                    </p>
                    <span>Besta CTO</span>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src={require(`${imageUrl}/testimonial-author-2.png`)}
                        alt="Second Author"
                        style={{ borderRadius: "50%" }}
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                    <h4>Martino Tino</h4>
                    <p>
                      “Morbi non mi luctus felis molestie scelerisque. In ac
                      libero viverra, placerat est interdum, rhoncus leo.”
                    </p>
                    <span>Web Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Testimonials Ends ***** --> */}

      {/* <!-- ***** Footer Start ***** --> */}
      <footer id="contact-us">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              {/* <!-- ***** Contact Form Start ***** --> */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contact-form">
                  <form id="contact" action="" method="post">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            required=""
                            style={{
                              backgroundColor: "rgba(250, 250, 250, 0.3)",
                            }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            placeholder="E-Mail Address"
                            required=""
                            style={{ backgroundColor: "rgba(250,250,250,0.3)" }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows="6"
                            id="message"
                            placeholder="Your Message"
                            required=""
                            style={{ backgroundColor: "rgba(250,250,250,0.3)" }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button"
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- ***** Contact Form End ***** --> */}
              <div className="right-content col-lg-6 col-md-12 col-sm-12">
                <h2>
                  More About <em>Lava</em>
                </h2>
                <p>
                  Phasellus dapibus urna vel lacus accumsan, iaculis eleifend
                  leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in
                  porta metus. Suspendisse blandit pulvinar ligula ut elementum.
                  <br />
                  <br />
                  If you need this contact form to send email to your inbox, you
                  may follow our{" "}
                  <a href="/" rel="nofollow" target="_parent">
                    contact
                  </a>{" "}
                  page for more detail.
                </p>
                <ul className="social">
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  Copyright &copy; 2020 Lava Landing Page | Designed by{" "}
                  <a rel="nofollow">TemplateMo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
