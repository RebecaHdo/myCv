import { Typography } from "@mui/material";

export default function ResponsiveH6({ children, ...props }) {
  return (
    <Typography
      variant="h6"
      sx={{
        fontSize: { xs: "1rem", sm: "h6.fontSize" } // xs → body1
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
