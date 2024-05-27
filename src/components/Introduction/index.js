import H1 from 'components/H1';
import Wrapper from './Wrapper';
import styled from 'styled-components';

const StyledH1 = styled(H1)`
    font-size: 2.5em;
    font-weight: 600;
    text-align: left;
    margin-top: 3px;
`;

const Introduction = () => {
    return (
        <Wrapper>
            <div className="introduction">
                <StyledH1>Simple Omelette Recipe</StyledH1>
                <p>
                    An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </p>
            </div>
        </Wrapper>
    );
};

export default Introduction;
