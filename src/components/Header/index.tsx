import React from "react";
import {A} from "hookrouter";
import cn from 'classnames';
import {ReactComponent as PokemonLogoSvg} from "./assets/Logo.svg";

import s from './Header.module.scss';

interface IMenu {
    id: number
    value: string
    link: string
}
const MENU: IMenu[] = [
    {
        id: 1,
        value: 'Home',
        link: '/',
    },
    {
        id: 2,
        value: 'Pokédex',
        link: '/pokedex',
    },
    {
        id: 3,
        value: 'Legendaries',
        link: '/legendaries',
    },
    {
        id: 4,
        value: 'Documentation',
        link: '/documents',
    }
]

const Header = () => {
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.pokemonLogo}>
                    <PokemonLogoSvg />
                </div>
                <div className={s.menuWrap}>
                    {
                        MENU.map(({value, link, id}) => (
                            <A key={id} href={link}
                               className={cn(s.menuLink, {[s.activeLink]: id === 1,})}>
                                { value } </A>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;