function Footer() {
	return <footer className="page-footer red lighten-2">
		<div className="footer-copyright">
			<div className="container">
				{new Date().getFullYear()} Copyright text
				<a href="#" className="grey-text txt-lighten-4 right">Repo</a>
			</div>
		</div>
	</footer>;
}

export {Footer};