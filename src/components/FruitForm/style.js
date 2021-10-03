import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 10px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;

  .inputs {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;

    .inputs {
      width: 19%;
      margin-bottom: unset;
    }

    .inputName {
      width: 30%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: 30%;
  }
`;

export const ButtonsContent = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 49%;
  }
`;
