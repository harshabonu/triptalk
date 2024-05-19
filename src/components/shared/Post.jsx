import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Post = ({ post }) => {
    return (
        <Card elevation={3} style={{ marginBottom: '16px' }}>
            <CardContent>
                <Typography variant="h2" color="textSecondary" gutterBottom>
                    {post.title}
                </Typography>
               
                <Typography variant="body1" color="textSecondary" mt={2}>
                    {post.content}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="textSecondary">
                        Created by: {post.sender.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Created at: {new Date(post.createdAt).toLocaleString()}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Post;
