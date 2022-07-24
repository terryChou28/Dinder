import React from "react"
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you "
        timestamp="35 minutes ago"
        profilePic="https://instagram.ftpe8-2.fna.fbcdn.net/v/t51.2885-15/295070132_592058892505800_2044996711582026705_n.jpg?stp=dst-jpg_e15_p480x480&_nc_ht=instagram.ftpe8-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=wkbtZwoCaCYAX8sMmlP&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=Mjg4ODYyNzg0MTIwNzk3NzI4OQ%3D%3D.2-ccb7-5&oh=00_AT8mIJUjpOhsziyvHfI4KV2gTSBNwWXw0ExuEC7Zkf5JGg&oe=62DF05D0&_nc_sid=276363"
      />
      <Chat
        name="Ellen"
        message="Whats up  ?"
        timestamp="55 minutes ago"
        profilePic="https://media-exp2.licdn.com/dms/image/C4E03AQHoWkJ7NgUTSw/profile-displayphoto-shrink_200_200/0/1652432423341?e=1661990400&v=beta&t=aA7ZDdJV29rQIuNRWrOx41FAPregKiN35BhkGjzx27A"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic=""
      />
      <Chat
        name="Natasha"
        message="Oops there is he is... "
        timestamp="1 week ago"
        profilePic=""
      />
  </div>;
}

export default Chats
