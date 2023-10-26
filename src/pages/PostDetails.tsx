import { useState } from "react";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap-icons/font/bootstrap-icons.css';
// components
import { PostList, Post, NotificationComponent } from "../components";

//interfaces
import { PostPayload, Notification } from '../Interface/index';

function PostDetails() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editObj, setEditObj] = useState<PostPayload>({userId: 0, title: "", body: "", id: 0});
  const [notification, setNotification] = useState<Notification>({ msg: "", color: "" });
  const [postList, setPostList] = useState<string[]>([]);

  return (
    <div className="App">
      <PostList
        setIsOpen={setIsOpen}
        setEditObj={setEditObj}
        setNotification={setNotification}
        setPostList={setPostList}
        postList={postList}
      />
      <Post
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        editObj={editObj}
        setEditObj={setEditObj}
        setNotification={setNotification}
        setPostList={setPostList}
        postList={postList}
      />
      {notification.msg && (
        <NotificationComponent
          setNotification={setNotification}
          notification={notification}
        />
      )}
    </div>
  );
}

export default PostDetails;
