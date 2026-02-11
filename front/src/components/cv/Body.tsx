import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DateSeccion from "./DateSection";

export default function Body() {
    return (
        <Box sx={{
            width: "95%",
        }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Sobre mi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="span" sx={{
                        wordBreak: "break-word",    // rompe palabras largas
                        overflowWrap: "break-word", // compatibilidad extra
                    }}>
                        Soy una profesional con más de <strong>cuatro años de experiencia</strong> que se caracteriza por su <strong>rápida capacidad de aprendizaje</strong>, <strong>versatilidad</strong> y <strong>autonomía</strong> para resolver problemas. Me desenvuelvo con naturalidad en entornos <strong>colaborativos</strong>, manteniendo una <strong>comunicación fluida</strong> tanto con equipos multidisciplinarios como con clientes. Destaco por mi actitud <strong>positiva</strong>, cercanía y habilidad para transformar necesidades en soluciones útiles, siempre con enfoque en <strong>aportar valor</strong> y <strong>mejorar continuamente</strong>.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Educación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <DateSeccion
                        date={[2017, 2021]}
                        title="Grado Ingeniería Informática"
                        subtitle="Universidad de valladolid"
                        details={["Mención de Ingeniería de Software"]}
                    />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}