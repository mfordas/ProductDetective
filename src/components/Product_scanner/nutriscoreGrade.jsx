import React from 'react';

const NutriscoreGrade = ({ grade, color, productGrade }) => {

    const sizeChange = () => {
        if (grade.toLowerCase() === productGrade) {
            const biggerSize = {
                transform: `scale(1.1)`,
                flexGrow: 8
            }
            return biggerSize
        }

    }



    return (
        <div className="nutriscoreGrade" style={{ 'backgroundColor': `${color}`, ...sizeChange() }}>{grade}</div>
    )
};

export default NutriscoreGrade;