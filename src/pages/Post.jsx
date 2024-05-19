import React, { Fragment, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { TextField, Button, Container, Typography, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSendPostMutation } from "../../src/redux/api/api"
import { useAsyncMutation } from "../../src/hooks/hook";
const Post = ({ chatId, user }) => {
    const navigate = useNavigate();


    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
    });

    const [newPostfun, _, newPostfunData] = useAsyncMutation(
        useSendPostMutation
      );
      const dispatch = useDispatch();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
        
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle post submission
        
        console.log("New Post:", newPost);
        newPostfun("creating new post...", newPost);
        navigate("/");
        // Reset form
        setNewPost({ title: "", content: "" });
    };

    const handleClick = () => {
        console.log(user);
    };

    return (
        <Fragment>
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create a New Post
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    name="title"
                                    value={newPost.title}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Content"
                                    name="content"
                                    value={newPost.content}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </Fragment>

    );
};

export default AppLayout()(Post);
