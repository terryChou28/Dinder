import React from "react"
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you "
        timestamp="35 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwcYhOdsG0WJ6_pzpkYuf3n_o4EljqaPbScHGQgSI9t1l_V_rbpJJNQZ07-8vX4VYKuo&usqp=CAU"
      />
      <Chat
        name="Ellen"
        message="Whats up  ?"
        timestamp="55 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Tl2HFA50kmybMKgD6FteYIPq6DUzRQMGji69NxeDutAcpPwfqRV_iruYGfU40zXD9pU&usqp=CAU"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://i0.codibook.net/files/1979032250572/a1/767276358.jpg"
      />
      <Chat
        name="Natasha"
        message="Oops there is he is... "
        timestamp="1 week ago"
        profilePic="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/f6ssi4c7donpr2anln0z"
      />
  </div>;
}

export default Chats
