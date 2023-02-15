import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MulPataRow from './MulPataRow';
import ShomitiCreate from './ShomitiCreate';

const MulPata = () => {
  const [data, setData]= useState([])
  const [refetch, setFetch] = useState(false);


  const handleFetch = () => {
      setFetch((prev)=>!prev)
    }
  
  useEffect(()=> {
      fetch('https://polli-shonchoy-server.vercel.app/shadharonShodosho')
      .then(res=>res.json())
      .then(data=>setData(data))
      .catch(err=>console.log(err))
    },[refetch])
    return (
        <div className='mt-16'>

        <h1 className="text-5xl font-Bold mt-8 ml-5 text-center">
        সমিতি ও সদস্যগণের তথ্য</h1>
          

          {/* <ShomitiCreate></ShomitiCreate> */}

            <div class="overflow-x-auto mt-16">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th>সদস্য কোড নং</th>
        <th>সদস্যের নাম</th>
        <th>পিতা/স্বামীর নাম</th>
        <th>মাতার নাম</th>
        <th>মোবাইল</th>
        <th>এন আইডি</th>
        <th>একাউন্ট নং</th>
        <th>লিঙ্গ</th>
        {/* <th>নিজের নাম</th> */}
        {/* <th>গ্রাম</th> */}
        {/* <th>ডাকঘর</th> */}
        <th>উপজেলা</th>
        <th>জেলা</th>
        <th>বিবরণ</th>
      </tr>
    </thead>
    <tbody>

           
    {
        data?.map((item, index)=> (
         
            <MulPataRow 
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

export default MulPata;