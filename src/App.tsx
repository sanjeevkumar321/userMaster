import React from "react";
import HorizontalLinearStepper from "./componets/HorizontalLinearStepper";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid container alignItems={"center"} justifyContent={"center"} p={5}>
        <Grid item xs={6}>
          <HorizontalLinearStepper />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
