async function getRecommendation() {

    const url = process.env.URL_MOVIES

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: 'eterra1@gmail.com'
            }
        )
    };

    const res = await fetch(`${url}recommendation/`, {...options, next: {revalidate: 30}})
        .then(response => response.json())
        .catch(err => console.error(err));

    if (!res) {
        throw new Error("Failed to fetch API");
    }
    return res
}

export default async function Page() {
     const rec = await getRecommendation()
    console.log(rec.map(el =>JSON.stringify(el.recommendationDate)))
    console.log(rec.map(el =>JSON.stringify(el.movie.original_title)))

    return (
        <>
            {rec.map((el=>
                        <div>{el.recommendationDate}
                         {el.movie.original_title}</div>
            ))}
        </>




    );
}
