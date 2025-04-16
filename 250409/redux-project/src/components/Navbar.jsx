import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 240px;
  margin-bottom: 20px;
  & img {
    width: 100%;
  }
`;

const MenuArea = styled.ul`
  display: flex;
  gap: 20px;
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 18px;
  position: absolute;
  top: 20px;
  right: 30px;
`;

const SearchBox = styled.div`
  & > input {
    width: 140px;
    border: none;
    border-bottom: 1px solid var(--dark-color);
    margin-right: 20px;
    padding: 4px 6px;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  & > span {
    width: 62px;
    padding-top: 4px;
  }
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  cursor: pointer;
`;

const SideMenu = styled.div`
  width: ${({ width }) => `${width}px`};
  height: 100%;
  opacity: ${({ opacity }) => opacity};
  position: fixed;
  top: 0;
  left: 0;
  background: var(--dark-color);
  color: var(--light-color);
  z-index: 1;
  transition: all 0.3s;
  overflow: hidden;
  & > svg {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 22px;
    cursor: pointer;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 1.8rem;
    padding: 70px 40px;
    & > li {
      cursor: pointer;
    }
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "베스트",
  "신제품",
  "이벤트",
  "슈퍼세일",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();

  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <Container>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://i.namu.wiki/i/inCg8G9LcRyIFkRGNP1nuV_-0GVljbucT8XCPSOD3YixelXKFnp4U3t-huEsLFjf0PkGn5gSeb55laQMuumYIg.webp"
            alt="musinsa"
          />
        </Link>
      </Logo>
      <MenuArea className="menu">
        {menuList.map((menu, index) => (
          <li key={index}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </MenuArea>
      <HeaderTop>
        {authenticate ? (
          <LoginAuth>
            <FontAwesomeIcon icon={faUser} />
            <span
              onClick={() => {
                setAuthenticate(false);
                navigate("/");
              }}
            >
              로그아웃
            </span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        )}
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="상품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
      </HeaderTop>
      <SideMenu width={width} opacity={opacity}>
        <FontAwesomeIcon
          icon={faClose}
          onClick={() => {
            setWidth(0);
            setOpacity(0);
          }}
        />
        <ul className="side-menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </SideMenu>
      <ToggleButton>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setWidth(250);
            setOpacity(1);
          }}
        />
      </ToggleButton>
    </Container>
  );
};

export default Navbar;
