import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { SiAtom } from 'react-icons/si';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import { GiSkills } from 'react-icons/gi';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// Components icon
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { tokens } from '../../theme';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { profileImage } from '../../assets/images/images';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        // MenuItem from react-pro-sidebar
        // https://www.npmjs.com/package/react-pro-sidebar
        <MenuItem
            /*
                vefify if useStated selected is equal to the title
                if the condition is true is gonna as selected item.
           */
            active={selected === title}
            style={{
                color: colors.greenAccent[600],
                fontSize: 5,
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //Handle if the sidebar is closed or not
    const [isCollapsed, seIsCollapsed] = useState(false);
    // Handle what is selected
    const [selected, setSelected] = useState('Dashboard');
    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    background: `${colors.primary[600]}`,
                },
                '& .pro-icon-wrapper': {
                    backgroundColor: 'transparent !important',
                },
                '& .pro-icon': {
                    fontSize: '1.5rem',
                },
                '& .pro-inner-item': {
                    padding: '5px 8px 5px 5px !important',
                },
                '& .pro-inner-item: hover': {
                    color: '#868dfb !important',
                    backgroundColor: `${colors.greenAccent[800]}`,
                },
                '& .pro-menu-item.active': {
                    color: '#6870fa !important',
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                >
                                    💼 Portafolio
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={profileImage}
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: '10px 0 0 0' }}
                                >
                                    Danny Soto
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    Frontend Developer
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<DashboardOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: '15px 0 5px 20px' }}
                        >
                            About me
                        </Typography>
                        <Item
                            title="Soft Skills"
                            to="/softSkills"
                            icon={<GiSkills />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Tecnologies"
                            to="/tecnologies"
                            icon={<HandymanOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Hobbies"
                            to="/hobbies"
                            icon={<NaturePeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: '15px 0 5px 20px' }}
                        >
                            Projects
                        </Typography>
                        <Item
                            title="Web Sites"
                            to="/projects"
                            icon={<LanguageOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Components"
                            to="/components"
                            icon={<SiAtom />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: '15px 0 5px 20px' }}
                        >
                            Contact me
                        </Typography>
                        <Item
                            title="Send mail"
                            to="/contactForm"
                            icon={<EmailOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Book appointment"
                            to="/calendar"
                            icon={<CalendarMonthOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Resume"
                            to="/resume"
                            icon={<DownloadForOfflineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        Certifications
                        <Item
                            title="Engineering Path"
                            to="/engineeringPath"
                            icon={<SchoolOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Training"
                            to="/training"
                            icon={<WorkspacePremiumOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Others"
                            to="/othersCertificates"
                            icon={<WorkspacePremiumOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
