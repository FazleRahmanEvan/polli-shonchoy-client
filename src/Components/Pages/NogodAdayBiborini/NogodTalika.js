import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NogodTalikaRow from './NogodTalikaRow';

const NogodTalika = () => {
    const [data, setData]= useState([])
    const [refetch, setFetch] = useState(false);

    const handleFetch = () => {
        setFetch((prev)=>!prev)
      }
    
    useEffect(()=> {
        fetch('https://polli-shonchoy-server-er34.vercel.app/shomitiCreate')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
      },[refetch])

    return (
      <div class="overflow-x-auto mt-16">
      <table class="table w-full">
       
        <thead>
          <tr>
            <th>সমিতির নাম</th>
            <th>সমিতির কোড নং</th>
            <th>মোবাইল</th>
            <th>বিবরণ</th>
           
          
          </tr>
        </thead>
        <tbody>
    
               
        {
            data?.map((item, index)=> (
             
                <NogodTalikaRow
                key={index}
                item={item}
                index={index}
                refetch={handleFetch}
                />
                
            ))
          }
        
        </tbody>
      </table>
    </div>
    );
};

export default NogodTalika;