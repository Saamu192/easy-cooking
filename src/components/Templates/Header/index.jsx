import { HeaderContainer } from "./style";
import { useContext } from "react";
import { GlobalThemeContext } from "../../../Providers/models/theme/theme";
import logoBlack from '../../../assets/logoBlack.svg'
import logoWhite from '../../../assets/logoWhite.svg'
import {SiCodechef} from 'react-icons/si'


export const Header = () => {

  const {currentTheme} = useContext(GlobalThemeContext)
  return (
    <HeaderContainer>
        <div className="Header">

                { currentTheme === "light"? (<figure><img src={logoBlack} alt="easy Cooking"/></figure>) : (<figure><img src={logoWhite} alt="easy Cooking"/></figure>) }
                <button className="UserButton"><SiCodechef/></button>
    
        </div>
    </HeaderContainer>
  );
}

