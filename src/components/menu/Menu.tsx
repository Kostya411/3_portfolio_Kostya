import {MenuStyled} from "./Menu.styled";

export const Menu = () => {
    return (
        <MenuStyled>
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
            </ul>
        </MenuStyled>
    );
};

