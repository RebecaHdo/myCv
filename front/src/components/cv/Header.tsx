import { Box, Grid, Link, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header() {
  return (
    <Box>
      <Typography variant="h2">
        Rebeca Hernando Brecht
      </Typography>
      <Typography variant="h5" color="primary">
        Ingeniera Informática y Desarrolladora Full Stack
      </Typography>

      <Grid container sx={{ p: "2em" }} spacing={2}>
        <Grid size={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="body1">Valladolid</Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Typography variant="body1">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkedInIcon color="primary" />
              <Link href="https://www.linkedin.com/in/rebecahdo" target="_blank" rel="noopener noreferrer" sx={{ color: "blue" }}>
                LinkedIn/RebecaHdo
              </Link>
            </Box>
          </Typography>
        </Grid>
        <Grid size={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MailIcon color="primary" />
            <Typography variant="body1">rebecahernandobrecht@gmail.com</Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
}
