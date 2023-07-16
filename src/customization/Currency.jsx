/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function Currency({ updateCurrency, userCurrency }) {
  const [currency, setCurency] = useState(userCurrency);
  const handleChange = (evt) => {
    const newCurrency = evt.target.value;
    setCurency(newCurrency);
    updateCurrency(newCurrency);
  };

  const theme = useTheme();
  return (
    <>
      <FormControl size="small" style={{ width: "200px" }}>
        <InputLabel id="font-label">Currency</InputLabel>
        <Select
          labelId="currency-label"
          id="currency"
          value={currency}
          name="currency"
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem
            value="€"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Euro
          </MenuItem>
          <MenuItem
            value="$"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            US Dollar
          </MenuItem>
          <MenuItem
            value="PLN"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Polish Złoty
          </MenuItem>
          <MenuItem
            value="¥"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Yen
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
