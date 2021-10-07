import { useEffect, useState } from "react";
import {
  ButtonsContainer,
  ButtonsContent,
  FormContainer,
  FormContent,
} from "./style";
import { Button, TextField, Tooltip } from "@mui/material";

const emptyFruit = {
  name: "",
  quantity: "",
  price: "",
};

const FruitForm = ({ fruits, setFruits }) => {
  const [fruit, setFruit] = useState(emptyFruit);

  useEffect(() => {
    setFruit(emptyFruit);
  }, [fruits]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (fruit.name.trim() !== "") {
      const quantity = parseInt(fruit.quantity);
      const price = parseFloat(fruit.price);

      setFruits([...fruits, { ...fruit, quantity, price }]);
    }
  };

  const handleCleanForm = (event) => {
    setFruit(emptyFruit);
  };

  const handleNameChange = (event) => {
    setFruit({ ...fruit, name: event.target.value });
  };

  const handleQuantityChange = (event) => {
    setFruit({ ...fruit, quantity: event.target.value });
  };

  const handlePriceChange = (event) => {
    setFruit({ ...fruit, price: event.target.value });
  };

  return (
    <form onSubmit={handleOnSubmit} noValidate>
      <FormContainer>
        <FormContent>
          <TextField
            className="inputName inputs"
            type="text"
            label="Nome"
            size="small"
            autoFocus
            value={fruit.name}
            onChange={handleNameChange}
          />

          <Tooltip title="Valor negativo representa a saída da fruta" arrow>
            <TextField
              className="inputs"
              type="number"
              label="Quantidade"
              size="small"
              value={fruit.quantity}
              onChange={handleQuantityChange}
            />
          </Tooltip>

          <TextField
            className="inputs"
            type="number"
            label="Valor"
            size="small"
            value={fruit.price}
            onChange={handlePriceChange}
          />

          <ButtonsContainer>
            <ButtonsContent>
              <Button variant="contained" size="medium" type="submit">
                Salvar
              </Button>

              <Button
                variant="contained"
                size="medium"
                color="error"
                onClick={handleCleanForm}
              >
                Limpar
              </Button>
            </ButtonsContent>
          </ButtonsContainer>
        </FormContent>
      </FormContainer>
    </form>
  );
};

export default FruitForm;
