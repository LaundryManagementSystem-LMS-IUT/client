import { useState } from "react";
import { Send } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Socket } from "socket.io-client";
import { IonIcon } from "@ionic/react";
import { sendSharp } from "ionicons/icons";

type SendMessageChatRoomProps={
  user:{
    id:string,
    token:string
  },
  imageURL:string,
  noSubscriber:boolean,
  senderID:string,
  receiverID:string,
  socket:Socket
} 

const SendMessageChatRoom = ({user,imageURL,noSubscriber,senderID,receiverID,socket}:SendMessageChatRoomProps) => {
  const [message, setMessage] = useState("");
  const navigate=useNavigate();
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {

  };
  return (
    <form
      className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2"
      onSubmit={handleSubmit}
    >
      <img
        src={imageURL}
        alt="avatar 3"
        className="chatSenderImage"
      />
      <div className="input-group">
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="button-submit-send"><IonIcon icon={sendSharp}></IonIcon></button>
      </div>
    </form>
  );
};

export default SendMessageChatRoom;