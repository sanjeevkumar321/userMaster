import { Grid, MenuItem, Typography } from "@mui/material";
import { CustomSelect } from "../CustomSelect";
import { CustomTextField } from "../CustomTextField";

export const AddressDetailsForm = () => {
  return (
    <div>
      <Typography
        variant="h6"
        marginBottom={2}
        style={{ textDecorationLine: "underline" }}
      >
        Address Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField name="address" label="Address" />
        </Grid>
        <Grid item xs={3}>
          <CustomSelect name="state" label="State">
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
          </CustomSelect>
        </Grid>
        <Grid item xs={3}>
          <CustomSelect name="city" label="City">
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
          </CustomSelect>
        </Grid>
        <Grid item xs={3}>
          <CustomSelect name="country" label="Country">
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
          </CustomSelect>
        </Grid>
        <Grid item xs={3}>
          <CustomTextField name="pincode" label="Pincode" />
        </Grid>
      </Grid>
    </div>
  );
};
