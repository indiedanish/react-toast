import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Notification.css";
import SuccessIcon from './icons/SuccessIcon';
import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import QuestionIcon from './icons/QuestionIcon';
import { colors } from '../constants/index';
import BubblesIcon from './icons/BubblesIcon';

const icons = {
  success: <SuccessIcon />,
  question: <QuestionIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

const animations = {
  fade: "fadeIn",
  pop: "popup",
  slide: "slideIn",
};

const Notification = ({ type = "info", message, title, onClose, animation = "slide" }) => {
  // A11y
  const notificationRef = useRef(null);

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }
  }, []);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive = type === "error" || type === "warning" ? "assertive" : "polite";
  // A11y

  // Return nothing if title or message is missing
  if (!title || !message || !type) return null;

  return (
    <div
      className={`notification ${type} ${animations[animation]}`}
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex={-1}
      ref={notificationRef}
    >
      <div className="icon-container">
        <span className="circle-icon">{icons[type]}</span>
        <div className="bubble-container">
          <span className="bubble-icon">
            <BubblesIcon type={type} />
          </span>
        </div>
      </div>
      <div className="label-container">
        <h2>{title}</h2>
        <p>{message ?? "\u00A0"}</p>
      </div>

      <button className="closeBtn" onClick={() => onClose()}>
        <AiOutlineClose color="white" size={30} />
      </button>
    </div>
  );
};

export default Notification;
