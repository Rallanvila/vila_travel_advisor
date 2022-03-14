import axios from "axios";

// const URL =
// "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (ne, sw, type) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					tr_latitude: ne.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
				},
				headers: {
					"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
					"x-rapidapi-key":
						"b08259437emsh73f96ea80105252p1ce92djsn719a5ce42bb8",
				},
			},
		);
		let dataWithNoAds = data.filter((d) => d.location_id !== "34618");
		return dataWithNoAds;
	} catch (error) {
		console.log(error);
	}
};

export const getWeatherData = async (lat, lng) => {
	try {
		const { data } = await axios.get(
			"https://community-open-weather-map.p.rapidapi.com/weather",
			{
				params: {
					lat: lat,
					lon: lng,
				},
				headers: {
					"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
					"x-rapidapi-key":
						"b08259437emsh73f96ea80105252p1ce92djsn719a5ce42bb8",
				},
			},
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
