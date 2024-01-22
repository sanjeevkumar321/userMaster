import { Grid } from "@mui/material";
import React from "react";
import { CustomTextField } from "../CustomTextField";
import { CustomSelect } from "../CustomSelect";

export const PersonalDetailsForm = () => {
  return (
    <div>
      <Grid container spacing={2} xs={12}>
        <Grid item xs={4}>
          <CustomTextField name="firstName" label="firstname" />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField name="dob" label="date of Birth" />
        </Grid>
        <Grid item xs={4}>
         <CustomSelect name="sex" label="sex">
          <option value={"Male"}>male</option>
          <option value={"Female"}>Female</option>
         </CustomSelect>
        </Grid>
      </Grid>
    </div>
  );
};
