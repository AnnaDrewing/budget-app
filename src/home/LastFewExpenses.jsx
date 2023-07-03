import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./LastFewExpenses.css";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";

export default function LastFewExpenses({ expenseList }) {
  const rows = [
    // createData(4.99, "Other", "27 Jun 2023"),
    // createData(4.99, "Entertainment", "27 Jun 2023"),
    // createData(4.99, "Other", "27 Jun 2023"),
  ];
  expenseList.forEach((element) => {
    const day = element.date["$D"];
    const monthArr = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = element.date["$M"];
    const monthName = monthArr[month];
    const year = element.date["$y"];
    const fullDate = day + " " + monthName + " " + year;
    const category = element.category;
    const price = element.price;
    console.log(
      "Date: " + fullDate + ", category: " + category + ", price: " + price
    );
    rows.push(createData(price, category, fullDate));
  });

  const noLoggedExpenses = expenseList.length < 1 ? true : false;
  function createData(price, category, date) {
    return { price, category, date };
  }

  // styling the table
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
      {noLoggedExpenses && <p>You have added no expenses so far</p>}
      {!noLoggedExpenses && (
        <TableContainer size="small" component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead className="tableHeader">
              <TableRow>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={uuid()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
