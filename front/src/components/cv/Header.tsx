import { Avatar, Box, Grid, Link, Typography, useTheme  } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ResponsiveH6 from "./ResponsiveH6";

export default function Header() {

  const theme = useTheme();

  return (
    <Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", sm: "flex-start" }}
        gap={4}
        paddingRight={4}
      >

        <Box textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h2">
            Rebeca Hernando Brecht
          </Typography>
          <Typography variant="h5" color="primary" fontWeight="bold">
            Ingeniera Informática y Desarrolladora Full Stack
          </Typography>
        </Box>

        <Avatar
          alt="Rebeca Hernando"
          src="/static/images/avatar.png"
          sx={{
            width: { xs: 150, sm: 200 },
            height: { xs: 150, sm: 200 },
            bgcolor: theme.palette.primary.main,
            fontSize: { xs: 60, sm: 80 },
            mt: { xs: 2, sm: 0 },
          }}
        />
      </Box>

      <Grid container sx={{ p: "2em" }} spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <ResponsiveH6>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkedInIcon color="primary" />
              <Link href="https://www.linkedin.com/in/rebecahdo" target="_blank" rel="noopener noreferrer" sx={{ color: "blue" }}>
                LinkedIn/RebecaHdo
              </Link>
            </Box>
          </ResponsiveH6>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ResponsiveH6>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <GitHubIcon color="primary" />
              <Link href="https://github.com/rebecaHdo" target="_blank" rel="noopener noreferrer" sx={{ color: "blue" }}>
                Github.com/rebecaHdo
              </Link>
            </Box>
          </ResponsiveH6>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MailIcon color="primary" />
            <ResponsiveH6>rebecahernandobrecht@gmail.com</ResponsiveH6>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
}
