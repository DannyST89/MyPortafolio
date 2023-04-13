import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme.js";

const Card = ({
  title,
  urlImg,
  cardHeight,
  cardWidth,
  titleFormat,
  margin,
  imgHeigth,
  imgWidth,
  descriptionFormat,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // este componente va a recibir los props que definiran el card
  return (
    <Box
      sx={{
        borderRadius: "5px",
        height: cardHeight,
        width: cardWidth,
        backgroundColor: colors.primary[600],
        margin: margin,
        boxShadow: "rgba(250, 250, 250, 0.05) 0px 5px 15px",
        "&:hover": {
          backgroundColor: colors.primary[400],
          opacity: [0.9, 0.8, 0.7],
          color: colors.greenAccent[500],
        },
        cursor: "pointer",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
        width={"100%"}
      >
        <Box
          component={"img"}
          src={urlImg}
          alt=" skills"
          width={imgHeigth}
          height={imgWidth}
          paddingBottom={"1rem"}
        />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          variant={titleFormat}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
