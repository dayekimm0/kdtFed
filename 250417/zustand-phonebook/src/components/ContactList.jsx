import React from "react";
import usePhonebookStore from "../stores/usePhonebookStore";

const ContactList = () => {
  const { phoneBook } = usePhonebookStore();
  console.log(phoneBook);
  return (
    <div>
      {phoneBook.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
