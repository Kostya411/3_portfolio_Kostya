import {Icon} from "../../../../components/icon/Icon.tsx";
import {LogoName} from "./LogoName.styled.tsx";

export const Logo = () => {
    return (
        <a href="">
            <Icon iconId={'logo'} width={'16'} height={'16'} viewBox={'0 0 16 16'} />
            <LogoName>Vahid Navazan</LogoName>
        </a>
    );
};

