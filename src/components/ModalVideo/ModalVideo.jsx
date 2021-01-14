import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

import "./ModalVideo.scss";

export default function ModalVideo(props) {
  const { videoKey, videoPlatform, isOpen, close } = props;
  const [urlVideo, setUrlVideo] = useState(null);

  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoKey, videoPlatform]);

  return (
    <Modal className="modal-video" size="xl" show={isOpen} onHide={close}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <ReactPlayer url={urlVideo} controls />
      </Modal.Body>
    </Modal>
  );
}
