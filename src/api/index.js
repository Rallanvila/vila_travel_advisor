import axios from "axios";

// const URL =
// "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (ne, sw) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			"https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
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
