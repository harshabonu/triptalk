
import React, { Fragment, useState, useRef, useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";
import { TextField, Button, Container, Typography, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSendPostMutation, useGetPostsQuery } from "../../src/redux/api/api"
import { useAsyncMutation } from "../../src/hooks/hook";
import { useInfiniteScrollTop } from "6pp";
import { grayColor, orange } from "../constants/color";
import Post from "../components/shared/Post";
import { IconButton, Skeleton, Stack } from "@mui/material";
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





console.log(oldMessagesChunk?.data?.messages)

    

   


    return (
        <Fragment>
            

       {oldMessagesChunk?.data?.messages.map((post, index) => (
        
                            <Post key={index} post={post} />
                            
                        ))}

       

      
      
        </Fragment>

    );
};

export default AppLayout()(ShowPost);
