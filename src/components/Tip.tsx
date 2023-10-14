import styled from "styled-components";
import { Input } from "./Input";
import { Label } from "./Label";

interface Props {
  setTip: React.Dispatch<React.SetStateAction<number | undefined>>;
  tip: number | undefined;
}
export default function Tip(props: Props) {
  const { tip, setTip } = props;
  return (
    <>
      <div>
        <Label>Select Tip %</Label>
        <ButtonContainer>
          {[5, 10, 15, 25, 50].map((percentage) => (
            <TipButton
              isActive={tip === percentage / 100}
              onClick={() => {
                setTip(percentage / 100);
              }}
            >
              {percentage}%
            </TipButton>
          ))}

          <Input
            style={{ width: "calc(50% - 25px)" }}
            placeholder="Custom"
            type="number"
            min={0}
            value={tip && tip * 100}
            onChange={(e) => {
              if (e.target.value.length < 4) {
                setTip(e.target.valueAsNumber / 100);
              }
            }}
          />
        </ButtonContainer>
      </div>
    </>
  );
}

interface TipButtonProps {
  isActive: boolean;
}
const TipButton = styled.button<TipButtonProps>`
  all: unset;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.cyan.strong : theme.colors.cyan.dark};
  height: 48px;
  min-width: calc(50% - 8px);
  border-radius: 5px;
  text-align: center;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.cyan.dark : theme.colors.white};
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  @media screen and (min-width: 1200px) {
    gap: 10px;
  }
`;
