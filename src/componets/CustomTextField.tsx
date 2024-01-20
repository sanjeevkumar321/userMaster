import { FormLabel, TextField } from "@mui/material";
import * as React from "react";
import { Controller, useFormContext} from "react-hook-form";
export const CustomTextField = (props: { name: string; label: string }) => {
  const { control } = useFormContext();
  return (
    <>
      <FormLabel>{props.label}</FormLabel>
      <Controller
        name={props.name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={field.value}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
    </>
  );
};
