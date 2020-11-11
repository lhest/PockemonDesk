import React from 'react';
import Header from "../../components/Header";

interface PokedexProps {
    title?: string
}
const Pokedex: React.FC<PokedexProps> = ({title}) => {
    return (
        <div>
            <Header />
            <div>
                This is the page for {title}!
            </div>
        </div>
    );
};

export default Pokedex;