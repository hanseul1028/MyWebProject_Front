import styled from "styled-components";
export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  padding: 1rem 0;
  height: 50px;
  
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  width: 100px;
  font-weight: 600;
  text-align: center;
  color: rgb(242554, 255, 255);
  padding: 5px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    color: skyblue;
  }
`;