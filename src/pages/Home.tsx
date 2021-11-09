import TestImage from 'src/assets/test.png';
import Document from 'src/assets/icons/file.svg';
import ThumbsUp from 'src/assets/icons/thumbs-up.svg';

import MainLayout from 'src/layouts/MainLayout';
import ImageCard from 'src/components/shared/ImageCard';
import Tile from 'src/components/shared/Tile';
import { useEffect, useState } from 'react';

const Home = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('http://localhost:13332/db/init', {
			method: 'GET',
			mode: 'no-cors',
			headers: { 'Content-Type': 'application/json' },
		})
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				},
			);
	}, []);

	return (
		<MainLayout
			topRow={
				<>
					<div>
						<p>Hi there</p>
						<p>Hows it going</p>
					</div>

					<ImageCard
						titleText='Project 1'
						imgLabel='Testing 1 2 3'
						imgUrl={TestImage}
					/>

					<ImageCard
						titleText='Project 2'
						imgLabel='Testing 1 2 3'
						imgUrl={TestImage}
					/>

					<ImageCard
						titleText='Project 3'
						imgLabel='Testing 1 2 3'
						imgUrl={TestImage}
					/>
				</>
			}
			bottomRow={
				<>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Tile text='Tutorials' iconPath={Document} iconLabel='Document' />
						<Tile text='Perks' iconPath={ThumbsUp} iconLabel='Thumbs up' />
					</div>
					<p>yo</p>
					<p>whats good</p>
				</>
			}
		/>
	);
};

export default Home;
