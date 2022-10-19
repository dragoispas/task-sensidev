import { useParams } from "react-router-dom";

export const CharacterDetailsPage = () => {
    const { id } = useParams();

    return <div>{id}</div>;
}