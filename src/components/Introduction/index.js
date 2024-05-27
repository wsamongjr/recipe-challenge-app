import H1 from "./H1";
import Wrapper from "./Wrapper";

const Introduction = () => {
    return (
        <Wrapper>
            <div className="introduction">
                <H1>Simple Omelette Recipe</H1>
                <p>
                    An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </p>
            </div>
        </Wrapper>
    );
};

export default Introduction;
