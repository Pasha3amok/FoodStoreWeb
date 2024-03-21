import {useEffect, useState} from 'react'
import {getAllCategories} from '../api'
import {Preloader} from '../components/Preloader'
import {CategoryList} from '../components/CategotyList'
import { Search } from "../components/Search";

function Home(){
	const [catalog, setCatalog] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filteredCatalog,setFilteredCatalog] = useState([]);

	const handleSearch = (str) => {
		setFilteredCatalog(
			catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
		)
	}

	useEffect(()=>{
		getAllCategories().then(data => {
			setCatalog(data.categories);
			setFilteredCatalog(data.categories);
			setIsLoading(false);
		});
	}, []);

	return( 
			<>
			<Search cb={handleSearch}/>
			{isLoading ? <Preloader/> : (
				<CategoryList catalog={filteredCatalog}/>
			)}
		</>
	);
}

export {Home};