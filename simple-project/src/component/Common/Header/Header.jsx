import Nav from "../Nav/Nav";
import { StyledHeader, LogoText } from "./Header.style";
import {Link} from "react-router-dom";

const Header = () => {
  return ( 
    <>
      <StyledHeader> 
        <Link to = "/" style={{ textDecoration: "none" }}>
          <LogoText>CineWave</LogoText>
        </Link>
      <Nav />
      </StyledHeader>
    </>
  );
};
export default Header;
