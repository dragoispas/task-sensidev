import styled from "@emotion/styled";
import { Character, Episode } from "../app/domain";
import { Badge, Stack, Text } from "./common";

export const CharacterBox = styled(Stack)`

    // justify-content: center;
    background: rgba(0,0,0,0.8);
    width: 600px;
    min-height: 900px;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #abdb85;
    margin: 10px auto;
    
    li {
        list-style-type: none;
    }
`;

export const CharacterImageContainer = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    box-shadow: 0 0 20px #abdb85;
    overflow: hidden;
    transition: 0.2s;

    &:hover{
        box-shadow: 0 0px 23px #abdb85;
    }
`;

export const CharacterImage = styled.img`
    transform: scale(1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.2);
    }
`;

export const CharacterDetails = ({ character, episodes }: { character: Character, episodes: Episode[] }) => (
    <CharacterBox justifyContent="center" alignItems="center">
        <Text>{ character.name.toUpperCase() }</Text>
        <CharacterImageContainer>
            <CharacterImage src={character.image} alt='.'/>
        </CharacterImageContainer>

        <ol>
            <li><Text>Status: { character.status }</Text></li>
            <li><Text>Species: { character.species }</Text></li>
            <li>
                <Stack orientation="row" alignItems="center">
                    <Text>Gender: </Text>
                    <Badge color={character.gender === 'Female' ? 'rgba(255, 0, 126, 0.43)' : 'rgba(0, 0, 255, 0.5)'}>{ character.gender }</Badge>
                </Stack>
            </li>
            <li><Text>Origin: { character.origin.name }</Text></li>
            <li><Text>Location: { character.location.name }</Text></li>
            <li>
                <Text>Episodes</Text>

                <ul>
                    {
                        episodes.map(episode => (
                            <li key={ episode.id}><Text>{ episode.episode }: { episode.name }</Text></li>
                        ))
                    }
                </ul>
            </li>
        </ol>
    </CharacterBox>
);