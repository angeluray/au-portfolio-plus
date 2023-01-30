/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FileSaver from 'file-saver';
import { MDBIcon } from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutHome = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      `${process.env.PUBLIC_URL}/resource/Resume.pdf`,
      'URAY-RESUME.pdf',
    );
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-3">
      <div className="d-flex justify-content-center mb-4 pt-4">
        <hr className="devider" />
        <h3 className="h3-title">About me</h3>
        <hr className="devider" />
      </div>
      <h3 className="about-home" data-aos="fade-rigth">
        I am a Full-stack developer, but you can call me
        {' '}
        <span className="different">ready</span>
        .
      </h3>
      <div className="circle-7 rounded-circle position-absolute opacity-70" />
      <p className="about-home-description" data-aos="fade-left">
        Today I help companies and individuals to make their businesses
        meet the needs of users and customers by creating,
        maintaining, and improving their Internet presence through Web Applications
        as a self-taught Full-Stack Software Developer.
        I actively seek new opportunities to improve my knowledge,
        face new challenges and grow as a professional within this groundbreaking field.
      </p>
      <Button onClick={saveFile} className="d-flex align-items-center gap-2" data-aos="fade-left">
        <MDBIcon fas icon="cloud-download-alt" />
        Get my CV
      </Button>
    </div>
  );
};

export default AboutHome;
