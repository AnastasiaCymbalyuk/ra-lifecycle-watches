import React from "react";
import ListItem from "./ListItem";

export default function List (props) {
    return (
        <div>
            {props.watch.map((wth) => {
                return (
                   <ListItem 
                        title={ wth.title }
                        timeZone={ wth.timeZone }
                        key={ wth.id }
                        id={ wth.id }
                        onDelete={ () => props.onDelete(wth.id)
                    }/> 
                )
            })}
        </div>
    )
}