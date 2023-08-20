import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ColorModeContext, tokens, useMode } from "../../theme";
import Header from "../../scenes/Header";
import { useTheme } from "@mui/material";
import Displayer, { Exporter } from "../../scenes/displayer";
// import Sidebar from "../../../../Dashboard-master/src/scenes/global/Sidebar";
import { useEffect, useState } from "react";

const Cp = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  useEffect(() => {
    Displayer();
    console.log(Exporter)
  }, [])
  // var iterator;
  const handleGetRowId = (e) => {
    return e.handle
  }
  console.log(Exporter)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID", flex: 0.5 },
    { field: "handle", headerName: "Username" },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "maxRating",
      headerName: "Maximum Rating",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "rank",
      headerName: "Ranking",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "friendOfCount",
      headerName: "Friends of ",
      flex: 1,
    },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
  ];


  return (
    <>
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
            rows={Exporter}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={handleGetRowId}
          />
        </Box>
        <Box m="20px">
          <Header
            title="Roadmap and Resources "
            subtitle="for procedural and planned structure"
          /><ul>
            <li>
              Learning a Programming Language :  <a style={{ textDecoration: "none", color: "green" }} href="https://www.youtube.com/@CodeWithHarry">    &nbsp; &nbsp; CODE with HARRY</a>
              &nbsp; &nbsp;(recommended C++) </li>
            <li>
              Practice Questions : <ul> <a style={{ textDecoration: "none", color: "green" }} href='https://www.codechef.com/'> CodeChef</a></ul>
              <ul> <a style={{ textDecoration: "none", color: "green" }} href='https://www.hackerrank.com/'> HackerRank</a></ul>
              <ul> <a style={{ textDecoration: "none", color: "green" }} href='https://www.hackerearth.com/'> HackerEarth</a></ul>
              <ul> <a style={{ textDecoration: "none", color: "green" }} href='https://www.codeforces.com/'> Codeforces</a></ul>
            </li>
            <li>
              Learn DSA : <a style={{ textDecoration: "none", color: "green" }} href='https://www.youtube.com/@CodeHelp/about'> CodeHelp - by Babbar</a>
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default Cp;
