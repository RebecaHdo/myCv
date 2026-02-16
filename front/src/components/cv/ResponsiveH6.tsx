import { Typography } from "@mui/material";

export default function ResponsiveH6({...props }) {
  return (
    <Typography
      variant="h6"
      sx={{
        fontSize: { xs: "1rem", sm: "h6.fontSize" } // xs → body1
      }}
      {...props}
    >
    </Typography>
  );
}
