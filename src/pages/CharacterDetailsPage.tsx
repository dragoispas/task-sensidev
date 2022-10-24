import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCharacterToMap } from "../app/charactersSlice";
import { Character, Episode } from "../app/domain";
import { RootState } from "../app/store";
import { CharacterDetails } from "../components/CharacterDetails";
import { getCharacter, getEpisodes } from "../app/api";


export const CharacterDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { charactersMap } = useSelector((state: RootState) => state.characters);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        if (!id) {
            return;
        }

        /* Only request the character from the API if it's not already present in Redux (from a previous interaction). */
        if (!charactersMap[parseInt(id)]) {
            getCharacter(parseInt(id)).then((result) => {
                dispatch(addCharacterToMap(result));
            });
        }
    }, [id, charactersMap, dispatch]);

    useEffect(() => {
        if (id && charactersMap[parseInt(id)]) {
            const episodeIds = charactersMap[parseInt(id)].episode.map(episodeUrl => {
                const segments = episodeUrl.split('/');
                return parseInt(segments[segments.length - 1]);
            });

            getEpisodes(episodeIds).then(_episodes => setEpisodes(_episodes))
        }
    }, [id, charactersMap]);

    if (!id) {
        return <div>loading</div>;
    }

    const character: Character = charactersMap[parseInt(id)] ?? null;

    return (
        <>
        {
            character ? 
            (
                <CharacterDetails character={character} episodes={episodes}/>
            ) : 
                <div style={{color:"#fff", fontWeight: "bold", fontSize: "24px"}}> Character with id { id } not found</div>
            }
        </>
    );
}