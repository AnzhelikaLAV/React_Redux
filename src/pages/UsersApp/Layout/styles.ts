import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const LayoutWrapper = styled.div`//общая обертка
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: fit-content; //чтобы контент подстроился под логотип и ссылки
  background-color: #2f5a6e;
  color: white;
`;

export const HeaderLogoContainer = styled.div`//логотип обертка
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavContainer = styled.nav` // home users
  display: flex;
  gap: 10px;
`;

export const Main = styled.main`//обертка
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  background-color: #2f5a6e;
  color: white;
`;

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`//навигационные ссылки 
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const StyledLink = styled(Link)`//обычные ссылки
  text-decoration: none;
  font-size: 16px;
  color: white;
`;
