import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '6ef9ae66cfmshaeb17d7efd71a5bp1c6bc3jsnbab2989f75aa' ,
    },
  });
    
  return data;
}