import { Grid, Container, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

import Email from "../components/Email";

const CarouselComponent = () => {
  return (
    <section>
      <Container sx={{ mt: 10 }}>
        <Typography sx={{ fontSize: "3em", textAlign: "center" }}>
          Contact
        </Typography>
        <Grid sx={{ display: "flex", justifyContent: "center" }} container>
          <Grid sx={{ marginLeft: "2em" }} item>
            <Typography sx={{ fontSize: "2.5em" }}>
              Email <MailIcon />
            </Typography>
            <Typography sx={{ frontSize: "1.5em" }}>
              <a href="mailto:matthewbrignola@ymail.com">
                matthewbrignola@ymail.com
              </a>
            </Typography>
          </Grid>
          <Grid sx={{ marginLeft: "2em" }} item>
            <Typography sx={{ fontSize: "2.5em" }}>
              Phone <LocalPhoneIcon />
            </Typography>
            <Typography sx={{ frontSize: "1.5em" }}>
              <a href="tel:7193515828">(719) 351-5828</a>
            </Typography>
          </Grid>
          <Grid sx={{ marginLeft: "2em" }} item>
            <Typography sx={{ fontSize: "2.5em" }}>
              LinkedIn <LinkedInIcon />
            </Typography>
            <Typography sx={{ frontSize: "1.5em" }}>
              <a
                href="https://www.linkedin.com/in/matthewbrignola/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/matthewbrignola
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Leave a Message
        </Typography>
        <Email />
      </Container>
    </section>
  );
};

export default CarouselComponent;
