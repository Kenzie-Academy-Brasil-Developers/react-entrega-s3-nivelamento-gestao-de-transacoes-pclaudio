import { useEffect, useState } from "react";
import {
  FruitsOutgressContainer,
  TableCell,
  TableRow,
  Typography,
} from "./styles";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";

const getFruitsOutgress = (fruits) =>
  fruits.filter((fruit) => fruit.quantity < 0);

const getSumQuantityOfFruits = (fruitsOutgress) =>
  fruitsOutgress.reduce(
    (total, currentFruit) => total + currentFruit.quantity,
    0
  );

const getSumPriceOfFruits = (fruitsOutgress) =>
  fruitsOutgress.reduce(
    (total, currentFruit) =>
      total + Math.abs(currentFruit.quantity) * currentFruit.price,
    0
  );

const FruitsOutgress = ({ fruits }) => {
  const [fruitsOutgress, setFruitsOutgress] = useState(
    getFruitsOutgress(fruits)
  );

  const [sumQuantityOfFruits, setSumQuantityOfFruits] = useState(
    getSumQuantityOfFruits(fruitsOutgress)
  );

  const [sumPriceOfFruits, setSumPriceOfFruits] = useState(
    getSumPriceOfFruits(fruitsOutgress)
  );

  useEffect(() => {
    setFruitsOutgress(getFruitsOutgress(fruits));
  }, [fruits]);

  useEffect(() => {
    setSumQuantityOfFruits(getSumQuantityOfFruits(fruitsOutgress));
    setSumPriceOfFruits(getSumPriceOfFruits(fruitsOutgress));
  }, [fruitsOutgress]);

  return (
    <FruitsOutgressContainer>
      <Typography variant="h6" component="h2" color="text.secondary">
        Saídas de frutas:
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
            {fruitsOutgress.map((fruit, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {fruit.name}
                </TableCell>
                <TableCell align="center">{fruit.quantity}</TableCell>
                <TableCell align="center">{fruit.price}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell align="right" colSpan={1}>
                Total de saídas:
              </TableCell>
              <TableCell align="center">{sumQuantityOfFruits}</TableCell>
              <TableCell align="center">{sumPriceOfFruits}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </FruitsOutgressContainer>
  );
};

export default FruitsOutgress;
