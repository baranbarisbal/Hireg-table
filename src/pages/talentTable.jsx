import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import PopoverComp from "../components/PopoverComp";
import { useState } from "react";
import { useEffect } from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Popover,
  TextField,
} from "@mui/material";
import { columnsStateInitializer } from "@mui/x-data-grid/internals";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 170 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,

    format: (value) => value.toFixed(2),
  },
  {
    id: "density1",
    label: "Density1",
    minWidth: 170,

    format: (value) => value.toFixed(2),
  },
  {
    id: "density2",
    label: "Density2",
    minWidth: 170,

    format: (value) => value.toFixed(2),
  },
  {
    id: "density3",
    label: "Density3",
    minWidth: 170,

    format: (value) => value.toFixed(2),
  },
  {
    id: "density4",
    label: "Density4",
    minWidth: 170,

    format: (value) => value.toFixed(2),
  },
  {
    id: "density5",
    label: "Density5",
    minWidth: 170,

    format: (value) => value.toFixed(2),
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   const density1 = population / size;
//   const density2 = population / size;
//   const density3 = population / size;
//   const density4 = population / size;
//   const density5 = population / size;
//   return {
//     name,
//     code,
//     population,
//     size,
//     density,
//     density1,
//     density2,
//     density3,
//     density4,
//     density5,
//   };
// }

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableData, setTableData] = useState([]);
  const [showPopover, setShowPopover] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [input, setInput] = useState({});
  const [rows, setRows] = useState([]);
  console.log(input);

  const handleSave = (e) => {
    const newRow = { ...input };

    setRows([...rows, newRow]);

    setInput({
      name: "",
      code: "",
      population: "",
      size: "",
      density: "",
      density1: "",
      density2: "",
      density3: "",
      density4: "",
      density5: "",
    });
    setOpenDialog(false);
    // setInput({
    //   ...input,
    //   [e.target.name]: e.target.value,
    // });
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log(selectedColumns);
  useEffect(() => {
    setSelectedColumns([columns[0].id]);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleColumnSelect = (selectedColumn) => {
    setSelectedColumns([...selectedColumns, selectedColumn]);
  };

  const handlePopoverClose = () => {
    setShowPopover(false);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Button
          sx={{
            borderRadius: "6px",
            border: "1px solid rgb(208, 213, 221)",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #000",
            },
          }}
          aria-describedby={id}
          onClick={handleClick}
        >
          Columns
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <PopoverComp
            selectedColumns={selectedColumns}
            onSelectColumn={handleColumnSelect}
            onClose={handlePopoverClose}
            setSelectedColumns={setSelectedColumns}
          />
        </Popover>
        <Button
          sx={{
            marginLeft: 2,
            borderRadius: "6px",
            border: "1px solid rgb(208, 213, 221)",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #000",
            },
          }}
          onClick={handleClickDialog}
        >
          Add Item
        </Button>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Add Item</DialogTitle>
          <DialogContent>
            <DialogContentText>You can add item here</DialogContentText>
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Item Name"
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="code"
              name="code"
              label="Item Code"
              type="code"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="population"
              name="population"
              label="Item Population"
              type="population"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="size"
              name="size"
              label="Item Size"
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="density"
              name="density"
              label="Item Density"
              type="density"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="density1"
              name="density1"
              label="Item Density2"
              type="density"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="density2"
              name="density2"
              label="Item Density2"
              type="density"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="density3"
              name="density3"
              label="Item Density3"
              type="density"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="density4"
              name="density4"
              label="Item Density4"
              type="density"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="density5"
              name="density5"
              label="Item Density5"
              type="density"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSave}>Add Item</Button>
          </DialogActions>
        </Dialog>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {selectedColumns.map((selectedColumn) => {
                const column = columns.find((col) => col.id === selectedColumn);
                if (column) {
                  if (column.id === "name") {
                    return (
                      <TableCell
                        key={column.id}
                        stickyHeader
                        align={column.align}
                        style={{
                          position: column.sticky ? "sticky" : "initial",
                          left: column.sticky ? 0 : "auto",
                          backgroundColor: "#f5f5f5",
                          zIndex: 50,
                        }}
                      >
                        {column.label}
                      </TableCell>
                    );
                  } else if (column.id === "size") {
                    return (
                      <TableCell
                        key={column.id}
                        stickyHeader
                        align={column.align}
                        style={{
                          position: column.sticky ? "sticky" : "initial",
                          left: column.sticky ? 0 : "auto",

                          zIndex: 50,
                        }}
                      >
                        {column.label}
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.label}
                      </TableCell>
                    );
                  }
                }
                return null;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {selectedColumns.map((selectedColumn) => {
                      const column = columns.find(
                        (col) => col.id === selectedColumn
                      );
                      if (column) {
                        if (column.id === "name") {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                position: column.sticky ? "sticky" : "initial",
                                left: column.sticky ? 0 : "auto",
                                backgroundColor: "#f5f5f5",
                              }}
                            >
                              {column.format &&
                              typeof row[column.id] === "number"
                                ? column.format(row[column.id])
                                : row[column.id]}
                            </TableCell>
                          );
                        } else if (column.id === "size") {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                position: column.sticky ? "sticky" : "initial",
                                left: column.sticky ? 0 : "auto",
                              }}
                            >
                              {column.format &&
                              typeof row[column.id] === "number"
                                ? column.format(row[column.id])
                                : row[column.id]}
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format &&
                              typeof row[column.id] === "number"
                                ? column.format(row[column.id])
                                : row[column.id]}
                            </TableCell>
                          );
                        }
                      }
                      return null;
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
