import React from "react";
import useNotification from "./hooks/useNotification";

// Define a simple component
const App = () => {
    const { NotificationComponent, triggerNotification } = useNotification("top-right");


    return (
        <div style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial" }}>
            {NotificationComponent}
            <button onClick={() => {
                triggerNotification({
                    title:"Welcome!",
                    type: "question",
                    message: "This is a success message!",
                    duration: 3000,
                });
            }}>

                Display Toast Notification
            </button>
            <h1>Welcome to React with TypeScript</h1>
            <p>This is a basic page setup using React and TypeScript.</p>
        </div>
    );
};

export default App;
