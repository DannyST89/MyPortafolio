import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme.js";
import { profileImage } from "../assets/images/images.js";
import { persuasionSkill } from "../assets/Icons/icons.js";
const Card = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // este componente va a recibir los props que definiran el card
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        height: "20rem",
        width: "20rem",
        backgroundColor: colors.primary[600],
        marginLeft: 1,
        boxShadow: "rgba(250, 250, 250, 0.05) 0px 5px 15px",
        "&:hover": {
          backgroundColor: colors.primary[600],
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box
        component={"img"}
        src={persuasionSkill}
        alt=""
        sx={{ height: 150, width: 150 }}
      />
      <Typography variant="h4">{"hello"}</Typography>
    </Box>
  );
};

export default Card;
