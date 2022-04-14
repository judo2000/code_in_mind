import "./home.style.css";
import { Container } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);
  return (
    <Container style={{ marginTop: "2em" }}>
      <div className="grid-container">
        <div className="grid-container">
          <div className="left">
            <p>
              Code in Mind is a non-profit organization created to help
              traumatic brain injury (TBI) servivors.
            </p>

            <p>
              Inspired by one of our developers journey to learn to code to hel
              get his life back on track, we decided to start Code in Mind to
              teach individuals recovering from TBI to code.
            </p>
            <p>
              If you are recovering from a TBI and want to learn to code, you
              are in the right place. Sign Up now!
            </p>
          </div>
          {!isMobile ? (
            <div className="right">
              <img src="computer_tall.png" height="400" alt="computer" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
