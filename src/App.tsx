import { Grid } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Grid container alignItems={"center"} justifyContent={"center"} p={5}>
        <Grid item xs={12}>
         <Home/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
