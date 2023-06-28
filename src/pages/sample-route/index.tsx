import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import NavBar from "@/src/components/common/NavBar";
import ScrollToAElement from "@/src/components/common/ScrollToAElement";
import { Fragment } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function InteractiveComments() {
  return (
    <Fragment>
      <CssBaseline />
      <NavBar title="Starter Code" />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="xl" sx={{ backgroundColor: "#FAF0E4" }}>
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20rem",
            backgroundColor: "#FAF0E4",
            border: "2px dotted black",
          }}
        >
          <h1>Some Awesome Content</h1>
        </Box>

        {/* ////////////_____Your component______/////////// */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 5 }}>
          Your content goes here
        </Box>
      </Container>

      <ScrollToAElement querySelectorValue="#back-to-top-anchor">
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToAElement>
    </Fragment>
  );
}
