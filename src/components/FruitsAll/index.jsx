import { FruitsAllContainer, TableCell, TableRow, Typography } from "./styles";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";

const FruitsAll = ({ fruits }) => {
  return (
    <FruitsAllContainer>
      <Typography variant="h6" component="h2" color="text.secondary">
        Todas as movimentações:
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fruta</TableCell>
              <TableCell align="center">Quantidade (un)</TableCell>
              <TableCell align="center">Preço (R$)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fruits.map((fruit, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {fruit.name}
                </TableCell>
                <TableCell align="center">{fruit.quantity}</TableCell>
                <TableCell align="center">{fruit.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </FruitsAllContainer>
  );
};

export default FruitsAll;
