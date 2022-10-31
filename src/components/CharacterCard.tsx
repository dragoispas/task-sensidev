import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Stack } from "./common";

const Card = styled.div`
    height: 150px;
    width: 250px;
    background: #b3c1cc;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid grey;
    padding: 0px 10px;
    background-image: url("./images/card.jpg");
    background-size: 265px 150px;
    cursor: pointer;

    &:hover{
        transform: translate(0px, -3px);
        transition-duration: 0.1s;
        // box-shadow: 0 0px 10px limegreen;
    }
`;

const CardImage = styled.img`
    height: 100px;
    width: 100px;
    border: 2px solid black;
`;

const CardText = styled.div<{fontSize?:string}>`
    width: 125px;
    word-wrap: break-word;
    font-size: ${props => props.fontSize};
`;

interface Props {
    name: string;
    status: string;
    image: string;
    id: number;
}

export const CharacterCard: React.FC<Props> = ({name, status, image, id}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/character/${id}`);
    };

    return (
        <Card onClick={handleClick}>
            <CardImage src={image} alt='.' data-testid="card-image" />
            <Stack gap="10px">
                <CardText data-testid="card-name">{name}</CardText>
                <CardText fontSize="14px">Status: {status}</CardText>
            </Stack>
        </Card>
    )
}