import React from 'react';

export default function SavedMeal(props) {
    const { quantity = 0 } = props;

    return (
        <div className="saved-meals">
            {quantity ? (
                <div className="row">
                    <div className="col s1">
                        <i className="material-icons">bookmark</i>
                    </div>
                    <div className="col s1">
                        <span className="quantity ">{quantity}</span>
                    </div>
                </div>
            ) : (
                <i className="material-icons">bookmark_border</i>
            )}
        </div>
    );
}

export { SavedMeal };
