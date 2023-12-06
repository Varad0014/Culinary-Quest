
import React from "react";


function Restaurant({name, cuisine, zipcode}) {

    return (<li>{name} {cuisine} {zipcode}</li>);
}

export default Restaurant;