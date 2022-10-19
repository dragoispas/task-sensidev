
const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
    try {
        const response = await fetch(`${BASE_URL}/character`, {
            method: 'GET',
        });

        return response.json();
    } catch (err) {}
}

export async function getCharacter(characterId: number) {
    try {
        const response = await fetch(`${BASE_URL}/character/${characterId}`, {
            method: 'GET',
        });

        return response.json();
    } catch (err) {}
}

