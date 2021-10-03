import { useEffect, useState } from "react";
import {
  FruitsIngressContainer,
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

const getFruitsIngress = (fruits) =>
  fruits.filter((fruit) => fruit.quantity > 0);

const getSumQuantityOfFruits = (fruitsIngress) =>
  fruitsIngress.reduce(
    (total, currentFruit) => total + currentFruit.quantity,
    0
  );

const getSumPriceOfFruits = (fruitsIngress) =>
  fruitsIngress.reduce(
    (total, currentFruit) => total + currentFruit.quantity * currentFruit.price,
    0
  );

const FruitsIngress = ({ fruits }) => {
  const [fruitsIngress, setFruitsIngress] = useState(getFruitsIngress(fruits));

  const [sumQuantityOfFruits, setSumQuantityOfFruits] = useState(
    getSumQuantityOfFruits(fruitsIngress)
  );

  const [sumPriceOfFruits, setSumPriceOfFruits] = useState(
    getSumPriceOfFruits(fruitsIngress)
  );

  useEffect(() => {
    setFruitsIngress(getFruitsIngress(fruits));
  }, [fruits]);

  useEffect(() => {
    setSumQuantityOfFruits(getSumQuantityOfFruits(fruitsIngress));
    setSumPriceOfFruits(getSumPriceOfFruits(fruitsIngress));
  }, [fruitsIngress]);

  return (
    <FruitsIngressContainer>
      <Typography variant="h6" component="h2" color="text.secondary">
        Entradas de frutas:
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
            {fruitsIngress.map((fruit, index) => (
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
                Total de entradas:
              </TableCell>
              <TableCell align="center">{sumQuantityOfFruits}</TableCell>
              <TableCell align="center">{sumPriceOfFruits}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </FruitsIngressContainer>
  );
};

export default FruitsIngress;
