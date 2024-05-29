import { API_key } from "./apiConfig";

export const fetchTrendingVideos = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/youtube/v3/videos' +
          '?part=snippet' +
          '&chart=mostPopular' +
          '&regionCode=FR' +
          '&key=' + API_key
      );
      if (!response.ok) {
        throw new Error('Erreur lors de la requête');
      }
      const data = await response.json();
      // console.log(data.items);
      return data
    } catch (error) {
      console.error('Erreur lors de l\'appel API :', error);
    }
  };