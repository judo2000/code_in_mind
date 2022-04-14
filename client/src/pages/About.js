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
            summary="My name is Stephen Moore. I am a full stack web developer with previous experience in HTML, CSS, and Classic ASP. I was completely self-taught but have recently earned a Certificate in Full Stack Web Development from the University of Denver coding bootcamp. I am very passionate about web development and I am excited to combine my experience with my new skills to provide excellent experiences for the web.
My other passion in life is judo. I have practiced judo for just over 33 years. I hold the rank of 6th degree black belt and am the head instructor along with my wife at Denver Judo. I am also a former World and Paralympic champion and have been the head coach of the USA Paralympic Judo Team since 2010."
          />
        </Grid>
        <Grid item>
          <Profile
            name="Jenya Seletsky"
            github="https://github.com/Jenya10016"
            linkedin="https://www.linkedin.com/in/jenyaseletsky/"
            summary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores, suscipit fugit earum assumenda neque officia dolor accusantium? Doloribus a dolores provident, sequi explicabo animi incidunt blanditiis veniam, cum saepe molestiae temporibus magnam quia amet commodi earum obcaecati, similique nostrum. Dolore sapiente debitis quidem? Sequi ipsam sint nobis error fugiat! Doloremque sequi quas soluta magnam repellendus ullam voluptatibus blanditiis necessitatibus! Cupiditate ad, corrupti reiciendis accusantium illo quos laudantium tempore saepe, esse facere animi! Explicabo provident aspernatur aliquid porro aperiam vel impedit cumque totam, soluta labore. Mollitia fuga et sit deleniti laboriosam consectetur optio totam ab facere. Dicta, facilis nulla voluptatem odio sapiente unde, perspiciatis modi impedit temporibus possimus quo ipsam eaque soluta architecto aliquam accusantium minima ab eius quaerat perferendis est ea. Dignissimos illo quibusdam consectetur perspiciatis cumque maiores vitae. Dicta vitae explicabo dolore odio voluptate itaque a veritatis, magnam et illum animi aperiam laborum, libero rem? Saepe consectetur quod voluptates, magnam explicabo nihil nemo itaque eaque quam vitae sed quo nulla, rerum, quisquam inventore quaerat optio fugit eveniet labore facilis? Corporis consectetur suscipit cupiditate, aliquam aliquid officiis velit illum culpa enim. Ab dolor eligendi eum architecto inventore quos ea iste, voluptatem corporis voluptas nostrum magnam quidem? Ullam, magni incidunt!"
          />
        </Grid>
        <Grid item>
          <Profile
            name="Andrew McInally"
            github="https://github.com/Shman-Dee"
            linkedin="https://www.linkedin.com/in/andrew-mcinally-785039217/"
            summary=" Andrew is just a guy trying to find utility down the rabbit hole that is bitcoin.  He hopes to give back to the community through teaching."
          />
        </Grid>
        <Grid item>
          <Profile
            name="Matthew Brignola"
            github="https://github.com/prismaticdevs"
            linkedin="https://www.linkedin.com/in/matthewbrignola/"
            summary="Matthew develops with both React.js and Vue.js for front end web frameworks. As a fullstack developer he puts an emphasis and developing robust backend APIS and databases that he then compliments them with intuitive and well designed front ends. Matthew adheres to modern UI/UX standards and has a strong emphasis on web page design. "
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
