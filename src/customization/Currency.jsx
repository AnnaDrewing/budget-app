/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function Currency({updateCurrency}) {
  const [userCurrency, setUserCurency] = useState("€");
  const handleChange = (evt) => {
    const newCurrency = evt.target.value;
    setUserCurency(newCurrency);
    updateCurrency(newCurrency);
  };
  return (
  <>
  <FormControl size="small" style={{width: '200px'}}>
      <InputLabel id="font-label">Currency</InputLabel>
      <Select
        labelId="currency-label"
        id="currency"
        value={userCurrency}
        name="currency"
        label="Currency"
        onChange={handleChange}
      >
        <MenuItem value="€">Euro</MenuItem>
        <MenuItem value="$">US Dollar</MenuItem>
        <MenuItem value="PLN">Polish Złoty</MenuItem>
        <MenuItem value="¥">Yen</MenuItem>
      </Select>
    </FormControl>
  </>
  )
  ;
}
