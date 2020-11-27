import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import PokemonCard from "../../components/PokemonCard";
import useData from "../../hook/getData";
import {IPokemons, PokemonsRequest} from "../../interface/pokemons";
import useDebounce from "../../hook/useDebounce";

import s from "./Pokedex.module.scss";

interface IQuery {
    name?: string
}


const PokedexPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({}); // query created

    const debouncedValue = useDebounce(searchValue, 500);

    const {
        data,
        isLoading,
        isError
    } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

    useEffect(()=> {
        console.log ("#####: debounceValue", debouncedValue);
    },[debouncedValue]);


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setQuery((state: IQuery) => ({
            ...state,
            name: e.target.value,
        }))
    }


    if (isError) {
        return <div>There is an error</div>
    }
    return (
        <>
            <Layout className={s.root}>
                <Heading className={s.title} >
                    {!isLoading && data && data.total} Pokemons for you to choose your favorite
                </Heading>
                <div>
                    {!isLoading && data && data.pokemons.map((item: PokemonsRequest) => <div>{item.name}</div>)}
                </div>
                <div>
                    <input type="text" value={searchValue} onChange={handleSearchChange}/>
                </div>
            </Layout>
            <PokemonCard />
        </>
    )
}

export default PokedexPage;