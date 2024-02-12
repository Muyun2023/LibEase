// Home.jsx
import React from 'react';
import Card from '../components/Card';


const Home = () => {

  return (
    <div>
      <div id="main-content"></div>
      <h1>Our collection is Changing!</h1>
      <p>
        Try to check in daily as our collection is always changing! We work nonstop to provide the most accurate book
        selection possible for our Cloud Library students! We are diligent about our book selection, and our books are
        always going to be our top priority.
      </p>
      <div className="card-container">
        <Card
          imageSrc="mybook1"
          title="Deep Learning"
          description="Deep learning is a type of artificial intelligence (AI) that teaches computers to process data in a way that mimics the human brain. It's a subfield of machine learning that has significantly advanced the field of AI."
        />
        <Card
          imageSrc="mybook2"
          title="Programming Advance"
          description="Advanced programming is a more specialized level of programming that allows learners to integrate and improve their skills and knowledge. Advanced programmers create solutions, libraries, packages, or tools for normal programmers."
        />
        <Card
          imageSrc="mybook3"
          title="Nature Explore"
          description="Nature provides countless opportunities for discovery, creativity, problem-solving, and STEM education. Interacting with natural environments allows children to learn by doing and experiment with ideas.  "
        />
        <Card
          imageSrc="mybook4"
          title="Skill for Success"
          description="Communication, Problem solving, Teamwork, Initiative, Analytical, quantitative, Professionalism, work ethic, Leadership, Detail oriented, Continuous learning, Creativity and innovation, Organizational awareness, Self-awareness."
        />
        <Card
          imageSrc="mybook5"
          title="Networking English"
          description="Networking is the process of exchanging information and building relationships with people. It can be done in a group or one-on-one setting."
        />
        <Card
          imageSrc="mybook6"
          title="Human Resource"
          description="What Is Human Resources (HR)? Human resources (HR) is the division of a business that is charged with finding, recruiting, screening, and training job applicants. "
        />
      </div>
    </div>
  );
};

export default Home;