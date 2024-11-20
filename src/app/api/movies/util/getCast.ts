export const getCasts = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY!}&language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY!}`
        }
    };

    const result =  await fetch(url, options)
    return await result.json()

}