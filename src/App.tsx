import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet } from "react-helmet";
import { defaultTheme } from "./themes/defaultTheme";
import { Input } from "./components/Input";
import Logo from "./assets/images/logo.svg";
import { Label } from "./components/Label";
import Tip from "./components/Tip";
import Results from "./components/Result";

export default function Calculator() {
  const [bill, setbill] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);

  const greenLightStatus =
    bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = greenLightStatus
    ? ((bill * tip) / people).toFixed(2)
    : undefined;
  const totalPerPerson = greenLightStatus
    ? ((bill * (1 + tip)) / people).toFixed(2)
    : undefined;
  const showTip =
    greenLightStatus && !(tipAmount === "NaN" || tipAmount === "Infinity");
  const showTotal =
    greenLightStatus &&
    !(totalPerPerson === "NaN" || totalPerPerson === "Infinity");
  const [peopleError, setPeopleError] = useState(false);

  useEffect(() => {
    if (people === 0) {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }
  }, [people]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Image src={Logo} />
        <CalculatorContainer>
          <InputsContainer>
            <Label> Bill</Label>
            <InputWithMargin
              icontype="bill"
              placeholder="0"
              type="number"
              min={0}
              value={bill}
              onChange={(e) => {
                if (e.target.value.length < 9) {
                  setbill(e.target.valueAsNumber);
                }
              }}
            />

            <Tip tip={tip} setTip={setTip} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Label>People</Label>
              <div style={{ color: "red" }}>
                {peopleError ? "Can't be zero" : ""}
              </div>
            </div>
            <InputWithMargin
              placeholder="0"
              type="number"
              icontype="person"
              peopleError={peopleError}
              min={0}
              value={people}
              onKeyDown={(e) => {
                if (e.key === ".") {
                  e.preventDefault();
                }
              }}
              onChange={(e) => {
                if (e.target.value.length < 9) {
                  setPeople(Number.parseInt(e.target.valueAsNumber.toFixed()));
                }
              }}
            />
          </InputsContainer>

          <Results
            showTip={showTip}
            showTotal={showTotal}
            tipAmount={tipAmount}
            totalPerPerson={totalPerPerson}
          />
        </CalculatorContainer>
      </Container>
    </ThemeProvider>
  );
}

const InputsContainer = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  padding: 50px 0 40px 0;
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  width: 100%;
  @media screen and (min-width: 1200px) {
    padding: 32px;
    flex-direction: row;
    gap: 2rem;
    height: 100%;
    border-radius: 25px;
    box-shadow: 0px 32px 43px rgb(79 166 175 / 20%);
    margin-top: 20px;
  }
`;

const InputWithMargin = styled(Input)`
  margin-bottom: 32px;
`;
