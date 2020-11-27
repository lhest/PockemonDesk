import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe('getUrlWithParamsConfig', () => {
    test('Should accept two arguments "getPokemons" and the empty object, and as the outcome we had object with  fields pathname, protocol, host and empty query', () => {
        const url = getUrlWithParamsConfig('getPokemons', {});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {}
        })
    })
    test('Should accept two arguments "getPokemons" and { name: "Pikachu"}, and as the outcome we had object with the fields pathname, protocol, host and query, where the name is Pikachu', () => {
        const url = getUrlWithParamsConfig('getPokemons', {name: 'Pikachu'});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {name: 'Pikachu'}
        })
    })
    test('Should accept two arguments "getPokemon" and the object with id = 25, and as the outcome we had object with  fields pathname, protocol, host and empty query', () => {
        const url = getUrlWithParamsConfig('getPokemon', {id: 25});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemon/25',
            query: {}
        })
    })
});