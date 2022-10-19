
const BASE_URL = 'https://rickandmortyapi.com/api';

export type CharacterFilters = { name?: string; status?: string; };

export async function getAllCharacters({ name, status }: CharacterFilters = {}) {
    const params = new URLSearchParams({
        ...(name ? { name } : {}),
        ...(status ? { status } : {}),
    });

    const queryString = Array.from(params).length > 0 ? `?${params}` : '';

    try {
        const response = await fetch(`${BASE_URL}/character${queryString}`, {
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

