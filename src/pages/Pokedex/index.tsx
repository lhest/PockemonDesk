import React, {ChangeEvent, useMemo, useState} from "react";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import PokemonCard from "../../components/PokemonCard";
import useData from "../../hook/getData";

import s from "./Pokedex.module.scss";

 const PokedexPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState({});

    const {
        data,
        isLoading,
        isError
    } = useData('getPokemons', query, [searchValue]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setQuery(() => ({
            ...s,
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
                    {!isLoading && data.total} Pokemons for you to choose your favorite
                </Heading>
                <div>
                    {!isLoading && data.pokemons.map(item => <div>{item.name}</div>)}
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