import { useFormik } from 'formik';
import React from 'react';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.mail) {
    errors.mail = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.mail)) {
    errors.mail = "Invalid email format";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
};

const Touch = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mail: "",
      message: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className='touch'>
      <div className='th'>
        <h1>Get in touch</h1>
      </div>
      <div className='tb'>
        <div className='tr'>
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message
            about anything that you want me to work on. You can contact me anytime.
          </p>
          <p>
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <p>dharani535011@gmail.com</p>
          </p>
          <p>
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <p>8925096086</p>
          </p>
          <p>
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <p>Tamil Nadu, India</p>
          </p>
        </div>
        <div className='tl'>
          <form onSubmit={formik.handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name='name'
              placeholder='Enter your name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}

            <label>Your Email</label>
            <input
              type="email"
              name='mail'
              placeholder='Enter your email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mail}
            />
            {formik.touched.mail && formik.errors.mail ? <p>{formik.errors.mail}</p> : null}

            <label>Write your message here</label>
            <textarea
              name='message'
              placeholder='Enter your message'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? <p>{formik.errors.message}</p> : null}

            <button className='button' type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Touch;
