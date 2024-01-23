import {
  Autocomplete,
  FormLabel,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { CustomTextField } from "../CustomTextField";
// import CustomAutoComplete from "../CustomAutoComplete";
import { Controller, useFormContext } from "react-hook-form";

export const AddressDetailsForm = () => {
  const { control,setValue } = useFormContext();
  const [countries, setCountries] = useState([]);
  const getCountry = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    const mappedData = response?.map((item: any) => ({
      label: item.name.common,
      value:item.name.common,
    }));
    setCountries(mappedData);
  };
  useEffect(() => {
    getCountry();
  }, []);
  console.log(countries, "----");
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
          <CustomTextField name="state" label="State" />
        </Grid>
        <Grid item xs={3}>
          <CustomTextField name="city" label="City" />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name={"countrydd"}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <>
                  <FormLabel>{"country"}</FormLabel>
                  <Autocomplete
                    options={countries || []}
                    value={value || null}
                    onChange={(_, d) => {
                      onChange(d);
                      setValue("country",d.value)
                    }}
                    // isOptionEqualToValue={(option, value) => option.value === value}
                    getOptionLabel={(option) => option?.label || ""}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        size="small"
                        helperText={error?.message}
                        error={!!error}
                      />
                    )}
                  />
                </>
              );
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <CustomTextField name="pincode" label="Pincode" />
        </Grid>
      </Grid>
    </div>
  );
};
