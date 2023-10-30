import { FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";

function PopoverComp({ onSelectColumn, setSelectedColumns, selectedColumns }) {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 170 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Density",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "density1",
      label: "Density1",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "density2",
      label: "Density2",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "density3",
      label: "Density3",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "density4",
      label: "Density4",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "density5",
      label: "Density5",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  const handleColumnClick = (column) => {
    if (selectedColumns.includes(column)) {
      const yeniDizi = selectedColumns.filter((col) => col !== column);
      setSelectedColumns(yeniDizi);
    } else {
      setSelectedColumns([...selectedColumns, column]);
    }

    setSwitchOn(!isSwitchOn);
  };

  return (
    <div
      className="popover"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {columns.map((item) => (
        <FormControlLabel
          sx={{ display: "flex", flexDirection: "row" }}
          key={item.id}
          control={
            <Switch
              disabled={item.id === "name"}
              sx={{ display: "flex", flexDirection: "column" }}
              onClick={() => handleColumnClick(item.id)}
              checked={selectedColumns.includes(item.id)}
            />
          }
          label={item.label}
        />
      ))}
    </div>
  );
}

export default PopoverComp;
