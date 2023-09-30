import Card from "@/components/Card";

export default function Results(results) {
    return (
        <>
        <div className="text-center py-16">Select the order </div>
        <div className="sm:grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 max-w-6xl mx-auto py-16">
            {results.results.map((result) => (
                <Card key={result.id} result={result}/>
                // <div key={result.id}>
                //     {result.title }
                // </div>
            ))}
        </div>

        </>
    )
}
