import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { AddressDetailsForm } from "./forms/AddressDetailsForm";
import { PersonalDetailsForm } from "./forms/PersonalDetailsForm";

const steps = ["Step 1", "Step 2"];

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other",
// }
interface UserFormInput {
  firstName: string;
  address: String;
}
const defaultValues: UserFormInput = {
  firstName: "",
  address:"",
};

// const validationSchema = yup.object().shape({
//   firstName: yup.string().required(),
//   address: yup.string().required(),
// });

const validationSchema = [
  //validation for step1
  yup.object({
    firstName: yup.string().required(),
  }),
  //validation for step2
  yup.object({
    address: yup.string().required()
  }),
];


export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const currentValidationSchema:any = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset, trigger } = methods;

  const onSubmit: SubmitHandler<UserFormInput> = (data) => console.log(data);


  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Button type="submit">Submit</Button>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box> */}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <>
            <Box sx={{ display: "flex", flexDirection: "row" }} p={5}>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {activeStep === 0 && <PersonalDetailsForm />}
                  {activeStep === 1 && <AddressDetailsForm />}
                </form>
              </FormProvider>
            </Box>
          </>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </React.Fragment>
      )}
    </Box>
  );
}
