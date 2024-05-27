const { default: H1 } = require('components/H1');
const { default: Wrapper } = require('./Wrapper');

const Nutrition = () => {
    return (
        <Wrapper>
            <H1>Nutrition</H1>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <table>
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
            </table>
        </Wrapper>
    );
};

export default Nutrition;
