import styled from 'styled-components';

const StyledFlexRowItem = styled.div`
    flex: 1;
    font-size: 14px;
    align-items: center;
    transition: all 0.15s ease-in-out;
    margin: 15px;
    padding-left: 15px;

    @media (${(props) => props.theme.mediaQuery.mobile}) {
        padding-left: 10px;
    }
`;

export default StyledFlexRowItem;
