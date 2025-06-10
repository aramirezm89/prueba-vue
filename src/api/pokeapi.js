import pokeApi from './index'

export const getPokemons = async () => {
  try {
    const res = await pokeApi.get('/pokemon?limit=3')
    return res
  } catch (error) {
    console.log(error)
  }
}
