import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import Map from "./components/Map/Map.jsx";

import { getPlacesData } from "./api";

const App = () => {
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinates({ lat: latitude, lng: longitude });
			},
		);
	}, []);

	useEffect(() => {
		console.log(bounds);
		getPlacesData(bounds, bounds.sw, bounds.ne).then((data) => {
			setPlaces(data);
			// 	console.log(data);
		});
	}, [bounds, coordinates]);

	return (
		<div>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List places={places} />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						coordinates={coordinates}
					/>
				</Grid>
			</Grid>
		</div>
	);
};
export default App;
