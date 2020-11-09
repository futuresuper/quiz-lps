import React from "react";
import { H1, Button } from "./elements";

const Bank = ({ onClickBank }) => {
  return (
    <div>
      <H1 style={{ marginBottom: 30 }}>Pick a bank</H1>
      <Button onClick={() => onClickBank("NAB")}>NAB</Button>
      <Button onClick={() => onClickBank("Commonwealth")}>Commonwealth</Button>
      <Button onClick={() => onClickBank("Westpac")}>Westpac</Button>
      <Button onClick={() => onClickBank("ANZ")}>ANZ</Button>
      <Button onClick={() => onClickBank("ING")}>ING</Button>
      <Button onClick={() => onClickBank("Bendigo")}>Bendigo</Button>
      <Button onClick={() => onClickBank("Bank Australia")}>
        Bank Australia
      </Button>
    </div>
  );
};

export default Bank;
