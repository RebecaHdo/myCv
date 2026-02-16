import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";


interface RatingSectionProps {
    title: string;
    subtitle?: string;
    value: number;
}

const RatingSection: React.FC<RatingSectionProps> = ({
    title,
    subtitle,
    value,
}) => {

    return (
        <Box sx={{ width: "100%", mb: 3 }}>
            <Grid container spacing={2} alignItems="flex-start">

                {/* Left */}
                <Grid size={{ xs: 12, sm: 4 }}>
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography variant="body1" sx={{ color: "text.secondary" }}>
                            {subtitle}
                        </Typography>
                    )}
                </Grid>

                {/* Right */}
                <Grid size={{ xs: 12, sm: 8 }}>
                    <Rating value={value} max={5} readOnly
                        icon={<FiberManualRecordIcon fontSize="inherit" />}
                        emptyIcon={<FiberManualRecordIcon fontSize="inherit" opacity={0.3} />}
                        sx={{ color: (theme) => theme.palette.primary.main }}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RatingSection;
