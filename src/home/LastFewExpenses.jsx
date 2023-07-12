import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function LastFewExpenses({
  expenseList,
  userFont,
  userFontSize,
}) {
  const rows = [];
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
    const price = element.price + " " + element.currency;
    rows.push(createData(price, category, fullDate));
  });

  let lastThreeExpenses = rows.slice(-3);

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
      fontSize: userFontSize,
      fontFamily: userFont,
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

  const theme = useTheme();

  return (
    <>
      {noLoggedExpenses && (
        <>
          <Typography
            sx={{
              padding: "3px",
              margin: "15px",
              color: theme.palette.text.primary,
              letterSpacing: "3px",
              fontSize: userFontSize,
              fontFamily: userFont,
            }}
          >
            You haven't added any expenses yet. Go spend some money.
          </Typography>
          <img
            src="https://raw.githubusercontent.com/AnnaDrewing/budget-app/main/public/32.png"
            width="90%"
          />
        </>
      )}
      {!noLoggedExpenses && (
        <Box sx={{ margin: "20px" }}>
          <TableContainer
            size="small"
            sx={{
              boxShadow: `0.1px 0.1px 2px ${theme.palette.primary.main}`,
            }}
          >
            <Typography
              sx={{
                padding: "3px",
                margin: "15px",
                //backgroundColor: theme.palette.primary.main,
                //color: theme.palette.common.white,
                letterSpacing: "3px",
                fontSize: userFontSize,
                fontFamily: userFont,
              }}
            >
              Your most recent expenses:
            </Typography>
            <Table size="small" aria-label="a dense table">
              <TableHead className="tableHeader">
                <TableRow>
                  <StyledTableCell
                    sx={{ fontFamily: userFont, fontSize: userFontSize }}
                  >
                    Price
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ fontFamily: userFont, fontSize: userFontSize }}
                    align="right"
                  >
                    Category
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ fontFamily: userFont, fontSize: userFontSize }}
                    align="right"
                  >
                    Date
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lastThreeExpenses.map((row) => (
                  <TableRow
                    key={uuid()}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
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
        </Box>
      )}
    </>
  );
}
