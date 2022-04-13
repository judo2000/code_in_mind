import { Container, Typography } from "@mui/material";

import Email from "../components/Email";

const CarouselComponent = () => {
  return (
    <section>
      <Container sx={{ mt: 10 }}>
        <Typography sx={{ fontSize: "3em", textAlign: "center" }}>
          Contact
        </Typography>
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
