import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ClearIcon from '@mui/icons-material/Clear';


type InformationItem = {
  inf: string;
  enabled: boolean;
};

interface UsefulInformationSectionProps {
  information: InformationItem[];
}

const UsefulInformationSection: React.FC<UsefulInformationSectionProps> = ({
    information,
}) => {

    return (
        <Box sx={{ width: "100%", mb: 3 }}>
            {information && information?.length > 0 && (
                <List sx={{ listStyleType: "disc", pl: 2 }}>
                    {information?.map((inf, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                display: "list-item",
                                py: 0.5
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography variant="body1">
                                    {inf["inf"]}
                                </Typography> {inf["enabled"] ? <DownloadDoneIcon sx={{
                                    color: "var(--purple)", // purple
                                }} /> : <ClearIcon sx={{
                                    color: "var(--purple)", // purple
                                }} />}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default UsefulInformationSection;
