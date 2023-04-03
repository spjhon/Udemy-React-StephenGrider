import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 9TICvSN_x9Q25XyBUTGRBvTovmf4D5seq1veq8t5E_8'
        },
        params: {
            query: term,
        }
    });

    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;