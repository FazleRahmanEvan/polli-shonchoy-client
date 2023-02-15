import React from 'react';
import { Link } from 'react-router-dom';

const ShoshoGulaTalikaRow = ({index, item, refetch}) => {
    const{ _id}= item;
    return (
        <tr>
        {/* <th>{item.shodoshoCode}</th> */}
        <td>{item.shoshoAbedonKarirNam}</td>
        <td>{item.shoshoCodeNumber}</td>
        <td>{item.MobileNumber}</td>
        <td>{item.shoshoShomitirNam}</td>
        <td>
            <div class="dropdown dropdown-left"> 
        <label tabindex="0" class="btn btn-xs m-1">Click</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52">
         <li><a><Link class="link link-hover" to= {`/shoshsogulaRin/${_id}`}>শস্যগোলা ঋণ ফরম</Link></a></li>
        </ul>
        </div>
        </td>
        </tr>
    );
};

export default ShoshoGulaTalikaRow;