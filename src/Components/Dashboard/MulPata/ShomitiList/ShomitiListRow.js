import React from 'react';
import { Link } from 'react-router-dom';

const ShomitiListRow = ({index, item, refetch}) => {
    const{ _id}= item;
    return (
        <tr>
      
        <td><Link class="link link-hover" to= {`/shomitiNam/${_id}`}>{item.shomitirNam}</Link></td>
        <td>{item.shomitirCodeNumber}</td>
        <td>{item.gram}</td>
        <td>{item.Dakghor}</td>
        <td>{item.wardNumber}</td>
        <td>{item.mobileNumber}</td>
        </tr>
    );
};

export default ShomitiListRow;