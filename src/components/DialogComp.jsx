import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

const DialogComp = ({
  columns,
  openDialog,
  handleSave,
  handleChange,
  handleCloseDialog,
}) => {
  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>Add Item</DialogTitle>
      <DialogContent>
        <DialogContentText>You can add item here</DialogContentText>
        {columns.map((col, index) => (
          <TextField
            key={col.id}
            onChange={handleChange}
            autoFocus
            margin="dense"
            id={col.id}
            name={col.id}
            label={`Item ${col.label}`}
            type={col.label}
            fullWidth
            variant="standard"
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Add Item</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComp;
