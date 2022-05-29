import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://profile-images.xing.com/images/8a5c3a56f55741fabf8911d38469b737-5/nicole-distler.1024x1024.jpg",
      message: "Whats up 💌",
    },
    {
      name: "Ellen",
      image:
        "https://instagram.ftpe8-2.fna.fbcdn.net/v/t51.2885-15/295070132_592058892505800_2044996711582026705_n.jpg?stp=dst-jpg_e15_p480x480&_nc_ht=instagram.ftpe8-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=wkbtZwoCaCYAX8sMmlP&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=Mjg4ODYyNzg0MTIwNzk3NzI4OQ%3D%3D.2-ccb7-5&oh=00_AT8mIJUjpOhsziyvHfI4KV2gTSBNwWXw0ExuEC7Zkf5JGg&oe=62DF05D0&_nc_sid=276363",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you Ellen!",
    },
  ]);

  return (
    <div className="chatScreen">
      <h2>Chat screen</h2>
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
