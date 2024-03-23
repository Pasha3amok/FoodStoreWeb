import { Link } from 'react-router-dom';

function Meal(props) {
    const { idMeal, strMeal, strMealThumb } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title red-text">{strMeal}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">add</i>
                </a>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn">
                    Watch recipe.
                </Link>
            </div>
        </div>
    );
}

export { Meal };
