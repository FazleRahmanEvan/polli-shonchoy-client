import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShomitirNamRow = ({item}) => {
    console.log(item);
    // const [data, setData]= useState([])
    
    // const {shomitirNam} =useParams;
  
    // useEffect(()=> {
    //     fetch(`https://polli-shonchoy-server-er34.vercel.app/shomitiCreate/${shomitirNam}`)
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    //     .catch(err=>console.log(err))
    //   })
    return (
        <tr>
            <td>{item.shodoshoCode}</td>
            <td>{item.abedonKarirNam}</td>
            <td>{item.mobileNumber}</td>
            <td>{item.pitaShamirNam}</td>
            <td>{item.matarNam}</td>
            <td>{item.gram}</td>
            <td>{item.upazilla}</td>
            <td>{item.zilla}</td>
          
      
       
        </tr>
    );
};

export default ShomitirNamRow;