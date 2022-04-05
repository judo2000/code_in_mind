import { Grid, Container, Typography, List, ListItem } from "@mui/material";
import Resume from "../files/Resume 2022.pdf";

const About = () => {
  return (
    <section>
      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid>
          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            variant="h3"
          >
            Summary
          </Typography>
          <Typography sx={{ fontSize: "1.5em" }}>
            Full Stack Web Developer with a background as a digital media and
            video production instructor. Ensuring technical application
            development that conforms to modern business needs and UI/UX
            standards. Known among staff for staying late at the office fixing
            bugs in applications.
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: ".5em",
            }}
            variant="h3"
          >
            Work Experience
          </Typography>
          <List>
            <Typography variant="h4">
              Managed Services Technical Consultant
            </Typography>
            <Typography variant="h5">AppTier LLC in Denver, CO</Typography>
            <Typography variant="h6">April 2019 - October 2019</Typography>
            <ListItem>
              Managed Services Consultant for Enterprise Content Management
              (OPENTEXT Content Server Software)
            </ListItem>
            <ListItem>
              Installation of software a Windows Server and application software
            </ListItem>
            <ListItem>
              Installation and configuration of Apache Web Server
            </ListItem>
            <ListItem>Installation of Win32 database</ListItem>
            <ListItem>
              Generation of weekly data usage reports and delivery of reports to
              our clients
            </ListItem>
            <ListItem>
              Use of OPENTEXT documentation to assist in triage and
              troubleshooting while resolving tickets
            </ListItem>
            <ListItem>
              Use of Manage Engine managed services ticketing system software to
              document, triage, and resolve tickets
            </ListItem>
          </List>
          <List>
            <Typography variant="h4">Educator at Denver Public</Typography>
            <Typography variant="h5">Schools Denver, CO</Typography>
            <Typography variant="h6">June 2014 - April 2018</Typography>
            <ListItem>
              Career Technology Teacher at Noel Community Arts School Middle
              School (2017-2018)
            </ListItem>
            <ListItem>Maintenance and setup of iMac computer lab</ListItem>
            <ListItem>WAN connectivity</ListItem>
            <ListItem>
              Setup and Maintenance of AV equipment (cameras, monitors, lighting
              equipment, Adobe, etc.)
            </ListItem>
          </List>
          <List>
            <Typography variant="h4">
              Founder and CEO at Brink Media LLC (2017-2019)
            </Typography>
            <Typography variant="h5">March 2017 - October 2019</Typography>
            <ListItem>
              Video, Web Design, Graphic Design, and Digital Marketing Services
            </ListItem>
            <ListItem variant="h6">
              Management of Design, Marketing and Sales, and Core Business
              Operations
            </ListItem>
            <ListItem>
              Management of Company Officers and Other Personnel
            </ListItem>
            <ListItem>Meeting Scheduling and Facilitation</ListItem>
            <ListItem>Financial Reports and Projections</ListItem>
          </List>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "5em",
            }}
          >
            <button className="btn">
              <a
                href={Resume}
                style={{
                  padding: "1em",
                  background: "#131e5b",
                  color: "white",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  fontSize: "1.5em",
                  borderRadius: ".5em",
                  textDecoration: "none",
                }}
                download
              >
                Download as PDF
              </a>
            </button>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
