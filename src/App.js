import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";

import DashBoard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";


function App() {
  const [theme, colorMode] = useMode();

  return ( 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={ <DashBoard /> } />
              <Route path='/team' element={ <Team /> } />
              <Route path='/contacts' element={ <Contacts /> } />
              <Route path='/invoices' element={ <Invoices /> } />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
