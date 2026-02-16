import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DateSection from "./DateSection";
import RatingSection from "./RatingSection"
import UsefulInformationSection from "./UsefulInformationSection";
import SkillsSection from "./SkillsSection";

export default function Body() {
    return (
        <Box sx={{
            width: "95%",
        }}>
            {/**About me*/}
            <Accordion defaultExpanded sx={{ mb: 2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant="h4">Sobre mi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{
                        wordBreak: "break-word",    // rompe palabras largas
                        overflowWrap: "break-word", // compatibilidad extra
                    }}>
                        Soy una profesional con más de <strong>cuatro años de experiencia</strong> que se caracteriza por su <strong>rápida capacidad de aprendizaje</strong>, <strong>versatilidad</strong> y <strong>autonomía</strong> para resolver problemas. Me desenvuelvo con naturalidad en entornos <strong>colaborativos</strong>, manteniendo una <strong>comunicación fluida</strong> tanto con equipos multidisciplinarios como con clientes. Destaco por mi actitud <strong>positiva</strong>, cercanía y habilidad para transformar necesidades en soluciones útiles, siempre con enfoque en <strong>aportar valor</strong> y <strong>mejorar continuamente</strong>.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Grid container spacing={2} >
                {/**left */}
                <Grid size={4}>

                    {/**Education*/}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant="h4">Educación</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DateSection
                                date={[2017, 2021]}
                                title="Grado Ingeniería Informática"
                                subtitle="Universidad de valladolid"
                                details={["Mención de Ingeniería de Software"]}
                            />
                        </AccordionDetails>
                    </Accordion>

                    {/**Languages */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant="h4">Idiomas</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <RatingSection
                                title="Español"
                                subtitle="Nativo"
                                value={5}
                            />

                            <RatingSection
                                title="Inglés"
                                subtitle="B1"
                                value={3}
                            />
                        </AccordionDetails>
                    </Accordion>

                    {/**useful information */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant="h4">Datos de interés</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <UsefulInformationSection
                                information={[
                                    { inf: "Carné de conducir", enabled: true },
                                    { inf: "Vehículo propio", enabled: true },
                                    { inf: "Disponibilidad inmediata", enabled: true },
                                    { inf: "Disponibilidad geográfica", enabled: true }
                                ]}
                            />
                        </AccordionDetails>
                    </Accordion>

                    {/**Skills */}
                    <SkillsSection
                        skillsData={[
                            {
                                category: "Lenguajes de programación",
                                skills: ["Python", "SQL", "JavaScript", "HTML", "CSS", "Bash", "TypeScript"]
                            },
                            {
                                category: "Frameworks y librerías",
                                skills: ["React", "NestJS", "Playwright", "Jest", "Odoo", "Flask", "Django"]
                            },
                            {
                                category: "Bases de datos",
                                skills: ["PostgreSQL", "MySQL", "MongoDB"]
                            },
                            {
                                category: "Control de versiones y herramientas de colaboración",
                                skills: ["Git", "Jira"]
                            },
                            {
                                category: "Sistemas operativos",
                                skills: ["Windows", "GNU/Linux"]
                            }
                        ]} />
                </Grid>

                {/**right */}
                <Grid size={8}>
                    {/**work experience */}
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant="h4">Experiencia laboral</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DateSection
                                date={[2024, 2025]}
                                title="Ingeniera full stack"
                                subtitle="Doctomatic, SL"
                                details={["Desarrollo y mantenimiento de la plataforma web y móvil Doctomatic con React, NestJS y TypeScript.", "Diseño y evolución del CMS, integrando PostgreSQL y MongoDB dentro de una arquitectura escalable y segura.", "Pruebas automatizadas con Playwright y Jest, aplicando buenas prácticas para garantizar la calidad del producto."]}
                            />

                            <DateSection
                                date={[2023, 2024]}
                                title="Desarrolladora senior full stack"
                                subtitle="Energilandia"
                                details={["Recopilé y analicé requisitos para desarrollar un CRM personalizado adaptado a las necesidades del negocio.", "Diseñé, implementé y mantuve el sistema utilizando Flask como framework principal y MongoDB como base de datos NoSQL.", "Aseguré la escalabilidad y eficiencia del CRM aplicando buenas prácticas de desarrollo y estructuración de datos."]}
                            />

                            <DateSection
                                date={[2022, 2023]}
                                title="Desarrolladora junior full stack"
                                subtitle="TOOOLS"
                                details={["Implementé soluciones web robustas, seguras y mantenibles utilizando Django como framework principal.", "Colaboré con equipos técnicos y administrativos para garantizar el cumplimiento de requisitos funcionales y técnicos.", "Desarrollé plugins en PHP para WordPress, adaptados a diferentes kits digitales."]}
                            />

                            <DateSection
                                date={[2021, 2022]}
                                title="Desarrolladora junior full stack"
                                subtitle="ALTIA CONSULTORES, SA"
                                details={["Desarrollo y mantenimiento de sistemas ERP personalizados con Odoo creando y adaptando módulos en distintas versiones.", "Personalización de procesos empresariales e integración de Odoo con sistemas externos, automatizando flujos de trabajo.", "Colaboración directa con clientes en la toma de requisitos y entrega de soluciones a medida, mejorando la eficiencia operativa."]}
                            />

                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Box>
    )
}