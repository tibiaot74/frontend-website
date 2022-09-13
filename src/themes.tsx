import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: "#171717",
          color: "white",
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#171717",
        },
      },
    },
  },
});

export default defaultTheme;
