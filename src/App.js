import "@fontsource/roboto";
import theme from "./theme";
import { fruitsDB } from "./services/db";
import { useState } from "react";
import ApplicationBar from "./components/ApplicationBar";
import { Box, CssBaseline, Divider, ThemeProvider } from "@mui/material";
import FruitForm from "./components/FruitForm";
import FruitsIngress from "./components/FruitsIngress";
import FruitsOutgress from "./components/FruitsOutgress";
import FruitsAll from "./components/FruitsAll";

const App = () => {
  const [fruits, setFruits] = useState(fruitsDB);

  const [showFruitsIngress, setShowFruitsIngress] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ flexGrow: 1 }}>
        <ApplicationBar
          showFruitsIngress={showFruitsIngress}
          setShowFruitsIngress={setShowFruitsIngress}
        />

        <FruitForm fruits={fruits} setFruits={setFruits} />

        <Divider />

        {showFruitsIngress ? (
          <FruitsIngress fruits={fruits} />
        ) : (
          <FruitsOutgress fruits={fruits} />
        )}

        <Divider />

        <FruitsAll fruits={fruits} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
