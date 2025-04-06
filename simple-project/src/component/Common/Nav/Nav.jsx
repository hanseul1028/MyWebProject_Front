import { useContext } from "react";
import { StyledNav, NavLink } from "./Nav.style";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";


const Nav = () => {
  const navi = useNavigate();
  // const {auth, logout} = useContext(AuthContext);

  return (
    <StyledNav>
      <NavLink onClick={() => navi("/")}>Home</NavLink>
      <NavLink onClick={ () => navi("/join")}>join</NavLink>
      <NavLink >login</NavLink>
      <NavLink >logout</NavLink>
    {/* {!auth.isAuthenticated ? (
    <>
      <NavLink onClick={() => navi("/join")}>회원가입</NavLink>
      <NavLink onClick={() => navi("/login")}>로그인</NavLink>
    </>
    ) : (
      <>
      <NavLink onClick={() => navi("/info")}>내정보</NavLink>
      <NavLink onClick={logout}>로그아웃</NavLink>
      </>
    )}
    <NavLink onClick={() => navi("/boards")}>게시판</NavLink> */}
    </StyledNav>
  );
};
export default Nav;