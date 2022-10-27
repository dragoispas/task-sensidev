import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAllCharacters, retrieveMoreCharacters } from "../app/charactersSlice";
import { AppDispatch, RootState } from "../app/store";
import { useDebounce } from "../app/debounce";
import { CharacterCard } from "../components/CharacterCard";
import { SearchBar } from "../components/SearchBar";
import { Button, Stack, Text } from "../components/common";

const CharacterGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1560px;
    gap: 15px;
    margin: 20px auto;
`;

export const CharacterGridPage = () => {
    const dispatch = useDispatch();
    const { characters, page, maxPage, errorMessage } = useSelector((state: RootState) => state.characters);

    const [searchInput, setSearchInput] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const debouncedSearchInput = useDebounce(searchInput, 300);
    
    useEffect(() => {
        (dispatch as AppDispatch)(retrieveAllCharacters({ name: debouncedSearchInput, status: status }));
    }, [debouncedSearchInput, status, dispatch]);

    return (
        <Stack justifyContent="center" alignItems="center">
            <img style={{margin: '10px auto'}} src="images/Rick&Morty.png" alt='.'></img>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} status={status} setStatus={setStatus}/>
            <CharacterGrid>
                {
                    !errorMessage ? (
                        characters.length > 0 ?
                            characters.map((character) => (
                                <CharacterCard key={character.id} id={character.id} name={character.name.toUpperCase()} status={character.status} image={character.image}/>
                            )) :
                            (
                                <Text>What you are looking for does not exist in this universe!</Text>
                            )
                    ) : (
                        <Text>Error: {errorMessage}</Text>
                    )
                }
            </CharacterGrid>
            { 
                page === maxPage || characters.length === 0 ? null : (
                    <Button onClick={() => {(dispatch as AppDispatch)(retrieveMoreCharacters({ name: debouncedSearchInput, status: status, page: page + 1 }));}}>LOAD MORE</Button>
                )
            }
        </Stack>
    );
}