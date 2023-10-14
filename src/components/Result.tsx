import styled from "styled-components";
import { AmountName, Unit, Amount } from "./Amount";
import { ResetButton } from "./ResetButton";

interface Props {
  showTip: boolean;
  showTotal: boolean;
  tipAmount: string | undefined;
  totalPerPerson: string | undefined;
}

export default function Results(props: Props) {
  const { showTip, showTotal, tipAmount, totalPerPerson } = props;
  return (
    <ResultContainer>
      <AmountContainer style={{ marginBottom: "25px" }}>
        <div>
          <AmountName> Tip Amount</AmountName> <Unit>/ person:</Unit>
        </div>
        <Amount>{showTip ? tipAmount : "$0.00"}</Amount>
      </AmountContainer>
      <AmountContainer>
        <div>
          <AmountName> Total</AmountName> <Unit>/ person:</Unit>
        </div>
        <Amount>{showTotal ? totalPerPerson : "$0.00"}</Amount>
      </AmountContainer>
      <ResetButton>Reset</ResetButton>
    </ResultContainer>
  );
}

const ResultContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cyan.dark};
  width: 100%;
  border-radius: 15px;
  padding: 39px 22px 24px 24px;
  @media screen and (min-width: 1200px) {
    width: 50%;
    display: flex;
    padding: 40px;
    box-sizing: content-box;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
