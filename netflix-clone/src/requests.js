const API_KEY = "b7854375d5b2b91339dc5e650c7d1c22";

const requests = {

    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false`,
    getTrending: `/trending/tv/week?api_key=${API_KEY}`,
    getTopRated:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=15000`,
    getComedy:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    getDocumentaries:`/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&with_genres=99`,
    getHorror:`/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&with_genres=27`,
    getDrama:`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`,
}   


export default requests;