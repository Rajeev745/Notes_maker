import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from "./Component/Notes";
import Create from "./Component/Create";
import Layout from "./NoteCard/Layout";

// import {  ThemeProvider } from '@material-ui/core'
// import {createTheme} from '@material-ui/core/styles'

// const theme=createTheme({
//   palette:{
//     primary:{
//     main:'green'
//     }
//   }
// })

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <Router>
      <Layout>

        <Routes>
          <Route path="/" element={<Notes />}>

          </Route>
          <Route path="/create" element={<Create />}>

          </Route>
        </Routes>
      </Layout>
    </Router>
    // </ThemeProvider>

  );
}

export default App;
