"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  Fab,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import useMutationApiRequest from "@/hooks/useApiRequest/useMutationApiRequest";
import { Message } from "@/types";
import ReactMarkdown from "react-markdown";
import { FloatingChatRef } from "./types";

const FloatingChat = forwardRef<FloatingChatRef>((_, ref) => {
  const [open, setOpen] = useState(false);
  const [chatLog, setChatLog] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const { mutateAsync, isPending } = useMutationApiRequest<Message>({
    key: "send-message",
  });

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: new Date().toISOString(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setChatLog((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const { data } = await mutateAsync({ message: input.trim() });

      const botReply: Message = {
        id: data.id,
        content: data.content,
        sender: data.sender,
        timestamp: data.timestamp,
      };

      setChatLog((prev) => [...prev, botReply]);
    } catch (err) {
      console.log("👻 ~ handleSend ~ err:", err);
    }
  };

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  return (
    <>
      <Tooltip title="Tanya Sesuatu" arrow>
        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1300,
            background: "linear-gradient(135deg, #1976d2, #1565c0)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(135deg, #1565c0, #0d47a1)",
            },
          }}
          onClick={() => setOpen(true)}
        >
          <ChatIcon />
        </Fab>
      </Tooltip>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            position: "fixed",
            bottom: 100,
            right: 24,
            m: 0,
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight={600}>Tanya Sesuatu</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            height: 500,
            p: 0,
          }}
        >
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              px: 2,
              pt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {chatLog.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.sender === "user" ? "#e3f2fd" : "#f1f8e9",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: "80%",
                }}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              borderTop: "1px solid #e0e0e0",
              px: 2,
              py: 1.5,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Tanyakan sesuatu..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <IconButton
              color="primary"
              onClick={handleSend}
              disabled={!input.trim() || isPending}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
});

FloatingChat.displayName = "FloatingChat";
export default FloatingChat;
