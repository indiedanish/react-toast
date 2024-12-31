import React, { useEffect, useRef } from "react";
import {
  AiOutlineClose,
} from "react-icons/ai";
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
  error: <ErrorIcon />
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

  return (
    <div
      className={`notification ${type} ${animations[animation]}`}
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex={-1}
      ref={notificationRef}

    >
      <div class='icon-container'>
        <span class="circle-icon">{icons[type]}</span>
        <span class="bubble-icon">
          <BubblesIcon fill={colors[type]} />
        </span>


      </div>
      <div>

        <h2>{title}</h2>
        <p>{message}</p>

      </div>
      <div>

        <button className="closeBtn" onClick={() => onClose()}>
          <AiOutlineClose color="white" />
        </button>

      </div>

    </div>
  );
};

export default Notification;
