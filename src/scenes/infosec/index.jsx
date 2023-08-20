import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../scenes/Header";
import { useTheme } from "@mui/material";
import { gitExporter } from "../../scenes/gitdisplayer";
const InfoSec = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "login", headerName: "Username" },
    {
      field: "public_repos",
      headerName: "Repositories",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "followers",
      headerName: "Followers",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "html_url",
      headerName: "Profile Link",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    
  ];

  return (
    <Box m="20px">
      <Header
        title="Rank List"
        subtitle="for your Standings in your college"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          // rows={mockDataContacts}
          rows={gitExporter}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Box m="20px">
      <Header
        title="Roadmap and Resources "
        subtitle="for procedural and planned structure"
      /><ul>
        <li> 
          Learning basics of <a style={{textDecoration:"none",color:"green"}} href="https://www.w3schools.com"> InfoSec. </a></li>
        <li>
          Get Familiar with <a style={{textDecoration:"none",color:"green"}} href='https://www.javatpoint.com/'>Shell Terminal </a>and Basic Commands
        </li>
        <li>
          Learn about Encryption , Data Masking and other terms 
        </li>
        <li>
          Do Some &nbsp; <a style={{textDecoration:"none",color:"green"}} href='https://www.picoctf.com/'>picoCTF </a> problems 
        </li>
      </ul>
      </Box>
    </Box>
  );
};

export default InfoSec;
