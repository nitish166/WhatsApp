import { Avatar, IconButton } from "@material-ui/core";
import { useEffect, React, useState } from "react";
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  InsertEmoticon,
} from "@material-ui/icons";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last name at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Nitish Kumar</span>
          Hey Sunil
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input type="text" />
          <button>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
