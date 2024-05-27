import PreparationTime from 'components/PreparationTime';
import Ingredients from 'components/Ingredients';
import Instructions from 'components/Instructions';
import Nutrition from 'components/Nutrition';
import Banner from 'components/Banner';
import MainContainer from 'components/MainContainer';
import Introduction from 'components/Introduction';
import './styles.css';

const RecipePage = () => {
    return (
        <MainContainer>
            <div className="recipe-page">
                <Banner />

                <Introduction />

                <PreparationTime />

                <Ingredients />

                <Instructions />

                <Nutrition />
            </div>
        </MainContainer>
    );
};

export default RecipePage;
