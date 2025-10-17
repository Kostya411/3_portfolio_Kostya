import {Logo} from "./logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderStyled>
            <Logo/>
            <Menu />
        </HeaderStyled>
    );
};

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #eff37d;
`


