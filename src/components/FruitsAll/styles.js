import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import MuiTypography from "@mui/material/Typography";
import MuiTableCell, { tableCellClasses } from "@mui/material/TableCell";
import MuiTableRow from "@mui/material/TableRow";

export const FruitsAllContainer = styled.div`
  margin: 20px 10px;
`;

export const Typography = styled(MuiTypography)`
  margin: 0 0 20px 20px;
`;

export const TableCell = muiStyled(MuiTableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const TableRow = muiStyled(MuiTableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.primary.veryLight,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
