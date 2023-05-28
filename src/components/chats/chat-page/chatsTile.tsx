import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type ChatTileProps={
  user:{
    id:string,
    token:string
  },
  imageURL:string,
  sender:{
    senderID:string,
    senderName:string
  },
  message:string,
  datetime:Date,
  messageCount:string,
  index:number,
  currentSender:string,
  noSubscriber:boolean
}

const ChatTile = ({user,imageURL,sender,message,datetime,messageCount,index,currentSender,noSubscriber}:ChatTileProps) => {
  const dispatch=useDispatch();
  const [notifications, setNotification] = useState(0);

  return (
    <li className="p-2 border-bottom" key={sender.senderID}>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div>
            <img
              src={imageURL}
              alt="avatar"
              className="d-flex align-self-center me-3"
              width="60"
            />
            <span className="badge bg-success badge-dot"></span>
          </div>
          <div className="pt-1" style={{ textAlign: "left" }}>
            <p className="fw-bold mb-0">{sender.senderName}</p>
            <p className="small text-muted">{message}</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">{datetime.toLocaleDateString()}</p>
          <span className="badge bg-danger rounded-pill float-end">
            {notifications}
          </span>
        </div>
      </div>
    </li>
  );
};

export default ChatTile;