/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCardImage,
  MDBBadge,
  MDBIcon,
} from 'mdb-react-ui-kit';

const Modal = (props) => {
  const { project, modalshow, set } = props;

  return (
    <>
      <MDBModal show={modalshow} setShow={set} tabIndex="-1">
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="modal-title">{project.title}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => set(!modalshow)}
              />
            </MDBModalHeader>
            <MDBCardImage src={project.image} position="top" alt="" id={`card-img-${project.id}`} />
            <MDBModalBody>
              <p className="p-1">
                { project.description }
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <hr className="devider" />
                <h3 className="h4-title">Project&apos;s stack</h3>
                <hr className="devider" />
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-2 p-3 w-70">
                <MDBBadge className="modal-badge">{project.tools[0]}</MDBBadge>
                <MDBBadge className="modal-badge">{project.tools[1]}</MDBBadge>
                <MDBBadge className="modal-badge">{project.tools[2]}</MDBBadge>
                <MDBBadge className="modal-badge">{project.tools[3]}</MDBBadge>
                <MDBBadge className="modal-badge">{project.tools[4]}</MDBBadge>
                <MDBBadge className="modal-badge">{project.tools[5]}</MDBBadge>
              </div>
            </MDBModalBody>
            <MDBModalFooter className="d-flex justify-content-center">
              <MDBBtn href={project.liveDemo} target="_blank" className="modal-btn">
                <MDBIcon fas icon="globe-americas" />
                Live demo
              </MDBBtn>
              <MDBBtn href={project.liveSource} target="_blank" className="modal-btn">
                <MDBIcon fab icon="github" />
                Source code
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Modal;
