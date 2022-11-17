import React, { useEffect, useState } from "react";

function Queries() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("queries")));
        console.log(JSON.parse(localStorage.getItem("queries")));
    }, []);
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div>
            {data &&
                data.map((item) => (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.email}</span>
                        <span>{item.message}</span>
                    </div>
                ))}
        </div>
    );
}

export default Queries;