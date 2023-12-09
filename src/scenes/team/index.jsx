// Mui components
import { Box, Typography, useTheme } from "@mui/material";
// Mui Data Grid
import { DataGrid } from "@mui/x-data-grid";

// Mui Icons
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettings";
import LockOpenOutlined from "@mui/icons-material/LockOpen";
import SecurityOutlined from "@mui/icons-material/Security";

// Components
import Header from "../../components/Header";

// Others
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={"60%"}
            m={"0 auto"}
            p={"5px"}
            display={"flex"}
            justifyContent={"center"}
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius={"4px"}
            sx={{outline: "none", border: "none"}}
          >
            {access === "admin" && <AdminPanelSettingsOutlined/>}
            {access === "user" && <LockOpenOutlined/>}
            {access === "manager" && <SecurityOutlined/>}
            <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m={"20px"}>
      <Header title={"Manage Team"} subtitle={"Managing the Team Members"} />
      <Box
        m={"40px 0 0 0"}
        height={"73vh"}
        sx={{
          "& .MuiDataGrid-root" : {
            border: "none",
          },
          "& .MuiDataGrid-cell" : {
            border: "none",
          },
          "& .name-column--cell" : {
            color: colors.greenAccent[300] ,
          },
          "& .MuiDataGrid-columnHeaders" : {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller" : {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer" : {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          }
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}

export default Team;
