import React from 'react';
import H1 from 'components/H1';
import Wrapper from './Wrapper';

function PreparationTime() {
    return (
        <Wrapper>
            <H1>Preparation time</H1>
            <ul>
                <li>Total: Approximately 10 minutes</li>
                <li>Preparation: 5 minutes</li>
                <li>Cooking: 5 minutes</li>
            </ul>
        </Wrapper>
    );
}

PreparationTime.propTypes = {};

export default PreparationTime;
