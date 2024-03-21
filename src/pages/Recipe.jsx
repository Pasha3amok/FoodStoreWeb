import { useEffect, useState  } from 'react';
import { useParams} from 'react-router-dom';
import { getMealById } from '../api';

import { Preloader } from '../components/Preloader';

function Recipe() {
	const [recipe, setRecipe] = useState({});
	const {idMeal} = useParams();

	useEffect(()=>{
		getMealById(idMeal).then(data => setRecipe(data.meals[0]))
	},[idMeal]);

	return <>
		{!recipe.idMeal ? <Preloader/> : (
			<div className="recipe">
				<img src={recipe.strMealThumb} alt={recipe.strMeal} />
				<h1>{recipe.strMeal}</h1>
				<h6>Category: {recipe.strCategory}</h6>
				{recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
				<p>{recipe.strInstructions}</p>

				<table className='centered'>
					<thead>
						<tr><th>Ingredient</th><th>Measure</th></tr>
					</thead>
					<tbody>
						{
							Object.keys(recipe).map(key =>{
								if (key.includes('Ingredient') && recipe[key]) {
									return(
										<tr key={key}>
											<td>{recipe[key]}</td>
											<td>{
												recipe[`strMeasure${key.slice(13)}`]	
											}</td>
										</tr>
									)
								}
								return " ";
							})
						}
					</tbody>
				</table>

				{!recipe.strYouTube ? (
					<div className='row'>
						<h5 style={{margin: '2rem 0 1.5rem'}}>Watch video instruction.</h5>
						<iframe title={idMeal} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
					</div>
				) : "Video not found"}
			</div>
		)}
	</>
}

export {Recipe};