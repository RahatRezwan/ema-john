import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
    const order = useLoaderData();
    return <div>This is orders : {order.length}</div>;
};

export default Orders;
