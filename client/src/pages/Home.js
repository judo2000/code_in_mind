import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: 1 }}>
      <Box>
        <Box>
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
              marginLeft: 45,
              marginRight: 45,
            }}
          >
            We provide courses to teach traumatic brain injury survivors how to
            code so that they can return to the workforce with a competitive job
            skill.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src="computer.png"
              sx={{ height: 345, width: 685, textAlign: "center" }}
              alt="computer"
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
