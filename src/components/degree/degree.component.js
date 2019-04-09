import React from 'react';

const DegreeComponent = ({ className, degree, unit = "c"}) => {
    return (
        <div>
            {degree}
        </div>
    )
};

const Units = {
    Celsius: 'Celsius',
    Farenheit: 'Farenheit',
};

export { DegreeComponent }