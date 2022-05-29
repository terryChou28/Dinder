import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: 
                "",
            message: "Whats up "
        },
        {
            name: "Ellen",
            image: 
                "",
            message: "Hows it going!"
        },
        {
            message: "Hi! How are you Ellen!"
        }
    ]);

  return (
    <div className="chatScreen">
        <h2>Chat screen</h2>
        <p>YOU MATCHED WITH ELLEN ON 10/08/20</p>
        {messages.map(message => (
            <div className="chatScreen__message">
                <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                />
                <p>{message.message}</p>
            </div>
        ))}
    </div>
  );
}

export default ChatScreen
