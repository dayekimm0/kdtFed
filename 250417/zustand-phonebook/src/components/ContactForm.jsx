import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import usePhonebookStore from "../stores/usePhonebookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhonebookStore();

  const handleAddContact = () => {
    addContact(name, phoneNumber);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        id="outlined-basic"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
