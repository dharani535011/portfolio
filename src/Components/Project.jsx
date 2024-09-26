import React from 'react';
import img from '../../public/1.png';
import img1 from '../../public/2.png';
import img2 from '../../public/3.png';
import img3 from '../../public/4.png';

const Project = () => {
  return (
    <div className='project'>
      <div className='pm'>
        <div className='ph'>
          <h1>My Projects</h1>
        </div>
        <div className='row row-cols-1 row-cols-md-3 gap-4 pi'>
          <div className='col'>
            <img className='img-fluid' src={img} alt="Project 1" />
          </div>
          <div className='col'>
            <img className='img-fluid' src={img1} alt="Project 2" />
          </div>
          <div className='col'>
            <img className='img-fluid' src={img2} alt="Project 3" />
          </div>
          <div className='col'>
            <img className='img-fluid' src={img3} alt="Project 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
