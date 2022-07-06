import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 25vh;
    background-color: ${props => props.theme.backgroundColorOne};

    box-shadow: 0 25px 15px 0 #c3c3c3 ;
    margin: 0;
    
.Header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%
}





.Header img{
    width: 100%

}

figure{
    display: flex;
    width: 20%;

}


.Header button{

    display: flex;
    justify-content: center;
    align-items: center;
    width: 4vw;
    height: 4vw;
    background-color: ${props => props.theme.colorTwo};
    border: ${props => props.theme.greenOne};
    color: white;
    border-radius: 50%;

    font-size: 40px;

}

svg{
    color: #000;    
}
`;