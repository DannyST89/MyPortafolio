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
        <Box display="flex" justifyContent="right" p={2}>
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
                <IconButton href="https://www.linkedin.com/in/dannyst89">
                    <AiFillLinkedin />
                </IconButton>
                <IconButton href="https://github.com/DannyST89">
                    <BsGithub />
                </IconButton>
                <IconButton href="https://www.facebook.com/profile.php?id=100079033674689&mibextid=ZbWKwL">
                    <FacebookOutlinedIcon />
                </IconButton>
                <IconButton
                    sx={{ mr: '40px' }}
                    href="https://instagram.com/gallito2401?igshid=MGNiNDI5ZTU="
                >
                    <AiFillInstagram />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
