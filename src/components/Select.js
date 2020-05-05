import React from "react";
import ReactSelect from "react-select";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default ({ options, ...props }) => {
  return (
    <Select {...props}>
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};
