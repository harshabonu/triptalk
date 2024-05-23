
import React, { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetPostsQuery } from "../../src/redux/api/api";
import AppLayout from "../components/layout/AppLayout";
import Post from "../components/shared/Post";
const ShowPost = ({ chatId, user }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const bottomRef = useRef(null);
    const [page, setPage] = useState(1);
    const [messages, setMessages] = useState([]);

    const oldMessagesChunk = useGetPostsQuery({ });
    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
    });



    return (
        <Fragment>
            

       {oldMessagesChunk?.data?.messages.map((post, index) => (
        
                            <Post key={index} post={post} />
                            
                        ))}

       

      
      
        </Fragment>

    );
};

export default AppLayout()(ShowPost);
