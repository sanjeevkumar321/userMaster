import { Grid, MenuItem, Typography } from "@mui/material";
import { CustomSelect } from "../CustomSelect";
import { CustomTextField } from "../CustomTextField";

export const PersonalDetailsForm = () => {
  return (
    <div>
      <Typography variant="h6" marginBottom={2} style={{textDecorationLine:"underline"}}>Personal Details</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CustomTextField name="name" label="Name" />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField name="age" label="Age" />
        </Grid>
        <Grid item xs={4}>
          <CustomSelect name="sex" label="sex">
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </CustomSelect>
        </Grid>
        <Grid item xs={4}>
          <CustomTextField name="mobile" label="Mobile no" />
        </Grid>
        <Grid item container xs={8} spacing={2}>
          <Grid item xs={5}>
            <CustomSelect name="govIdType" label="Govt Issued ID Type ">
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="Aadhar">Aadhar</MenuItem>
              <MenuItem value="Pan">Pan</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={7}>
            <CustomTextField name="govIdNo" label="Gov Id No" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
