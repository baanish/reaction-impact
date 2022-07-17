import { IconButton } from "@mui/material";
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
    <div>
      <div>
        <IconButton aria-label="Pyro" size="large" onClick={() =>{console.log("Pyro Clicked")}}>
          <PyroIcon />
        </IconButton>
      </div>

      <div>
        <IconButton aria-label="Hydro" size="large">
          <HydroIcon />
        </IconButton>
      </div>
      <div>
        <IconButton aria-label="Cryo" size="large">
          <CryoIcon />
        </IconButton>
      </div>

      <div>
        <IconButton aria-label="Electro" size="large">
          <ElectroIcon />
        </IconButton>
      </div>

      <div>
        <IconButton aria-label="Anemo" size="large">
          <AnemoIcon />
        </IconButton>
      </div>

      <div>
        <IconButton aria-label="Geo" size="large">
          <GeoIcon />
        </IconButton>
      </div>

      <div>
        <IconButton aria-label="Dendro" size="large">
          <DendroIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
