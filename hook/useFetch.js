import axios from "axios";
import { useState, useEffect } from "react";

import { RAPID_API_KEY } from "@env";
import dummy from "../dummyData.json";

const rapidApiKey = RAPID_API_KEY;

export default function useFetch(endpoint, query) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			"X-RapidAPI-Key": rapidApiKey,
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
		params: { ...query },
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);
			setData(response?.data?.data);
			// setData(dummy.data);
		} catch (error) {
			setError(error);
			console.log(error);
			alert("there is an error");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			fetchData();
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
}
