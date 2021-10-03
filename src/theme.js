import { createTheme } from "@mui/material/styles";

const {
  palette: { primary },
} = createTheme();

const theme = createTheme({
  palette: {
    background: {
      default: "#eaeef3",
    },
    primary: {
      ...primary,
      veryLight: "#e3f2fd",
    },
  },
});

export default theme;
