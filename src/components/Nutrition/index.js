import styled from "styled-components";
import H1 from "components/H1";
import Wrapper from "./Wrapper";
import TableList from "components/FlexTableList";
import TableRow from "components/FlexTableList/row";
import StyledFlexRowItem from "components/FlexTableList/StyledFlexRowItem";

const nutritions = [
    {
        name: "Calories",
        value: "277kcal",
    },
    {
        name: "Carbs",
        value: "0g",
    },
    {
        name: "Protein",
        value: "20g",
    },
    {
        name: "Fat",
        value: "22g",
    },
];

const StyledH1 = styled(H1)`
    font-family: "Young Serif";
    margin: 0;
    font-size: 2.5em;
    color: ${(props) => props.theme.nutmeg};
`;

const StyledSpanValue = styled.span`
    font-weight: 800;
    color: ${(props) => props.theme.nutmeg};
`;

const FlexTable = () => {
    return (
        <TableList>
            {nutritions.map(({ name, value }) => (
                <TableRow className="table-row">
                    <StyledFlexRowItem className="row-item">{name}</StyledFlexRowItem>
                    <StyledFlexRowItem className="row-item">
                        <StyledSpanValue>{value}</StyledSpanValue>
                    </StyledFlexRowItem>
                </TableRow>
            ))}
        </TableList>
    );
};

const Nutrition = () => {
    return (
        <Wrapper>
            <StyledH1 className="title">Nutrition</StyledH1>
            <p className="intro">The table below shows nutritional values per serving without the additional fillings.</p>
            <FlexTable />
            {/* <table>
                <tr>
                    <td>Calories</td>
                    <td>277kcal</td>
                </tr>
                <tr>
                    <td>Carbs</td>
                    <td>0g</td>
                </tr>
                <tr>
                    <td>Protein</td>
                    <td>20g</td>
                </tr>
                <tr>
                    <td>Fat</td>
                    <td>22g</td>
                </tr>
            </table> */}
        </Wrapper>
    );
};

export default Nutrition;
