import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "../src/pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import OthersCertificates from "./pages/othersCertificates/OthersCertificates";
import ContactForm from "./pages/contactForm/ContactForm";
import Calendar from "./pages/calendar/Calendar";
import Components from "./pages/components/Components";
import Hobbies from "./pages/hobbies/Hobbies";
import EngineeringPath from "./pages/engineeringPath/EngineeringPath.jsx";
import SoftSkills from "./pages/softSkills/SoftSkills";
import Tecnologies from "./pages/tecnologies/Tecnologies";
import Projects from "./pages/projects/Projects";
import Training from "./pages/training/Training";
import Resume from "./pages/resume/Resume";

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
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/projects"
                element={<Projects />}
              />
              <Route
                path="/tecnologies"
                element={<Tecnologies />}
              />
              <Route
                path="/softSkills"
                element={<SoftSkills />}
              />
              <Route
                path="/engineeringPath"
                element={<EngineeringPath />}
              />
              <Route
                path="/hobbies"
                element={<Hobbies />}
              />
              <Route
                path="/components"
                element={<Components />}
              />
              <Route
                path="/calendar"
                element={<Calendar />}
              />
              <Route
                path="/Tecnologies"
                element={<Tecnologies />}
              />
              <Route
                path="/contactForm"
                element={<ContactForm />}
              />
              <Route
                path="/Training"
                element={<Training />}
              />
              <Route
                path="/othersCertificates"
                element={<OthersCertificates />}
              />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
