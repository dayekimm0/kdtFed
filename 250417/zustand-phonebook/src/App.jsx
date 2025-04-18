import "./App.css";
import { Grid } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <>
      <h1>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactList />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
