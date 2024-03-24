import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedMeal(props) {
    const { quantity = 0 } = props;

    return (
        <div className="saved-meals">
            {quantity ? (
                <div className="row">
                    <Link>
                        <i className="material-icons right">bookmark</i>
                        {quantity}
                    </Link>
                </div>
            ) : (
                <Link>
                    <i className="material-icons">bookmark_border</i>
                </Link>
            )}
        </div>
    );
}

export { SavedMeal };
