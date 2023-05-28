import { useEffect, useState } from "react";
import ChatReceiver from "./chatsReceiverMessage";
import ChatSender from "./chatsSenderMessage";
import axios from "axios";
import Loader from "../../partials/loader";
import { Socket } from "socket.io-client";

type ChatBoxProps={
  user:{
    id:string,
    token:string
  },
  noSubscriber:boolean,
  id:string,
  senderImageURL:string,
  receiverImageURL:string,
  handleReload:React.Dispatch<React.SetStateAction<boolean>>,
  senderID:string,
  socket:Socket,
  message:string
}

type messages={
  messageContent:string,
  SentTime:Date,
  receiverID:string,
  senderID:string
}[]

type message={
  messageContent:string,
  SentTime:Date,
  receiverID:string,
  senderID:string
}



const ChatBox = ({user,noSubscriber,id,senderImageURL,receiverImageURL,message,senderID,socket}:ChatBoxProps) => {
  const [messages,setMessages]=useState<messages>([]);
  const [isLoading,setIsLoading]=useState(false);

  if(noSubscriber===true || !isLoading){
    return ( 
      <div
        className="scrollable pt-3 pe-3"
        style={{
          position: "relative",
          height: "74vh",
          overflowY: "scroll",
        }}
      >
        {messages.map((msg, index) =>
          msg.receiverID === id ? (
            <ChatReceiver
              imageURL={receiverImageURL}
              message={msg.messageContent}
              datetime={msg.SentTime}
            />
          ) : (
            <ChatSender
              imageURL={senderImageURL}
              message={msg.messageContent}
              datetime={msg.SentTime}
            />
          )
        )}
      </div> );
  }
  else {
    return (
      <Loader/>
    );
  }
}

 
export default ChatBox;