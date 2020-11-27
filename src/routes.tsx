import React, {PropsWithChildren} from "react";
import HomePage from "./pages/Home";
import EmptyPage from "./pages/EmptyPage";
import PokedexPage from "./pages/Pokedex";
import Pokemon, {PokemonProps} from "./pages/Pokemon";

interface IGeneralMenu {
    title: string
    link: LinkEnum,
    component: (props: PropsWithChildren<any>) => JSX.Element
}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documents',
    POKEMON = '/pokedex/:id'
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: 'Home',
        link: LinkEnum.HOME,
        component: () => <HomePage />
    },
    {
        title: 'Pokédex',
        link: LinkEnum.POKEDEX,
        component: () => <PokedexPage />
    },
    {
        title: 'Legendaries',
        link: LinkEnum.LEGENDARIES,
        component: () => <EmptyPage title="Legendaries"/>
    },
    {
        title: 'Documentation',
        link: LinkEnum.DOCUMENTATION,
        component: () => <EmptyPage title="Documentation"/>
    }
]

interface IAccMenu {
    [n: string]: (props: PropsWithChildren<any>) => JSX.Element
}

const SECOND_ROUTES: IGeneralMenu[] = [{
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component:(({id}: PokemonProps) => <Pokemon id={id} />)
}]

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item:IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;