import styled from "@emotion/styled";

export const Text = styled.div<{fontSize?: string, color?: string}>`
    font-size: ${props => props.fontSize ?? '25px'};
    font-weight: bold;
    color: ${props => props.color ?? '#fff'};
    margin: 20px;
`;

export const Stack = styled.div<{gap?:string, justifyContent?: string, alignItems?: string, orientation?: string}>`
    display: flex;
    gap: ${props => props.gap};
    justify-content: ${props => props.justifyContent ?? 'flex-start'};
    align-items: ${props => props.alignItems ?? 'flex-start'};
    flex-direction: ${props => props.orientation ?? 'column'};
`;

export const Divider = styled.div<{height?: string, width?: string, color?: string}>`
    width: ${props => props.width ?? "2px"};
    height: ${props => props.height ?? "90%"};
    background: ${props => props.color ?? "black"};
`;

export const Button = styled.div`
    font-weight: bold;
    font-size: 22px;
    color: #fff;
    cursor: pointer;

    background: rgba(0,0,0,0.5);
    padding: 10px 25px;
    border: 2px solid #abdb85;
    border-radius: 50px;
`;