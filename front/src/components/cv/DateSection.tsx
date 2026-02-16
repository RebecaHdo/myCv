import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


interface DateSectionProps {
  date: [number, number]; // Dos años
  title: string;
  subtitle?: string;
  details?: string[];
}

const DateSection: React.FC<DateSectionProps> = ({
  date,
  title,
  subtitle,
  details,
}) => {
  const [year1, year2] = date;
  const formattedDate = `${year1} - ${year2}`;

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Grid container spacing={2} alignItems="flex-start">

        {/* Left */}
        <Grid size={{ xs: 12, sm: 4 }} display="flex"
          justifyContent="flex-end" pr={2}>
          <Typography fontWeight="bold">
            {formattedDate}
          </Typography>
        </Grid>

        {/* Right */}
        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>

          {subtitle && (
            <Typography variant="body1" color="primary">
              {subtitle}
            </Typography>
          )}

          {details && details?.length > 0 && (
            <List sx={{ listStyleType: "disc", pl: 2 }}>
              {details?.map((detail, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "list-item",
                    py: 0.5
                  }}
                >
                  <Typography variant="body2">
                    {detail}
                  </Typography>
                </ListItem>
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DateSection;
