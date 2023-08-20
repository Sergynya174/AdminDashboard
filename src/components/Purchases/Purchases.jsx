import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import "./Purchases.scss";

const rows = [
  {
    id: 1,
    user: "Вася",
    product: "Капучино",
    price: "200",
    date: "2023-08-12 19:46:19",
  },
  {
    id: 2,
    user: "Кристина",
    product: "Латте",
    price: "250",
    date: "2023-08-12 19:46:19",
  },
  {
    id: 3,
    user: "Артем",
    product: "Американо",
    price: "300",
    date: "2023-08-12 19:46:19",
  },
  {
    id: 4,
    user: "Галина",
    product: "Капучино",
    price: "200",
    date: "2023-08-12 19:46:19",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EFF6FF",
    color: "#475569",
    fontSize: 16,
    fontWeight: 600,
  },
}));

export const Purchases = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      <TableContainer component={Paper} className="purchases">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Пользователь</StyledTableCell>
              <StyledTableCell>Кофе</StyledTableCell>
              <StyledTableCell>Цена</StyledTableCell>
              <StyledTableCell>Дата покупки</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "строк на странице",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};
