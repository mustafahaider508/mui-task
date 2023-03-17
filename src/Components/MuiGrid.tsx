import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";

const rows:any = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    jobrole: "react js",
    lastvisit: "lastvisit",
    status: "status",
    postcode: "postcode",
    actions: "actions",
  },
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    jobrole: "react js",
    lastvisit: "lastvisit",
    status: "status",
    postcode: "postcode",
    actions: "actions",
  },
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    jobrole: "react js",
    lastvisit: "lastvisit",
    status: "status",
    postcode: "postcode",
    actions: "actions",
  },
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    jobrole: "react js",
    lastvisit: "lastvisit",
    status: "status",
    postcode: "postcode",
    actions: "actions",
  },
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    jobrole: "react js",
    lastvisit: "lastvisit",
    status: "status",
    postcode: "postcode",
    actions: "actions",
  },
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    jobrole: "react js",
    lastvisit: "lastvisit",
    status: "status",
    postcode: "postcode",
    actions: "actions",
  },
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    jobrole: "react js",
    lastvisit: "lastvisit",
    status: "status",
    postcode: "postcode",
    actions: "actions",
  },
];

const MuiGrid = () => {
 
     const columns: GridColDef[] = [
       { field: "id", headerName: "#", width: 160 },
       { field: "firstName", headerName: "EMPLOYEE NAME", width: 160 },
       { field: "lastName", headerName: "JOBE TYPE", width: 160 },
       {
         field: "jobrole",
         headerName: "JOB ROLE",
         width: 180,
         renderCell: () => {
           return (
             <Box sx={{ backgroundColor: "#fff3e0", px: 1 }}>
               <p style={{ color: "#ffcc80" }}>owner</p>
             </Box>
           );
         },
       },
       {
         field: "lastvisit",
         headerName: "LAST VISIT",
         description: "This column has a value getter and is not sortable.",
         sortable: false,
         width: 160,
       },
       {
         field: "status",
         headerName: "STATUS",
         description: "This column has a value getter and is not sortable.",
         sortable: false,
         width: 160,
         renderCell: () => {
           return (
             <Box sx={{ backgroundColor: "#f1f8e9", px: 1 }}>
               <p style={{ color: "#a5d6a7" }}>Active</p>
             </Box>
           );
         },
       },
       {
         field: "postcode",
         headerName: "POST CODE",
         description: "This column has a value getter and is not sortable.",
         sortable: false,
         width: 160,
         renderCell: () => {
           return (
             <Box sx={{ display: "flex", alignItems: "center" }}>
               <LocationOnIcon style={{ color: "#5c6bc0" }} />
               <p>646546</p>
             </Box>
           );
         },
       },
       {
         field: "actions",
         headerName: "ACTIONS",
         description: "This column has a value getter and is not sortable.",
         sortable: false,
         width: 160,
         renderCell: () => {
           return (
             <select
               style={{
                 padding: "4px",
                 border: "1px solid #eceff1",
                 backgroundColor: "#eceff1",
               }}
             >
               <option>Actions</option>
             </select>
           );
         },
       },
     ];

  return (
    <Box sx={{ px: 2 }}>
      <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
        Employee List
      </Typography>
      <Box>
        <span>Employee </span> / <span>Dashboard</span> / <span>link</span>
      </Box>
      <Box sx={{ height: 500, width: "100%", px: 4, py: 4 ,my:2,backgroundColor:"#fff"}}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              py: 1,
              display: "flex",
              alignItems: "center",
              background: "#f5f5f5",
              width: "220px",
              gap: 1,
              px: 2,
            }}
          >
            <SearchIcon />
            <input
              style={{ border: "none", outline: "none", background: "#f5f5f5" }}
              placeholder="Enter name"
            />
          </Box>
          <Box>
            <Button
              sx={{
                mx: 2,
                backgroundColor: "#e8eaf6",
                color: "#5c6bc0",
                border: "none",
              }}
              variant="outlined"
              startIcon={<FilterAltIcon />}
            >
              Filter
            </Button>
            <Button
              sx={{
                backgroundColor: "#e8eaf6",
                color: "#5c6bc0",
                border: "none",
              }}
              variant="outlined"
              startIcon={<FilterListIcon />}
            >
              Sort By
            </Button>
            <Button
              sx={{ backgroundColor: "#5c6bc0", mx: 2 }}
              variant="contained"
            >
              Add Empolyee
            </Button>
          </Box>
        </Box>
        <DataGrid sx={{ border: "none" }} rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default MuiGrid