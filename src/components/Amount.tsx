import styled from "styled-components";

export const AmountName = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 24px;
`;
export const Amount = styled.p`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.cyan.strong};
`;
export const Unit = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.cyan.grayish};
`;
