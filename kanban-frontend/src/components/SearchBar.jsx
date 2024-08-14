import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
const SearchField = () => (
  <TextField
    id="outlined-basic"
    variant="outlined"
    fullWidth
    text="Search for tasks"
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
      startAdornment: (
        <InputAdornment position="start">
          <MenuIcon />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchField;
