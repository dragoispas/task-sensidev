
const BASE_URL = 'https://rickandmortyapi.com/api';

export type CharacterFilters = { name?: string; status?: string; page?: number };

export async function getAllCharacters({ name, status, page }: CharacterFilters = {}) {
    const params = new URLSearchParams({
        ...(name ? { name } : {}),
        ...(status ? { status } : {}),
        ...(page ? { page: page.toString() } : {}),
    });

    const queryString = Array.from(params).length > 0 ? `?${params}` : '';

    try {
        const response = await fetch(`${BASE_URL}/character${queryString}`, {
            method: 'GET',
        });

        if (response.status === 404) {
            return [];
        }

        return response.json();
    } catch (err) {
        return null;
    }
}

//page=3&
export async function getCharacter(characterId: number) {
    try {
        const response = await fetch(`${BASE_URL}/character/${characterId}`, {
            method: 'GET',
        });

        return response.json();
    } catch (err) {
        return null;
    }
}

export async function getEpisodes(ids: number[]) {
    try {

        const response = await fetch(`${BASE_URL}/episode/${ids.join(',')}`, {
            method: 'GET',
        });

        let result = await response.json();

        if (!Array.isArray(result)) {
            result = [result];
        }

        return result;
    } catch (err) {
        return [];
    }
}

