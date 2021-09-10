import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    width: "5%",
    textDecoration: "none",
    transition: "opacity 0.5s",
    "&:hover": {
      opacity: "0.5",
    },
  },
  logoIcon: {
    height: "40px",
  },
}));

export default useStyles;
