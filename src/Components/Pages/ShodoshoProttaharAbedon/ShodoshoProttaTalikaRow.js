import React from 'react';
import { Link } from 'react-router-dom';

const ShodoshoProttaTalikaRow = ({index, item, refetch}) => {
    const{ _id}= item;
    return (
        <tr>
        {/* <th>{item.shodoshoCode}</th> */}
        <td>{item.abedonkarirNam}</td>
        <td>{item.shomitirCodeNumber}</td>
        <td>{item.shomitirCodeNumber}</td>
        <td>{item.shoshoShomitirNam}</td>
        <td>
            <div class="dropdown dropdown-left"> 
        <label tabindex="0" class="btn btn-xs m-1">Click</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52">
         <li><a><Link class="link link-hover text-sm" to= {`/shodoshoProttahar/${_id}`}>সদস্যপদ প্রত্যাহারের ফরম</Link></a></li>
        </ul>
        </div>
        </td>
        </tr>
    );
};

export default ShodoshoProttaTalikaRow;