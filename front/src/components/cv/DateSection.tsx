import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


interface DateSeccionProps {
  date: [number, number]; // Dos años
  title: string;
  subtitle?: string;
  details?: string[];
}

const DateSeccion: React.FC<DateSeccionProps> = ({
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
        <Grid item xs={12} sm={2}>
          <Typography fontWeight="bold">{formattedDate}</Typography>
        </Grid>

        {/* Right */}
        <Grid item xs={12} sm={10}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>

          {subtitle && (
            <Typography variant="body1">
              {subtitle}
            </Typography>
          )}

          {details && details.length > 0 && (
            <List>
              {details.map((detail, index) => (
                <ListItem key={index}>
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

export default DateSeccion;
