import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Input,
  Button,
  TextareaAutosize,
  InputLabel,
  Modal,
  Typography,
  Box,
} from "@mui/material";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.default",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sgrusvl",
        "template_i0765eo",
        form.current,
        "Z8sh-4HD70jP-HY-0"
      )
      .then(
        (result) => {
          handleOpen();
          setEmail("");
          setMessage("");
          setName("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          margin: "0 auto",
        }}
        onSubmit={sendEmail}
      >
        <InputLabel>Name</InputLabel>
        <Input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel>Email</InputLabel>
        <Input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel>Message</InputLabel>
        <TextareaAutosize
          style={{ height: 200 }}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={() => handleOpen} type="submit" value="Send">
          Send
        </Button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Message successfully sent.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Email;
