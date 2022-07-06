import styled from "styled-components";

export const FilterBarContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 100%;

    padding-left: 3vw;

    background-color: ${props => props.theme.backgroundColorOne};
    

.filterBar{
    display: flex;
    border: none;
    justify-content: center;
    width: 100%;


}
.filterBar select{
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 5px 0px 0px 5px;
    background-color: #f9f9f9;

    cursor: pointer;

}
.filterBar input{

    height: 40px;
    width: 500px;
    border: none;
    padding-left: 10px;
    

}
.filterBar button{

    border: none;
    background-color: ${(props) => props.theme.button.backgroundColor};
    color: ${(props) => props.theme.colorTwo};
    height: 40px;
    width: 100px;
    border-radius: 0px 5px 5px 0px;
    

}
`;