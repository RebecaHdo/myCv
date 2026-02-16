import { Box, Grid, Link, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  return (
    <Box>
      <Typography variant="h2">
        Rebeca Hernando Brecht
      </Typography>
      <Typography variant="h5" color="primary" fontWeight="bold">
        Ingeniera Informática y Desarrolladora Full Stack
      </Typography>

      <Grid container sx={{ p: "2em" }} spacing={2}>
        <Grid size={4}>
          <Typography variant="h6">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkedInIcon color="primary" />
              <Link href="https://www.linkedin.com/in/rebecahdo" target="_blank" rel="noopener noreferrer" sx={{ color: "blue" }}>
                LinkedIn/RebecaHdo
              </Link>
            </Box>
          </Typography>
        </Grid>
        <Grid size={4}>
          <Typography variant="h6">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <GitHubIcon color="primary" />
              <Link href="https://github.com/rebecaHdo" target="_blank" rel="noopener noreferrer" sx={{ color: "blue" }}>
                Github.com/rebecaHdo
              </Link>
            </Box>
          </Typography>
        </Grid>
        <Grid size={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MailIcon color="primary" />
            <Typography variant="h6">rebecahernandobrecht@gmail.com</Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
}
