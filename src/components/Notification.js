// src/components/Notification.js
import React from "react";
import "../css/notification.css";

function Notification({ message }) {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
}

export default Notification;
