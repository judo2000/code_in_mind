import { Grid, Container, Typography, Box } from "@mui/material";
import Auth from "../utils/auth";

const Home = () => {
  return (
    <Container sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
      <Grid container>
        <Typography>Home</Typography>
        <Box>Hi </Box>
      </Grid>
    </Container>
  );
};

export default Home;
