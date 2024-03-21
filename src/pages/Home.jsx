import {useEffect, useState} from 'react'
import {getAllCategories} from '../api'
import {Preloader} from '../components/Preloader'
import {CategoryList} from '../components/CategotyList'

function Home(){
	const [catalog, setCatalog] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
		getAllCategories().then(data => {
			setCatalog(data.categories);
			setIsLoading(false);
		});
	}, []);

	return( <>
			{isLoading ? <Preloader/> : (
				<CategoryList catalog={catalog}/>
			)}
		</>
	);
}

export {Home};