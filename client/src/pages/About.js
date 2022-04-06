import { Grid, Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
      <Grid container>
        <Box>
          <Typography>About</Typography>
        </Box>
      </Grid>
    </Container>
  );
};

export default About;
