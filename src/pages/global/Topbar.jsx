import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
BsGithub;
const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchOutlinedIcon />
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                {/* click to call function located in theme file */}

                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <AiFillLinkedin />
                </IconButton>
                <IconButton>
                    <BsGithub />
                </IconButton>
                <IconButton>
                    <FacebookOutlinedIcon />
                </IconButton>
                <IconButton sx={{ mr: '40px' }}>
                    <AiFillInstagram />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
