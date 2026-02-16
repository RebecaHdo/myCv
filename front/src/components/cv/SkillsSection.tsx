import { Box, Chip, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


interface SkillsSectionProps {
  skillsData: {
    category: string,
    skills: string[]
  }[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skillsData
}) => {
  const [search, setSearch] = useState("");

  const filteredData = skillsData
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter((group) => group.skills.length > 0);

  return (
    <Box sx={{ padding: 4 }}>
      {/* Título */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Habilidades
      </Typography>

      {/* Buscador global */}
      <TextField
        fullWidth
        label="Buscar habilidad..."
        variant="outlined"
        sx={{ mb: 4 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Categorías */}
      <Grid container spacing={4}>
        {filteredData.map((group) => (
          <Grid xs={12} md={6} key={group.category}>
            <Paper sx={{ padding: 3 }} elevation={3}>
              <Typography variant="h6" gutterBottom>
                {group.category}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {group.skills.map((skill) => (
                  <Chip key={skill} label={skill} />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
