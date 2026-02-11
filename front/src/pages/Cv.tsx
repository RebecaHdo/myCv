import React from "react";
import Header from "../components/cv/Header";
import { Box } from "@mui/material";
import Body from "../components/cv/Body";


const CV: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                px: { xs: 2, sm: 4, md: 6 }, // horizontal responsive
                py: 4,
            }}>
            <Header />
            <Body />

        </Box>
    );
};

export default CV;
