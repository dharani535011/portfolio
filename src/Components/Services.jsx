import React from 'react';

const Services = () => {
  return (
    <div className='services'>
      <div><h1>My Services</h1></div>
      <div className='row sb'>
        <div className='col-md-4 col-lg-3'>
          <h5>01</h5>
          <h4>Responsive Web Design</h4>
          <p>Creating visually appealing and fully responsive websites using HTML, CSS, JavaScript, and frameworks like Bootstrap or Tailwind CSS.</p>
        </div>
        <div className='col-md-4 col-lg-3'>
          <h5>02</h5>
          <h4>Frontend Development</h4>
          <p>Building interactive and dynamic user interfaces using modern JavaScript frameworks like React.</p>
        </div>
        <div className='col-md-4 col-lg-3'>
          <h5>03</h5>
          <h4>Backend Development</h4>
          <p>Developing server-side applications using Node.js, Express.</p>
        </div>
        <div className='col-md-4 col-lg-3'>
          <h5>04</h5>
          <h4>API Development and Integration</h4>
          <p>Creating RESTful APIs endpoints for applications and integrating third-party APIs (like Stripe, Razorpay, etc.).</p>
        </div>
        <div className='col-md-4 col-lg-3'>
          <h5>05</h5>
          <h4>Database Management</h4>
          <p>Designing, managing, and optimizing databases using technologies like MongoDB, MySQL.</p>
        </div>
        <div className='col-md-4 col-lg-3'>
          <h5>06</h5>
          <h4>Full Stack Application Development</h4>
          <p>Developing end-to-end web applications, combining both frontend and backend technologies.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
