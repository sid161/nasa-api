import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AsteroidData = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state: any = location?.state;
  console.log(state);

  return (
    <>
      <Box className="card">
        <h2 data-testid="name">Name - {state?.name}</h2>
        <h2> Nasa _Url - {state?.nasa_jpl_url}</h2>
        <h2>
          is Potentially Hazardous -{" "}
          {state?.is_potentially_hazardous_asteroid.toString()}
        </h2>
        <Button onClick={() => navigate(-1)} variant="contained">
          Back
        </Button>
      </Box>
    </>
  );
};

export default AsteroidData;
