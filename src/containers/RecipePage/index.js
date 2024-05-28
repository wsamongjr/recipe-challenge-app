import PreparationTime from 'components/PreparationTime';
import Ingredients from 'components/Ingredients';
import Instructions from 'components/Instructions';
import Nutrition from 'components/Nutrition';
import Banner from 'components/Banner';
import MainContainer from 'components/MainContainer';
import Introduction from 'components/Introduction';
import './styles.scss';
import styled from 'styled-components';

const StyledBanner = styled.div`
    margin: 4%;
    .banner {
        width: 100%;
        border-radius: 25px;
    }

    @media (${(props) => props.theme.mediaQuery.mobile}) {
        margin 0;
        .banner {
            border-radius: 0;
        }
    }
`;

const RecipePage = () => {
    return (
        <MainContainer className="main-container">
            <StyledBanner>
                <Banner />
            </StyledBanner>
            <div className="recipe-page">
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
