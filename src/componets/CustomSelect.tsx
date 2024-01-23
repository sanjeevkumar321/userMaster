import { FormHelperText, FormLabel, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
export const CustomSelect = (props: {
  name: string;
  label: string;
  children: any;
}) => {
  const { control } = useFormContext();
  return (
    <>
      <FormLabel>{props.label}</FormLabel>
      <Controller
        name={props.name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Select
              placeholder={"Please Select " + props.label}
              sx={{ height: 40 }}
              fullWidth
              value={value || ""}
              onChange={(v) => {
                onChange(v.target.value);
              }}
              error={!!error}
            >
              
              {props.children}
            </Select>
            {!!error && (
              <FormHelperText color="red" error>
                {error?.message}
              </FormHelperText>
            )}
          </>
        )}
      />
    </>
  );
};
