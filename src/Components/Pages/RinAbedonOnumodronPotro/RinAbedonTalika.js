import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RinAbedonTalikaRow from './RinAbedonTalikaRow';

const RinAbedonTalika = () => {
    const [data, setData]= useState([])
    const [refetch, setFetch] = useState(false);

    
  const handleFetch = () => {
    setFetch((prev)=>!prev)
  }

useEffect(()=> {
    fetch('https://polli-shonchoy-server-er34.vercel.app/rinAbedonOnumodonPotro')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  },[refetch])
    return (
        <div>
              <div class="overflow-x-auto mt-16">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th>সদস্য কোড নং</th>
        <th>সদস্যের নাম</th>
        <th>পিতা/স্বামীর নাম</th>  
        <th>উপজেলা</th>
        <th>জেলা</th>
        <th>বিবরণ</th>
      </tr>
    </thead>
    <tbody>

           
    {
        data?.map((item, index)=> (
         
            <RinAbedonTalikaRow
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
        </div>
    );
};

export default RinAbedonTalika;