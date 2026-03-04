import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    IconButton,
    Box
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";


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
    >([{
        role: "assistant",
        content: "👋 ¡Hola! Soy un asistente que conoce el CV de Rebeca 💼\n\nPuedes preguntarme sobre su formación, experiencia profesional, proyectos, habilidades y el tipo de trabajo que está buscando 🚀\n\nEstoy aquí para ayudarte a conocer mejor su trayectoria y responder cualquier duda que tengas ✨"
    }]);

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
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            sx={{
                borderRadius: 3,
                minHeight: 600,
                maxHeight: "80vh",
            }}
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3,
                    py: 2,
                    fontWeight: 600,
                    bgcolor: "primary.main",
                    color: "white",
                }}
            >
                Chat bot profesional 💬
                <IconButton onClick={onClose} sx={{ color: "white" }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>


            <DialogContent sx={{ display: "flex", flexDirection: "column", p: 0, height: "100%" }}>

                {/* Message area */}
                <Box
                    sx={{
                        flex: 1,
                        minHeight: 250,
                        maxHeight: "calc(80vh - 120px)",
                        overflowY: "auto",
                        p: 2,
                        bgcolor: "#f5f7fb",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                    }}
                >
                    {messages.map((msg, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                            }}
                        >
                            <Box
                                sx={{
                                    px: 2,
                                    py: 1.2,
                                    borderRadius: 3,
                                    maxWidth: "75%",
                                    fontSize: 14,
                                    lineHeight: 1.4,
                                    boxShadow: 1,
                                    bgcolor: msg.role === "user" ? "primary.main" : "white",
                                    color: msg.role === "user" ? "white" : "text.primary",
                                    borderTopRightRadius: msg.role === "user" ? 0 : 12,
                                    borderTopLeftRadius: msg.role === "user" ? 12 : 0,
                                    whiteSpace: "pre-line"
                                }}
                            >
                                {msg.content}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Input */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        p: 2,
                        borderTop: "1px solid #eee",
                        bgcolor: "background.paper",
                    }}
                >
                    <TextField
                        fullWidth
                        size="small"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escribe tu mensaje..."
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        sx={{ bgcolor: "#f5f7fb", borderRadius: 3 }}
                    />
                    <IconButton
                        onClick={handleSend}
                        sx={{
                            bgcolor: "primary.main",
                            color: "white",
                            "&:hover": { bgcolor: "primary.dark" },
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
