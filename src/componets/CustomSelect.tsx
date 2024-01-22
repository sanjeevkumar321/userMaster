import { FormHelperText, FormLabel, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
const ITEM_HEIGHT = 20;
const ITEM_PADDING_TOP = 8;
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
            sx={{height:40,width:'100%'}}
              value={value || ""}
            //   fullWidth
              onChange={(v) => {
                onChange(v);
              }}
              error={!!error}
            //   MenuProps={{
            //     PaperProps: {
            //       style: {
            //         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            //         top: 10,
            //       },
            //     },
            //   }}
            >
              {props.children}
            </Select>
            {!!error && (
              <FormHelperText color='red'  error>
                {error?.message}
              </FormHelperText>
            )}
          </>
        )}
      />
    </>
  );
};
