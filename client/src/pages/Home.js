import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

let mobile = false;
if (window.innerWidth < 900) {
  mobile = true;
}

const Home = () => {
  return mobile ? (
    <Box sx={{ width: 1 }}>
      <Typography
        sx={{
          fontSize: "3em",
          marginTop: "1.5em",
          textAlign: "center",
        }}
      >
        Code in Mind
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5em",
          textAlign: "left",
        }}
      >
        Code in Mind is a non-profit organization created to help traumatic
        brain injury (TBI) survivors.
      </Typography>
      <Typography
        sx={{
          fontSize: "1.25em",
          textAlign: "left",
        }}
      >
        Inspired by one of our developer's journey to learn to code to help get
        his life back on track, we decided to start Code in Mind to teach
        individuals recovering from TBI to code.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src="computer.png"
          sx={{
            height: 115,
            width: 228,
            textAlign: "center",
          }}
          alt="computer"
        ></Box>
      </Box>
      <Typography
        sx={{
          fontSize: "1.5em",
          textAlign: "left",
        }}
      >
        If you are recovering from a TBI and want to learn to code, you are in
        the right place. <a href="/signup">Sign Up</a> now!
      </Typography>
    </Box>
  ) : (
    <Box sx={{ width: 1 }}>
      <Typography
        sx={{
          fontSize: "3em",
          marginTop: "1.5em",
          textAlign: "center",
        }}
      >
        Code in Mind
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5em",
          textAlign: "center",
        }}
      >
        Code in Mind is a non-profit organization created to help traumatic
        brain injury (TBI) survivors.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
          paddingLeft: 67,
          paddingRight: 67,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.25em",
            textAlign: "left",
          }}
        >
          Inspired by one of our developer's journey to learn to code to help
          get his life back on track, we decided to start Code in Mind to teach
          individuals recovering from TBI to code.
        </Typography>
        <Box
          component="img"
          src="computer.png"
          sx={{ height: 345, width: 685, textAlign: "center" }}
          alt="computer"
        ></Box>
      </Box>
      <Typography
        sx={{
          fontSize: "1.5em",
          textAlign: "center",
        }}
      >
        If you are recovering from a TBI and want to learn to code, you are in
        the right place. <a href="/signup">Sign Up</a> now!
      </Typography>
    </Box>
  );
};

export default Home;
