import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../scenes/Header";
import { useTheme } from "@mui/material";
import { gitExporter } from "../../scenes/gitdisplayer";

const Design = () => {
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
          Learn about &nbsp; &nbsp;<a style={{textDecoration:"none",color:"green"}} href="https://www.youtube.com/">Color Theory</a> </li>
        <li>
          Get Inspiration from &nbsp;  <a style={{textDecoration:"none",color:"green"}} href='https://www.canva.com/'> Canva </a>and&nbsp;<a style={{textDecoration:"none",color:"green"}} href='https://www.dribble.com/'> Dribble </a> and Start your Design at Canva
        </li>
        <li>
          If interested in designing UI/Ux .. Go to &nbsp;<a style={{textDecoration:"none",color:"green"}} href='https://www.figma.com/'> Figma </a>
        </li>
      </ul>
      </Box>
    </Box>
  );
};

export default Design;
