import { Grid, Container, Typography, Box } from "@mui/material";
import Profile from "../components/Profile";

const About = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid sx={{ display: "flex", justifyContent: "center" }} container>
        <Box>
          <Typography sx={{ fontSize: "2.5em" }}>About Our Team</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Typography sx={{ fontSize: "1.5em" }}>
          Code in mind is an effort to provide a series of online courses for
          nonprofits benefiting traumatic brain injury survivors.
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          &#8595; Below are our staffed full stack web developers. &#8595;
        </Typography>
      </Grid>
      {/* Profile components */}
      <Grid sx={{ display: "flex", justifyContent: "space-evenly" }} container>
        <Grid item>
          <Profile
            name="Stephen Moore"
            github="https://github.com/judo2000"
            linkedin="https://www.linkedin.com/in/stephen-scott-moore/"
            summary="I am a full stack web developer with previous experience in HTML, CSS, and Classic ASP. My other passion in life is judo. I have practiced judo for just over 33 years. I hold the rank of 6th degree black belt and am the head instructor along with my wife at Denver Judo. I am also a former World and Paralympic champion and have been the head coach of the USA Paralympic Judo Team since 2010."
          />
        </Grid>
        <Grid item>
          <Profile
            name="Jenya Seletsky"
            github="https://github.com/Jenya10016"
            linkedin="https://www.linkedin.com/in/jenyaseletsky/"
          />
        </Grid>
        <Grid item>
          <Profile
            name="Andrew McInally"
            github="https://github.com/Shman-Dee"
            linkedin="https://www.linkedin.com/in/andrew-mcinally-785039217/"
          />
        </Grid>
        <Grid item>
          <Profile
            name="Matthew Brignola"
            github="https://github.com/prismaticdevs"
            linkedin="https://www.linkedin.com/in/matthewbrignola/"
            summary="Matthew develops with both React.js and Vue.js for front end web frameworks. As a fullstack developer he puts and emphasis and developing robust backend APIS and databases and compliments them with intuitive and well designed front ends.  "
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
