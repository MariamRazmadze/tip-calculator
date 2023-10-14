import styled from "styled-components";

export const ResetButton = styled.button`
  all: unset;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.cyan.strong};
  width: 100%;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.cyan.dark};
  text-transform: uppercase;
  margin-top: 25px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.cyan.lightGrayish};
  }

  @media screen and (min-width: 1200px) {
    margin-top: 52%;
  }
`;
