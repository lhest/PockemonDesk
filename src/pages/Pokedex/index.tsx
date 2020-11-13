import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import PokemonCard from "../../components/PokemonCard";

import s from "./Pokedex.module.scss";


const usePokemons = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
                const result = await response.json();

                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getPokemons();
    }, []);
    return {
        data,
        isLoading,
        isError
    }
}

 const PokedexPage = () => {
    const {
        data,
        isLoading,
        isError
    } = usePokemons();

    if (isLoading) {
        return <div>Loading ...</div>
    }
    if (isError) {
        return <div>There is an error</div>
    }
    return (
        <>
            <Layout className={s.root}>
                <Heading className={s.title} >
                    {data.total} Pokemons for you to choose your favorite
                </Heading>
                <div>
                    {data.pokemons.map(item => <div>{item.name}</div>)}
                </div>
            </Layout>
            <PokemonCard />
        </>
    )
}

export default PokedexPage;