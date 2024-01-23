import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import * as yup from "yup";
import { AddressDetailsForm } from "../componets/user/AddressDetailsForm";
import { PersonalDetailsForm } from "../componets/user/PersonalDetailsForm";
import UserTable from "../componets/user/UserTable";
import { NewUser } from "../redux/action";
import store from "../redux/store";
import { User } from "../type";
import {
  aadhaarRegex,
  mobileRegex,
  panRegex,
  pinCodeRegex,
} from "../utils/regex";

const steps = ["Step 1", "Step 2"];
const defaultValues: User = {
  name: "",
  age: "",
  sex: "",
  mobile: "",
  govIdType: "",
  govIdNo: "",
  address: "",
  state: "",
  city: "",
  country: "",
  pincode: "",
};

const validationSchema = [
  //validation for step1
  yup.object({
    name: yup
      .string()
      .trim()
      .min(3)
      .required("Please Enter your Name")
      .typeError("Please Enter your Name"),
    age: yup
      .number()
      .required("Please Enter your Age")
      .min(1)
      .max(150)
      .typeError("Please Enter your Age"),
    sex: yup.string().trim().required("Please select "),
    mobile: yup
      .string()
      .matches(mobileRegex, "Phone number is not valid")
      .required("Please Enter your mobile number")
      .typeError("Please Enter mobile number"),
    govIdType: yup
      .string()
      .trim()
      .required("Please Select your Govid Type")
      .typeError("Please Select your Govid Type"),
    govIdNo: yup
      .string()
      .trim()
      .nullable()
      .notRequired()
      .when("govIdType", (govIdType) => {
        if (govIdType[0] === "Aadhar") {
          return yup
            .string()
            .trim()
            .nullable()
            .required("Required")
            .matches(aadhaarRegex, "Invalid Aadhaar number");
        }
        if (govIdType[0] === "Pan") {
          return yup
            .string()
            .trim()
            .nullable()
            .required("Required")
            .matches(panRegex, "Invalid Pan No.");
        } else {
          return yup.string().trim().nullable().notRequired();
        }
      }),
  }),
  //validation for step2
  yup.object({
    address: yup.string(),
    state: yup.string(),
    city: yup.string(),
    country: yup.string(),
    pincode: yup
      .string()
      .trim()
      .nullable()
      .notRequired()
      .when((d) => {
        if (d[0].length > 0) {
          return yup
            .string()
            .trim()
            .nullable()
            .required("Required")
            .matches(pinCodeRegex, "Invalid Pincode No.");
        } else {
          return yup.string().trim().nullable().notRequired();
        }
      }),
  }),
];

export type RootState = ReturnType<typeof store.getState>


export default function Home() {
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);

  const currentValidationSchema: any = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset, trigger } = methods;

  const onSubmit: SubmitHandler<User> = (data:User) =>{
    if(dispatch(NewUser(data))){
      Swal.fire("Successfully Added","","success");
      handleReset();
    }

    
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset(defaultValues);
  };

  return (
    <>
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

      <React.Fragment>
        <>
          <Box sx={{ display: "flex", flexDirection: "row" }} p={5}>
            <FormProvider {...methods}>
              <form style={{ width: "100%" }}>
                {activeStep === 0 && <PersonalDetailsForm />}
                {activeStep === 1 && <AddressDetailsForm />}
                <Grid container justifyContent={"space-between"} marginTop={5}>
                  <Button
                    variant="contained"
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      onClick={handleSubmit(onSubmit)}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button onClick={handleNext} variant="contained">
                      Next
                    </Button>
                  )}
                </Grid>
              </form>
            </FormProvider>
          </Box>
        </>
      </React.Fragment>
    </Box>
    <Box>
      <UserTable/>
    </Box>
    </>
  );
}
