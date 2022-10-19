import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAllCharacters } from "../../app/charactersSlice";
import { AppDispatch, RootState } from "../../app/store";

export const CharacterGridPage = () => {
    const dispatch = useDispatch();
    const { characters } = useSelector((state: RootState) => state.characters);
    
    useEffect(() => {
        (dispatch as AppDispatch)(retrieveAllCharacters());
    }, []);

    return (
        <div>
            {
                characters.map((character) => (
                    <div>
                        <h3>{character.name}</h3>
                    </div>
                ))
            }
        </div>
    );
}