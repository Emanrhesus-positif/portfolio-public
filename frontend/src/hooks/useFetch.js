import { useEffect, useState } from 'react';
require('dotenv').config();
export const useFetch = () => {
	const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.SITE_URL);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du JSON :", error);
      }
    };

    fetchData();

  }, []);

  return jsonData;
}