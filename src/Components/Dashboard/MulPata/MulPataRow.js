import React from 'react';
import { Link } from 'react-router-dom';

const MulPataRow = ({index, item, refetch}) => {
  const{ _id}= item;
    return (
        
      <tr>
        <th>{item.shodoshoCode}</th>
        <td><Link class="link link-hover" to= {`/shadharonShodosho/${_id}`}>{item.abedonKarirNam}</Link></td>
        <td>{item.pitaShamirNam}</td>
        <td>{item.matarNam}</td>
        <td>{item.mobileNumber}</td>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
        {/* <td>{}</td> */}
        {/* <td>{item.gram}</td> */}
        {/* <td>{}</td> */}
        <td>{item.upazilla}</td>
        <td>{item.zilla}</td>
        <td><div class="dropdown dropdown-left">
  <label tabindex="0" class="btn btn-xs m-1">Click</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52">
    <li><a><Link class="link link-hover" to= {`/shadharonShodosho/shodoshoCode/${_id}`}>shadharonShodosho</Link></a></li>
    {/* <li><a><Link class="link link-hover" to= {`/hishabKhularform/${_id}`}>hishabKhularform</Link></a></li>
    <li><a><Link class="link link-hover" to= {`/hishabForm/${_id}`}>hishabform</Link></a></li>
    */}
    {/* <li><a><Link class="link link-hover" to= {`/nogodAdayBiborini/${_id}`}>nogodAdayBiborini</Link></a></li>
    <li><a><Link class="link link-hover" to= {`/nogodAdayBiborinForm/${_id}`}>nogodAdayBiboriniForm</Link></a></li> */}
    {/* <li><a><Link class="link link-hover" to= {`/rinAbedonOnumodonPotro/shodoshoCode/${_id}`}>rinAbedonOnumodon</Link></a></li> */}
    {/* <li><a><Link class="link link-hover" to= {`/rinAbedonForm/shodoshoCode/${_id}`}>rinAbedonForm</Link></a></li> */}
    {/* <li><a><Link class="link link-hover" to= {`/shonchoyUttolon/${_id}`}>shonchoyUttolon</Link></a></li>
    <li><a><Link class="link link-hover" to= {`/shonchoyUttolonForm/${_id}`}>shonchoyUttolonForm</Link></a></li> */}
    {/* <li><a><Link class="link link-hover" to= {`/shoshsogulaRin/${_id}`}>shoshogulaRinAbedon</Link></a></li>
    <li><a><Link class="link link-hover" to= {`/shoshoRinForm/${_id}`}>shoshorinForm</Link></a></li>
    <li><a><Link class="link link-hover" to= {`/shodoshoProttahar/${_id}`}>shodoshoProttahar</Link></a></li> */}
    
  </ul>
</div></td>
      </tr>
       
    );
};

export default MulPataRow;