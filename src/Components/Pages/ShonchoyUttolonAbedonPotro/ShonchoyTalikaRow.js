import React from 'react';
import { Link } from 'react-router-dom';

const ShonchoyTalikaRow = ({index, item, refetch}) => {
    const{ _id}= item;
    return (
        <tr>
        {/* <th>{item.shodoshoCode}</th> */}
        <td>{item.abedonKarirNam}</td>
        <td>{item.shonchoyShomitirNam}</td>
        <td>{item.shonchoyUnion}</td>
        <td>{item.
shonchoyShomitirCode}</td>
        <td>
            <div class="dropdown dropdown-left"> 
        <label tabindex="0" class="btn btn-xs m-1">Click</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52">
         <li><a><Link class="link link-hover" to= {`/shonchoyUttolon/${_id}`}> সঞ্চয় উত্তোলনের ফরম</Link></a></li>
        </ul>
        </div>
        </td>
        </tr>
    );
};

export default ShonchoyTalikaRow;