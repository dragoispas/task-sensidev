import styled from "@emotion/styled";
import { Divider } from "./common";

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: rgba(0,0,0,0.5);
    width: 370px;
    padding: 5px 10px;
    border-radius: 25px;
    border: 2px solid #abdb85;
    margin: 10px auto;    
`;

const SearchInput = styled.input`
    width: 200px;
    height: 30px;
    font-size: 20px;
    background: inherit;
    outline: none;
    border: none;
    font-weight: bold;
    color: #fff;
    margin: 0px 10px;
`;

const StatusSelect = styled.select`
    height: 36px;
    font-size: 20px;
    background: inherit;
    outline: none;
    border: none;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin: 0px 10px;

    option{
        background: black;
    }
`;

interface Props {
    searchInput: string;
    setSearchInput: (targetValue: string) => void;
    status: string;
    setStatus: (targetValue: string) => void;
}

export const SearchBar:React.FC<Props> = ({searchInput, setSearchInput, status, setStatus}) => {
    return (
        <SearchBarContainer>
            <SearchInput placeholder="Name" type='text' value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            <Divider width="2px" height="36px" color="#abdb85"/>
            <StatusSelect value={status} onChange={e => setStatus(e.target.value)}>
                <option value="">all</option>
                <option value="alive">alive</option>
                <option value="dead">dead</option>
                <option value="unknown">unknown</option>
            </StatusSelect>
        </SearchBarContainer>
    )
}