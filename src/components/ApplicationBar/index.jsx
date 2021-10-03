import { Store } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const ApplicationBar = ({ showFruitsIngress, setShowFruitsIngress }) => {
  const toggleDisplay = () => {
    setShowFruitsIngress(!showFruitsIngress);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Store size="large" sx={{ mr: 2 }} />

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
          }}
        >
          Quitanda
        </Typography>

        <Button color="inherit" onClick={toggleDisplay}>
          {showFruitsIngress ? "Saídas" : "Entradas"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
