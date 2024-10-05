import React from "react";
import rocketgif from "../assets/rocket2.gif";
import Estrella1 from "../assets/images/Estrella1";
import { Box, useMediaQuery } from "@mui/material";

const Rocket = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const commonBoxStyles = {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginRight: "2vw",
  };

  const estrellaStyles = {
    width: "100%",
    height: "auto",
    position: "absolute",
  };
  return (
    <>
      {!matches ? (
        <Box
          sx={{
            ...commonBoxStyles,
            height: "13.5vw",
             
            paddingLeft: "2%",
          }}
        >
          <Box
            sx={{
              width: "3%",
              position: "absolute",
              alignSelf: "flex-end",
              justifySelf: "flex-end",
              bottom: 0,
            }}
          >
            <Estrella1
              sx={{
                ...estrellaStyles,
                bottom: 0,
              }}
            />
          </Box>
          <Box
            sx={{
              width: "35%",
              height: "auto",
              position: "absolute",
              right: 0,
              bottom: "0%",
              transform: "translateY(40%)",
            }}
          >
            {/* Gif */}
            <img
              src={rocketgif}
              alt="Rocket animation"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            ...commonBoxStyles,
                      height: "27vh",
             paddingLeft: "7%",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              width: "10%",
              position: "absolute",
              alignSelf: "flex-end",
              justifySelf: "flex-end",
             }}
          >
            <Estrella1 sx={{ width: "100%", height: "auto" }} />
          </Box>
          <Box
            sx={{
              width: "70%",
              height: "auto",
              position: "absolute",
              right: 0,
              bottom: "30vh",
              transform: "translateY(50%)",
            }}
          >
            {" "}
            <img
              src={rocketgif}
              alt="Rocket animation"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>


 
      )}
    </>
  );
};

export default Rocket;
 