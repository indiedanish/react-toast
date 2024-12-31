import React, { useState, useCallback } from "react";
import Notification from "../components/Notification";
import { v4 as uuidv4 } from "uuid";

const useNotification = (position) => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = useCallback(
    (notificationProps) => {
      const toastId = uuidv4();
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { id: toastId, ...notificationProps },
      ]);

      setTimeout(() => {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((n) => n.id !== toastId)
        );
      }, notificationProps.duration);
    },
    []
  );

  const handleNotificationClose = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.id !== id)
    );
  };

  const NotificationComponent = (
    <div className={`notification-container ${position} ${position.split("-")[0]}`}>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => handleNotificationClose(notification.id)}
        />
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
