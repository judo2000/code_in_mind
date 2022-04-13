import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { useState } from "react";

//icon-material
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
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
        </Box>
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
