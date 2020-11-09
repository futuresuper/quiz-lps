import React from "react";
import { H1, Button } from "./elements";

const TenMillion = ({ onClickTen }) => {
  return (
    <div>
      <H1 style={{ marginBottom: 30 }}>
        You suddenly have $10 million to spend. You:
      </H1>

      <Button onClick={() => onClickTen("Donate")}>
        Donate it to an eco foundation
      </Button>
      <Button onClick={() => onClickTen("Property")}>Buy some property</Button>
      <Button onClick={() => onClickTen("Invest")}>
        Invest it in an impactful business
      </Button>
      <Button onClick={() => onClickTen("Friends")}>
        Divide it between your friends
      </Button>
      <Button onClick={() => onClickTen("Womens Shelter")}>
        Build a women’s/homeless shelter
      </Button>
      <Button onClick={() => onClickTen("CSIRO")}>Give it to the CSIRO</Button>
    </div>
  );
};

export default TenMillion;
