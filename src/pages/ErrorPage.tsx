import { useNavigate } from "react-router-dom";
import { Button, Stack, Text } from "../components/common";

export const ErrorPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <Stack style={{margin: "100px auto"}} justifyContent="center" alignItems="center" gap="20px">
            <Stack orientation="row" justifyContent="center" alignItems="center">
                <Text fontSize="300px">4</Text>
                <img style={{width: "400px"}} src="images/404.png" alt='.'></img>
                <Text fontSize="300px">4</Text>
            </Stack>
            <Text fontSize="24px">This page doesn't exist in this universe. </Text>
            <Button onClick={handleClick}>TAKE ME BACK</Button>
        </Stack>
    );
}