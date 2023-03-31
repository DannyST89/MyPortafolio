import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from '../src/pages/global/Topbar';
import Sidebar from './pages/global/Sidebar';
import Dashboard from './pages/dashboard';
// import Team from './pages/team';
// import Invoices from './pages/invoices';
// import Contact from './pages/contact';
// import Line from './page/line';
// import Calendar from './page/calendar';
// import Components from './page/components';
// import Hobbies from './page/hobbies';
// import Certificates from './page/certificates';
// import SoftSkills from './page/softSkills';
// import Tools from './page/tools';
// import Projects from './page/Projects';

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
                            {/* <Route path="/projects" element={<Projects />} />
                            <Route path="/tools" element={<Tools />} />
                            <Route
                                path="/softSkills"
                                element={<SoftSkills />}
                            />
                            <Route
                                path="/certificates"
                                element={<Certificates />}
                            />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route
                                path="/components"
                                element={<Components />}
                            />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/invoices" element={<Invoices />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
