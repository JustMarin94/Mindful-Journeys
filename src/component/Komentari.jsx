import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";

export default function Komentari() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  // Save comments to localStorage whenever comments array changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const timestamp = new Date();
      const formattedDate = timestamp.toLocaleDateString();
      const formattedTime = timestamp.toLocaleTimeString();

      const newCommentObject = {
        text: newComment.trim(),
        date: formattedDate,
        time: formattedTime,
      };

      const updatedComments = [...comments, newCommentObject];
      setComments(updatedComments);
      setNewComment(""); // Clear input field
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Komentari
      </Typography>

      {/* Input for adding a new comment */}
      <Box sx={{ display: "flex", mb: 3 }}>
        <TextField
          fullWidth
          label="Dodaj komentar"
          variant="outlined"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddComment}
          disabled={!newComment.trim()}
        >
          Dodaj
        </Button>
      </Box>

      {/* List of comments */}
      <List>
        {comments.map((comment, index) => (
          <React.Fragment key={index}>
            <ListItem>
              {/* Avatar */}
              <Avatar sx={{ mr: 2 }}>U</Avatar>{" "}
              {/* You can replace 'U' with initials or an image */}
              {/* Comment text and timestamp */}
              <ListItemText
                primary={comment.text}
                secondary={`Created on ${comment.date} at ${comment.time}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
