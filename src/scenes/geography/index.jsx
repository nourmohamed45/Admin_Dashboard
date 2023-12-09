import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";


function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box m={"20px"}>
      <Header title={"Geography Chart"} subtitle={"Simple Geography Chart"}/>
      <Box border={`1px solid ${colors.grey[100]}`} borderRadius={"4px"} height={"75vh"}>
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography;