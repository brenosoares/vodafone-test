import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg'
import { HeaderBarBottom, HeaderBarContent, HeaderBarTop, Nav } from './style'

export const HeaderBar = () => {
  return (
    <HeaderBarContent>
        <HeaderBarTop>
            Enterprise
        </HeaderBarTop>
        <HeaderBarBottom>
            <Nav>
                <ul>
                    <li><img src={Logo} alt="Vodafone" width={48} height={48}/></li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/devices">Devices</Link>
                    </li>
                </ul>
            </Nav>
        </HeaderBarBottom>
    </HeaderBarContent>
  )
}
