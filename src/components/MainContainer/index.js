import styled from 'styled-components';

const MainContainer = styled.div`
    width: 60%;
    margin: 5%;
    background-color: hsl(0, 0%, 100%);
    border-radius: 25px;

    .banner {
        width: 100%;
    }

    @media (${(props) => props.theme.mediaQuery.mobile}) {
        width: 100%;
        margin: 0;
        border-radius: 0;
    }
`;

export default MainContainer;
