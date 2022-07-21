import { Grid, IconButton, SvgIcon } from "@mui/material";
import {
  PyroIcon,
  HydroIcon,
  CryoIcon,
  ElectroIcon,
  AnemoIcon,
  GeoIcon,
  DendroIcon,
} from "./ElementIcons";


function App() {
  return (
    <div className="App">
    <Grid container height={1200} spacing={2}>
      <Grid align="center" vertical-align="center" item xs={12}>
        <IconButton
          id="pyro"
          style={{ backgroundColor: "#2e2b2b" }}
          aria-label="Pyro"
          size="large"
          onClick={() => {
            console.log("Pyro Clicked");
          }}
        >
          <SvgIcon fontSize="large">
            <PyroIcon />
          </SvgIcon>
        </IconButton>
      </Grid>

      <Grid align="center" item xs={3}>
        <IconButton
          id="hydro"
          style={{ backgroundColor: "#2e2b2b" }}
          aria-label="Hydro"
          size="large"
        >
          <SvgIcon fontSize="large">
            <HydroIcon />
          </SvgIcon>
        </IconButton>
      </Grid>
      <Grid align="center" item xs={3}>
        <IconButton
          id="anemo"
          style={{ backgroundColor: "#2e2b2b" }}
          aria-label="Anemo"
          size="large"
        >
          <SvgIcon fontSize="large">
            <AnemoIcon />
          </SvgIcon>
        </IconButton>
      </Grid>

      <Grid align="center" item xs={3}>
        <IconButton
          id="geo"
          style={{ backgroundColor: "#2e2b2b" }}
          aria-label="Geo"
          size="large"
        >
          <SvgIcon fontSize="large">
            <GeoIcon />
          </SvgIcon>
        </IconButton>
      </Grid>
      <Grid align="center" item xs={3}>
        <IconButton
          id="cryo"
          style={{ backgroundColor: "#2e2b2b" }}
          aria-label="Cryo"
          size="large"
        >
          <SvgIcon fontSize="large">
            <CryoIcon />
          </SvgIcon>
        </IconButton>
      </Grid>

      <Grid align="center" item xs={12}>
        <IconButton
          id="electro"
          style={{ backgroundColor: "#2e2b2b" }}
          aria-label="Electro"
          size="large"
        >
          <SvgIcon fontSize="large">
            <ElectroIcon />
          </SvgIcon>
        </IconButton>
      </Grid>

      {/* 
      <div>
        <IconButton style={{ backgroundColor: "#2e2b2b" }} aria-label="Dendro" size="large">
          <DendroIcon />
        </IconButton>
      </div> */}
    </Grid>
    </div>
  );
}

export default App;
