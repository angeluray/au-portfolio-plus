/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Modal from './Modal';

const ProjectCardItem = (props) => {
  const { project } = props;
  const {
    cardImage, cardDescription, title, id,
  } = project;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <MDBCard data-aos="fade-up" background="transparent" className="col-lg-6">
        <MDBCardImage src={cardImage} position="top" alt="..." className="p-3 col-lg-3" id={`card-img-${id}`} />
        <MDBCardBody className="cardBodyItem" background="transparent">
          <MDBCardTitle className="title-pj">{title}</MDBCardTitle>
          <MDBCardText className="description-pj">
            {cardDescription}
          </MDBCardText>
          <MDBBtn onClick={() => setScrollableModal(!scrollableModal)} className="button-pj">See more</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <Modal modalshow={scrollableModal} set={setScrollableModal} project={project} />

    </>
  );
};

export default ProjectCardItem;
