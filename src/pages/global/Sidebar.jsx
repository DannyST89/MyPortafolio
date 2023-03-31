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
import { TbCertificate } from 'react-icons/tb';
// Components icon
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { tokens } from '../../theme';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { profileImage } from '../../assets/images/images';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.greenAccent[600],
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
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px !important',
                },
                '& .pro-inner-item: hover': {
                    color: '#868dfb !important',
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
                                    Portafolio
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
                            Personal Information
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<NaturePeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<NaturePeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
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
                            to="/form"
                            icon={<LanguageOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Components"
                            to="/calendar"
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
                            to="/bar"
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
                        Certificates
                        <Item
                            title="University"
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
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
