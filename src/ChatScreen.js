import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Tl2HFA50kmybMKgD6FteYIPq6DUzRQMGji69NxeDutAcpPwfqRV_iruYGfU40zXD9pU&usqp=CAU",
      message: "Whats up 💌",
    },
    {
      name: "Ellen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Tl2HFA50kmybMKgD6FteYIPq6DUzRQMGji69NxeDutAcpPwfqRV_iruYGfU40zXD9pU&usqp=CAU",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you Ellen!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

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

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
