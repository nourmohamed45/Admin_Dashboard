// Mui Components
import { Typography, Box, useTheme } from "@mui/material";
// Others
import { tokens } from "../theme";
import PropTypes from "prop-types";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb={"30px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
