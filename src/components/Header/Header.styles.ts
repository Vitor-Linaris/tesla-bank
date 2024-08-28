import styled from "styled-components";
import Colors from "../../theme/theme.color";

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: 1246px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h3`
  font-family: "DM Sans";
  color: ${Colors.brand.brandColorRed};
  font-size: 32px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.96px;
`;

export const HeaderItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const HeaderItem = styled.li`
  list-style: none;
  padding: 8px;
`;

export const HeaderItemLink = styled.a`
  color: ${Colors.dark.dark};
  font-size: 16px;
  font-weight: 500;
  line-height: 170%;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const BtnLink = styled.a`
  color: ${Colors.brand.brandColorRed};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */
  letter-spacing: -0.54px;
`;

export const BtnPrimary = styled.a`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */
`;
