import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OfflineTrainingImg from "../assets/images/offlinetraining.jpeg";

const OfflineTraining = () => {
  const { isAuthenticated, currentUser, hasSubscription } = useAuth();
  const navigate = useNavigate();
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/subscription");
    }
  }, [isAuthenticated, navigate]);
  const handleClickHere = () => {
    if (isAuthenticated) {
      // If user is logged in, navigate to the corresponding resource
      navigate("/subscription-form");
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="container py-5">
            <h2 className=" text-warning mb-4">
              🏫 Detailed Topics & Pedagogical Content
            </h2>
            {/* <p className="text-center mb-5">
              Meet fellow students and educators face-to-face in your area.
            </p> */}
            {/* <div className="col-md-6 text-center training-img">
              <img src={OfflineTrainingImg} alt="Online Training" />
            </div> */}

            {/* <ul className="list-group shadow mt-4">
              <li className="list-group-item">
                <strong>May 29, 2025:</strong> STEM Workshop – Lincoln High
                School, NY
              </li>
              <li className="list-group-item">
                <strong>June 3, 2025:</strong> Project Showcase – Community
                Learning Center, LA
              </li>
            </ul> */}
            
              <h5 className="mt-4">1. Yoga for Focus & Concentration in Teenagers</h5>
              <div><strong>Why It Matters</strong>: Cognitive overload and screen fatigue are real.</div>
              <div><strong>What to Teach</strong>: Trataka (candle gazing), Brahmari pranayama, simple balancing asanas like Vrikshasana.</div>
              <div><strong>Methodology</strong>: Combine breathing with classroom transitions (e.g., before exams or lectures).</div>
              <div><strong>Resources</strong>: CBSE Yoga Manual + Mindfulness Bell App.</div>

              <h5 className="mt-4">2. Digital Detox Yoga: Combating Screen Fatigue</h5>

              <div><strong>Why It Matters</strong>: Students and teachers alike spend 6–8 hours daily on screens.</div>
              <div><strong>What to Teach</strong>: Eye yoga, wrist stretches, seated asanas, and “tech neck” relief postures.</div>
              <div><strong>Methodology</strong>: Short 5-minute breaks mid-classes or after lunch periods.</div>
              <div><strong>Activity</strong>: “Stretch Leader of the Day” role for students.</div>

              <h5 className="mt-4">3. Yoga Nidra for Emotional Balance</h5>

              <div><strong>Why It Matters</strong>: Sleep-deprived and anxious teens need restorative practices.</div>
              <div><strong>What to Teach</strong>: 10-minute guided yoga nidra, grounding visualizations.</div>
              <div><strong>Methodology</strong>: End-of-day calm-down activity or pre-exam routine.</div>
              <div><strong>Tools</strong>: Pre-recorded audio + reflection worksheet.</div>

              <h5 className="mt-4">4. Pranayama & Stress Management</h5>

              <div><strong>Why It Matters</strong>: Chronic stress hampers attention, retention, and behavior.</div>
              <div><strong>What to Teach</strong>: Nadi Shodhana, Ujjayi breath, box breathing.</div>
              <div><strong>Methodology</strong>: Pair breathwork with emotional check-ins or journaling.</div>
              <div><strong>Classroom Tip</strong>: Use color-coded “mood cards” + breath match.</div>

              <h5 className="mt-4">5. Aligning Yoga with NEP 2020 & Holistic Development</h5>

              <div><strong>Why It Matters</strong>: The new policy recommends value-based and experiential learning.</div>
              <div><strong>What to Teach</strong>: Introduce Yoga Sutras with story-based learning and ethics (yama-niyama).</div>
              <div><strong>Methodology</strong>: Co-teach with value ed / moral science sessions.</div>
              <div><strong>Tool</strong>: Develop Yoga + Civics integrated lesson plans.</div>

              <h5 className="mt-4">6. Creative Yoga: Art, Music & Movement</h5>

              <div><strong>Why It Matters</strong>: Multisensory learning boosts joy and retention.</div>
              <div><strong>What to Teach</strong>: Flow yoga set to calming music, Mandala creation post-session.</div>
              <div><strong>Methodology</strong>: Combine yoga sessions with visual art or music class slots.</div>
              <div><strong>Bonus</strong>: Use Canva to create personalized affirmation cards.</div>

              <h5 className="mt-4">7. ‍Teaching Yoga in a Classroom Setting (Non-Studio Approach)</h5>

              <div><strong>Why It Matters</strong>: Teachers need tools that work within limited space & time.</div>
              <div><strong>What to Teach</strong>: Desk yoga, partner poses, standing asanas.</div>
              <div><strong>Methodology</strong>: 5-minute movement breaks; “Yoga Bell” technique; student-led warm-ups.</div>
              <div><strong>Printable</strong>: Daily posture-of-the-day chart.</div>

          </div>
        </div>

        {isAuthenticated && !hasSubscription && (
          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere();
              }}
            >
              Enroll in UNS for this facility
            </button>
          </div>

          //  : (
          //   <a
          //     href="https://docs.google.com/forms/d/e/1FAIpQLScDm7aodpA71cr0mAqn7uf844lpWLvsu3vkOxSNd7q7YDEszA/viewform?usp=dialog"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     Join Now
          //   </a>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OfflineTraining;
