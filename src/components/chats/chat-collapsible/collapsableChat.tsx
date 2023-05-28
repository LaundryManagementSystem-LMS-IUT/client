import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardFooter,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Send, ArrowDownCircle } from "react-bootstrap-icons";
import { Badge, Button, Form, InputGroup } from "react-bootstrap";
import CollapsibleSender from "./collapsibleSenderMessage";
import CollapsibleReceiver from "./collapsibleReceiverMessage";
import axios from "axios";
import io from "socket.io-client";
import { IonIcon } from "@ionic/react";
import { arrowDownCircleOutline, arrowUpCircleOutline, sendOutline, sendSharp } from "ionicons/icons";

type CollapsibleChatProps={
  senderID:string,
  receiverID:string,
  JWT:{
    _id:string,
    token:string,
    userType:string
  }
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

const CollapsibleChat = ({senderID,receiverID,JWT}:CollapsibleChatProps) => {
  const socket = io("http://localhost:4110");
  const [sender, setSender] = useState({
    imageURL:"/demoProilePicture.jpg"
  });
  const [receiver, setReceiver] = useState({
    imageURL:"/demoProilePicture.jpg"
  });
  const [showShow, setShowShow] = useState(false);
  const [messages, setMessages] = useState<messages>([]);
  const [messageNotifier,setMessageNotifier]=useState(null);
  const [notifications,setNotifications] = useState(0);


  const [message, setMessage] = useState("");
  const [loading,setLoading]=useState(false);




  socket.on("message",  (message:message) => {

  });

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  const toggleShow=()=>{
    setShowShow(!showShow);
  }

  if(loading===false){
    return (
      <MDBContainer
        fluid
        className="py-5"
        style={{
          width: "50vh",
          position: "fixed",
          zIndex: "5",
          marginRight: "2%",
          marginBottom: "2%",
          bottom: "2%",
          right: "2%",
        }}
      >
        <MDBBtn onClick={toggleShow} size="sm" className="chatButton" block>
          <div className="d-flex">
            <span>{notifications>0 && (<sup><Badge bg="danger">{notifications}</Badge></sup>)}Chat</span>
            <IonIcon icon={arrowUpCircleOutline}></IonIcon>
          </div>
        </MDBBtn>
        <MDBCollapse show={showShow} className="chatCollapse">
          <MDBCard id="chat4">
            <div
              className="scrollable chatCard"
            >
              <MDBCardBody>
                {messages.map((msg, index) =>
                  msg.receiverID === receiverID ? (
                    <CollapsibleReceiver
                      imageURL={receiver.imageURL}
                      message={msg.messageContent}
                      datetime={msg.SentTime}
                    />
                  ) : (
                    <CollapsibleSender
                      imageURL={sender.imageURL}
                      message={msg.messageContent}
                      datetime={msg.SentTime}
                    />
                  )
                )}
              </MDBCardBody>
            </div>
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src={'/customerProfilePicture.jpg'}
                alt="avatar 2"
                className="chatSenderImage"
              />
              <form onSubmit={handleSubmit}>
              <div className="d-flex input-group">
                <input type="text"
                className="form-control form-control-sm"
                id="exampleFormControlInput3"
                placeholder="Type message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit" className="button-submit-send">
                  <IonIcon icon={sendSharp}></IonIcon>
                </button>
              </div>
              </form>
            </MDBCardFooter>
          </MDBCard>
        </MDBCollapse>
      </MDBContainer>
    );
  }
  else{
    return (
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ marginLeft: "50%", marginTop: "10%" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
};

export default CollapsibleChat;
