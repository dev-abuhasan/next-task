```
useEffect(() => {
    const fetchCharacters = async () => {
      const { data } = await axios.get('api');
      const characters: Character[] = data.results;
      setCharacters(characters);
    };
    fetchCharacters();
  }, []);
  ```


```
ComponentName.getInitialProps = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');
  const characters: Character[] = data.results;
  return { characters };
};
```