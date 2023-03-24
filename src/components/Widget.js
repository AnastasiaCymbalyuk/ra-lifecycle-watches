import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import shortid from "shortid";

export default function Widget () {
    const [watch, setWatches] = useState([]);

    const addWatches = (watches) => {
        setWatches((prev) => [...prev, { ...watches, id: shortid.generate() }]);
    }

    const deleteWatches = (id) => {
        setWatches(() => watch.filter((item) => item.id !== id));
    }

    return (
        <div>
            <Form onAdd={ addWatches }/>
            <List onDelete={ deleteWatches } watch={ watch }/>
        </div>
    )
}