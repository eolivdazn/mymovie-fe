"use client"
import Card from "@/components/Card";
import {useState} from "react";


export default function Results(results) {

    const [items, setItems] = useState(
        results.results.map((item) => {
            return {...item, selected: false};
        })
    );
    const [orderList, setOrderList] = useState([]);

    const handleSelect = (value) => {
        console.log(value)
        const nextItems = items.map((item) => {
            if (item._id === value) {
                return {
                    ...item,
                    selected: !item.selected
                };
            }
            return item;
        });
        const nextWork = nextItems
            .filter((item) => item.selected)
            .map((item) => item);

        setOrderList(nextWork);
        setItems(nextItems);
    };
    return (
        <>
            <div className="text-center">
            <span className=" text-xl hidden sm:inline">Select the</span>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              ORDER
            </span>
            </div>
            <div className="text-center">Selected: {JSON.stringify(orderList.length)}</div>
            <div className=" text-center sm:p-3  rounded-lg sm:border sm:border-slate-400 sm:m-2 group">
                {orderList.map((el, index)=>(
                <div key={index} className=" justify-items-center sm:grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-3 max-w-6xl mx-auto py-1">
                <p className="font-bold bg-amber-500 py-1 px-2 rounded-lg">{index+1}</p>
                <p className=" py-1 px-2">{el.title}</p>
                </div>
                ))}
            </div>
            <div className="text-center">
            {orderList.length === 3 ? <button className="text-center align-middle bg-amber-500 py-1 px-2 rounded-lg">Save</button> : null}
            </div>
            <div
                className="sm:grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 max-w-6xl mx-auto py-8">
                {results.results.map((result) => (
                    <div onClick={() => handleSelect(result._id)} key={result._id}>
                        <Card key={result.id_themoviedb} result={result}/>
                    </div>
                ))}
            </div>

        </>
    )
}
