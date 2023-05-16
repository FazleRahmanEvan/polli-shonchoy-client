import React from 'react';
import { Link } from 'react-router-dom';

const NogodTalikaRow = ({index, item, refetch}) => {
    const{ _id}= item;
    return (
        <tr>
        <td>{item.shomitirNam}</td>
        <td>{item.shomitirCodeNumber}</td>
        <td>{item.mobileNumber}</td>
        <td>
            <div class="dropdown dropdown-left"> 
        <label tabindex="0" class="btn btn-xs m-1">Click</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52">
         <li><Link class="link link-hover" to= {`/NogodShomitiNam/${_id}`}>আদায় বিবরণী</Link></li>
        </ul>
        </div>
        </td>
        </tr>
    );
};

export default NogodTalikaRow;