import { Grid } from "@mui/material";
import React from "react";
import { CustomTextField } from "../CustomTextField";

export const PersonalDetailsForm = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <CustomTextField name="firstName" label="firstname" />
        </Grid>
      </Grid>
    </div>
  );
};
