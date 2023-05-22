import { useState } from 'react';
import reactLogo from './assets/react.svg';
import NavBar from './components/NavBar';
import ContainCard from './components/ContainCard';
import Button from '@mui/material/Button';
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter, Routes } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});




function App() {

  return (

    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          {/* <Button variant="contained">DOWELL</Button> */}
          <CssBaseline />
          <Header />
          <NavBar />;
          <ContainCard />
        </ThemeProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;
