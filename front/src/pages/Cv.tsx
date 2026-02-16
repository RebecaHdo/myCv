import React from "react";
import Header from "../components/cv/Header";
import { Box } from "@mui/material";
import Body from "../components/cv/Body";


const CV: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                maxWidth: "90%",
                px: { xs: 4, sm: 6, md: 10 },
                py: { xs: 6, md: 10 },
                mx: "auto"
            }}>
            <Header />
            <Body />

        </Box>
    );
};

export default CV;
