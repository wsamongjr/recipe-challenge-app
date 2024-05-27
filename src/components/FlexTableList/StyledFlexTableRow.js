import styled from "styled-components";

const StyledFlexTableRow = styled.div`
    flex-flow: row nowrap;
    width: 100%;
    border-bottom: 1px solid hsl(30, 18%, 87%);

    &:last-child {
        border: 0;
    }

    .row-item {
        display: flex;
    }
`;

export default StyledFlexTableRow;
