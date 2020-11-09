import React from "react";
import { H1, Button } from "./elements";

const MostImportantIssue = ({ onClickIssue }) => {
  return (
    <div>
      <H1 style={{ marginBottom: 30 }}>
        What’s the most important issue to you?
      </H1>
      <Button onClick={() => onClickIssue("Climate Change")}>
        Climate Change
      </Button>
      <Button onClick={() => onClickIssue("Homelessness")}>Homelessness</Button>
      <Button onClick={() => onClickIssue("Equality")}>Equality</Button>
      <Button onClick={() => onClickIssue("Sustainability")}>
        Sustainability
      </Button>
      <Button onClick={() => onClickIssue("Financial Responsibility")}>
        Financial Responsibility
      </Button>
      <Button onClick={() => onClickIssue("Healthcare")}>Healthcare</Button>
      <Button onClick={() => onClickIssue("Human Rights")}>Human Rights</Button>
    </div>
  );
};

export default MostImportantIssue;
