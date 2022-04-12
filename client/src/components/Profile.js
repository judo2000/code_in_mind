// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { Grid, Typography, Box, Card, CardContent } from "@mui/material";

// const Profile = (props) => {
//   return (
//     <Card>
//       <CardContent>
//         <Grid container>
//           <Grid sx={{ m: 3 }} item>
//             <Box sx={{ display: "flex", justifyContent: "center" }}>
//               <Typography sx={{ fontSize: "2em" }}>{props.name}</Typography>
//             </Box>
//             <Typography sx={{ marginLeft: "15em", marginRight: "15em" }}>
//               {props.summary}
//             </Typography>
//             <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
//               <a href={props.github} target="_blank" rel="noreferrer">
//                 <GitHubIcon sx={{ fontSize: "3em", color: "black" }} />
//               </a>
//               <a href={props.linkedin} target="_blank" rel="noreferrer">
//                 <LinkedInIcon sx={{ fontSize: "3em", color: "#0a66c2" }} />
//               </a>
//             </Box>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default Profile;

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useState } from "react";

export default function Profile(props) {
  const [showMore, setShowMore] = useState(false);
  let short = props.summary;
  if (short) {
    short = short.slice(0, 150) + "...";
  }
  const more = (
    <>
      {short}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ExpandMoreIcon
          style={{ cursor: "pointer" }}
          onClick={() => setShowMore(true)}
        />
        <Typography sx={{ fontWeight: 600 }}>More</Typography>
      </div>
    </>
  );
  const less = (
    <>
      {props.summary}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ExpandLessIcon
          style={{ cursor: "pointer" }}
          onClick={() => setShowMore(false)}
        />
        <Typography sx={{ fontWeight: 600 }}>Less</Typography>
      </div>
    </>
  );
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" sx={{ textAlign: "center" }} component="div">
          {props.name}
        </Typography>
        {/* Read More */}
        <Typography sx={{ display: "flex", flexDirection: "column" }}>
          {more ? short : props.summary}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {showMore ? less : more}
          </div>
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => (window.location.href = props.github)}
          size="small"
        >
          <GitHubIcon sx={{ color: "black" }} />
        </Button>
        <Button
          onClick={() => (window.location.href = props.linkedin)}
          size="small"
        >
          <LinkedInIcon sx={{ color: "#0a66c2" }} />
        </Button>
      </CardActions>
    </Card>
  );
}
