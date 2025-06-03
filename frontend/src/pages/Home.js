import React from "react";
import "../assets/scss/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import diglib from "../assets/images/diglib.jpg";
import lms from "../assets/images/lms.jpg";
import online from "../assets/images/online.jpg";
import offline from "../assets/images/Offline.jpg";
import networking from "../assets/images/networking.jpg";
import collab from "../assets/images/collab.jpg";
import yoga1 from "../assets/images/yoga01.jpg";
import yoga2 from "../assets/images/yoga02.jpg";
import yoga3 from "../assets/images/yoga03.jpg";
import industry from "../assets/images/ind.jpg";
import digvideo from "../assets/images/digvideo.jpg";
import award from "../assets/images/award.png";
import money from "../assets/images/money.png";
import material from "../assets/images/material.png";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClickHere = (resource) => {
    if (isAuthenticated) {
      // If user is logged in, navigate to the corresponding resource
      switch (resource) {
        case "ebook":
          navigate("/ebook");
          break;
        case "lms":
          navigate("/lms");
          break;
        case "online":
          navigate("/online-training");
          break;
        case "offline":
          navigate("/offline-training");
          break;

        case "networking":
          navigate("/networking");
          break;

        case "collaborative":
          navigate("/collaborative-projects");
          break;

        case "industry":
          navigate("/industry");
          break;
        case "digivideo":
          navigate("/digital-videos");
          break;

        default:
          navigate("/ebook");
      }
    } else {
      // If user is not logged in, navigate to subscription page
      navigate("/subscription");
    }
  };

  // const SampleNextArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="slick-arrow"
  //       onClick={onClick}
  //       style={{
  //         position: "absolute",
  //         right: "-25px",
  //         top: "50%",
  //         transform: "translateY(-50%)",
  //         zIndex: 1,
  //         cursor: "pointer",
  //         fontSize: "24px",
  //         color: "#007bff",
  //       }}
  //     >
  //       <i className="fa fa-chevron-right"></i>
  //     </div>
  //   );
  // };

  // const SamplePrevArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="slick-arrow"
  //       onClick={onClick}
  //       style={{
  //         position: "absolute",
  //         left: "-25px",
  //         top: "50%",
  //         transform: "translateY(-50%)",
  //         zIndex: 1,
  //         cursor: "pointer",
  //         fontSize: "24px",
  //         color: "#007bff",
  //       }}
  //     >
  //       <i className="fa fa-chevron-left"></i>
  //     </div>
  //   );
  // };

  return (
    <>
      <Header />

      {/* Hero Section */}

      <div className="jumbotron jumbotron-fluid position-relative overlay-bottom">
        <div className="container text-center my-5 py-5">
          <h1 className="text-white display-1 mb-5">
            Yoga for Edsurance<span className="fs-20"></span>
          </h1>
        </div>
      </div>

      <div className="container-fluid bg-image"></div>

      <div className="client_section container">
        <div className="box">
          <div className="img-box">
            <img src={online} alt="Digital Libraries" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Weekly Online Yoga Education Session for School Teachers</h5>
                <h6>📅 Every Saturday & Sunday<br/>
                    🕒 Time: 4:00 PM – 5:00<br/>
                    📍 Live on: Google Meet<br/>
                    🎓 For Teachers of Grades 6 to 12<br/>
                    🧾 E-Certificates for Participation
                </h6>
              </div>
            </div>
            <a
              className="btn btn-primary mt-3 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("online");
              }}
            >
              View Details
            </a>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={yoga1} alt="LMS" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Why Attend?</h5>
                <h6>Explore <strong>  modern pedagogies</strong> in yoga teaching.<br/>
                    Align yoga practice with <strong>mental wellness, focus, and emotional intelligence</strong>.<br/>
                    Learn how to embed yoga in <strong>CBSE/ICSE curriculum & NEP 2020 guidelines</strong>.<br/>
                    Get <strong>ready-to-use lesson plans, meditation scripts, and student-friendly practices</strong></h6>
              </div>
            </div>
            {/* <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("lms");
              }}
            >
              View Details
            </a> */}
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={yoga3} alt="Online Workshops" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Session Includes</h5>
                <h6>
                  Live guided yoga & pranayama<br/>
                  Scientific breakdown of poses<br/>
                  Teaching hacks for teenagers. Ready-to-use digital classroom resources
                </h6>
              </div>
            </div>
            {/* <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("online");
              }}
            >
              View Details
            </a> */}
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={offline} alt="Offline Workshops" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Detailed Topics & Pedagogical Content</h5>
                <h6>
                  Each weekly session can focus on a <b>contemporary theme</b> that blends <b>ancient yogic wisdom with modern educational methods</b>
                </h6>
              </div>
            </div>
            <a
              className="btn btn-primary mt-2 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("offline");
              }}
            >
              View Details
            </a>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={yoga2} alt="Networking" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Additional Support Resources</h5>
                <h6><strong>Apps</strong>: Sattva, Calm, Insight Timer (for guided meditations). 
                  <strong>CBSE Yoga Manual</strong>: Available on cbseacademic.nic.in<br/>
                  <strong>NEP Yoga Guidelines</strong>: Refer to Ministry of Education circulars<br/>
                  <strong>Videos</strong>: Ayush Ministry YouTube channel; Art of Living school sessions<br/>
                  <strong>Web Tools</strong>: Canva (for posters), Flipgrid (student reflection), Jamboard (emotion mapping)</h6>
              </div>
            </div>
            {/* <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("networking");
              }}
            >
              View Details
            </a> */}
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={collab} alt="Collaborative Projects" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Teaching Yoga in a Classroom Setting </h5>
                <h6><strong>Why It Matters</strong>: Teachers need tools that work within limited space & time.
                  <strong>What to Teach</strong>: Desk yoga, partner poses, standing asanas.
                  <strong>Methodology</strong>: 5-minute movement breaks; “Yoga Bell” technique; student-led warm-ups.
                  <strong>Printable</strong>: Daily posture-of-the-day chart.</h6>
              </div>
            </div>
            {/* <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("collaborative");
              }}
            >
              View Details
            </a> */}
          </div>
        </div>
        {/* <div className="box">
          <div className="img-box">
            <img src={industry} alt="Industry" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Industry partnerships</h5>
                <h6>
                  Internships, job placements, collaborative research projects
                </h6>
              </div>
            </div>
            <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("industry");
              }}
            >
              View Details
            </a>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={digvideo} alt="Digital Videos" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Digital Videos</h5>
                <h6>
                  Access to thousands of videos for educational and, training
                </h6>
              </div>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("digivideo");
              }}
              className="btn btn-primary mt-5 text-center"
            >
              View Details
            </a>
          </div>
        </div> */}
      </div>
      {/* <div className="container">
        <div className="section-title text-center">
          <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2 my-4">
            Additional Incentives
          </h6>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="incentive-box">
              <div className="text-center">
                <img width="100px" src={award} alt="Awards" />
              </div>
              <h4>Recognition & Awards</h4>
              <p>
                National-level recognition for outstanding educators or
                institutions.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="incentive-box">
              <div className="text-center">
                <img width="100px" src={money} alt="Funding" />
              </div>
              <h4>Funding Opportunities</h4>
              <p>
                Grants for research projects, infrastructure development, and
                innovation initiatives.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="incentive-box">
              <div className="text-center">
                <img width="100px" src={material} alt="Resources" />
              </div>
              <h4>Resource Sharing</h4>
              <p>Educational materials, equipment, or funding</p>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default Home;
