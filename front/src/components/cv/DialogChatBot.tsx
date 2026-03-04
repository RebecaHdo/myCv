import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

interface DialogChatBotProps {
  open: boolean;
  onClose: () => void;
}

export default function DialogChatBot({
  open,
  onClose,
}: DialogChatBotProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { role: string; content: string }[]
  >([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessages = [...messages, { role: "user", content: message }];
    setMessages(newMessages);
    setMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Chat conmigo 💬</DialogTitle>

      <DialogContent>
        <Box
          sx={{
            height: 300,
            overflowY: "auto",
            mb: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                alignSelf:
                  msg.role === "user" ? "flex-end" : "flex-start",
                bgcolor:
                  msg.role === "user"
                    ? "primary.main"
                    : "grey.200",
                color:
                  msg.role === "user" ? "white" : "black",
                px: 2,
                py: 1,
                borderRadius: 2,
                maxWidth: "70%",
              }}
            >
              {msg.content}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            fullWidth
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
          />
          <IconButton onClick={handleSend} color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
