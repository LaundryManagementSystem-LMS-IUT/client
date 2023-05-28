import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Search } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import ChatTile from "./chatsTile";
import axios from "axios";
import io from "socket.io-client";
import ChatBox from "./chatBox";
import SendMessageChatRoom from "./chatSendMessage";
import NavbarManager from "../../partials/navbarManager";
import HeaderManager from "../../partials/headerManager";
import { ActivePageType } from "../../../utils/activePageTypes";
import Loader from "../../partials/loader";

type Sender = {
  senderID: string;
  senderName: string;
  senderImageURL:string;
};

type Senders={
    senderID: string;
  senderName: string;
  senderImageURL:string;
  }[]


type Receiver = {
  receiverID: string;
  receiverName: string;
  imageURL:string;
};

type Subscriber={
  lastMessageTime:Date;
  lastMessage:string;
}

const ChatPage = () => {
  const socket = io("http://localhost:4110");
  const [receiver, setReceiver] = useState<Receiver>({
    receiverID: "123",
    receiverName: "1234",
    imageURL:"/customerProfilePicture.jpg"
  });
  const [currentSender, setCurrentSender] = useState<Sender>({
    senderID: "1236",
  senderName: "12345",
  senderImageURL:"/laundryProfilePicture.jpg"
  });
  const [currentSenderID, setCurrentSenderID] = useState("");
  const [loading, setLoading] = useState(false);
  const [senders, setSenders] = useState<Senders>([]);
  const [filteredValues, setFilter] = useState<Senders>([]);
  const [searchValue, setSearchValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [messagesMap, setMessagesMap] = useState(new Map<string,Subscriber>());
  const [newMessage, setNewMessage] = useState("");
  const [noSubscriber, setNoSubscriber] = useState(false);
  const [navigation,setNavigation]=useState(false);
  const token="123";

  const changeContacts = (input: string) => {
    console.log(input);
    setSearchValue(input);
    if (input !== "") {
      setFilter(
        senders.filter((sender) =>
          sender.senderName.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setFilter(senders);
    }
  };

  const retrieveUsers = async () => {};

  socket.on("message", (message) => {});

  const ToggleChat = async (sent:Sender) => {};

  if (!loading && receiver!==undefined && currentSender!==undefined) {
    return (
      <div className="chat-page">
        <NavbarManager
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.Chat}
      />
      <div className="container">
        <div className="main">
          <HeaderManager
            navigation={navigation}
            setNavigation={setNavigation}
          />
            <MDBContainer
              fluid
              className="py-5 chatroom"
            >
              <MDBRow>
                <MDBCol md="12">
                  <MDBCard
                    id="chat3"
                    style={{
                      borderRadius: "15px",
                      height: "90vh",
                      marginTop: "3vh",
                    }}
                  >
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                          <div className="p-3">
                            <MDBInputGroup className="rounded mb-3">
                              <input
                                className="form-control rounded"
                                placeholder="Search"
                                type="search"
                                onChange={(e) => changeContacts(e.target.value)}
                                value={searchValue}
                              />
                              <span
                                className="input-group-text border-0"
                                id="search-addon"
                              >
                                <Search />
                              </span>
                            </MDBInputGroup>

                            <div
                              className="scrollable"
                              style={{
                                position: "relative",
                                height: "74vh",
                                overflowY: "scroll",
                              }}
                            >
                              <MDBTypography listUnStyled className="mb-0">
                                {filteredValues.map((sent, index) => (
                                  <button
                                    style={{
                                      marginLeft: "0vh",
                                      paddingLeft: "0vh",
                                      border: "none",
                                      backgroundColor:
                                        sent.senderID === currentSender.senderID
                                          ? "#ECECEC"
                                          : "transparent",
                                      width: "60vh",
                                    }}
                                    onClick={() => ToggleChat(sent)}
                                  >
                                    <ChatTile
                                      sender={sent}
                                      datetime={new Date()}
                                      messageCount={newMessage}
                                      imageURL={sent.senderImageURL}
                                      message={
                                        "Hello"
                                      }
                                      index={index}
                                      user={{id:receiver.receiverID,token:token}}
                                      currentSender={currentSenderID}
                                      noSubscriber={noSubscriber}
                                    />
                                  </button>
                                ))}
                              </MDBTypography>
                            </div>
                          </div>
                        </MDBCol>
                        <MDBCol md="6" lg="7" xl="8">
                          <ChatBox
                            handleReload={setNoSubscriber}
                            noSubscriber={noSubscriber}
                            id={receiver.receiverID}
                            senderID={currentSenderID}
                            receiverImageURL={receiver.imageURL}
                            senderImageURL={currentSender.senderImageURL}
                            user={{id:receiver.receiverID,token:token}}
                            socket={socket}
                            message={newMessage}
                          />
                          <SendMessageChatRoom
                            noSubscriber={noSubscriber}
                            user={{id:receiver.receiverID,token:token}}
                            receiverID={receiver.receiverID}
                            imageURL={receiver.imageURL}
                            senderID={currentSender.senderID}
                            socket={socket}
                          />
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Loader/>
    );
  }
};

export default ChatPage;
