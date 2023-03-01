import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShomitirNamRow from './ShomitirNamRow';

const ShomitirNam = () => {
    const [data, setData]= useState([])
    const [shodossho, setShodossho] = useState([]);
    const [refetch, setFetch] = useState(false);
    const { _id } = useParams();
  
    const handleFetch = () => {
        setFetch((prev)=>!prev)
      }
    
    useEffect(()=> {
        fetch(`https://polli-shonchoy-server-er34.vercel.app/shomitiNam/${_id}`)
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          setData(data.result);
          setShodossho(data.shodosshoList);
        })
        .catch(err=>console.log(err))
      }, [])
    return (
      <div>
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
       <h1 className='text-2xl font-bold lg:ml-7'>সমিতির নাম : <br /> <span className='text-xl'>{data.shomitirNam}</span> </h1>
        <h1 className='text-2xl font-bold '>সমিতির কোড: <br />  {data.shomitirCodeNumber}</h1>
        <h1 className='text-2xl font-bold '>সমিতির মোবাইল নং: <br /> {data.mobileNumber}</h1>
       </div>
            <div class="overflow-x-auto mt-16">
        <table class="table w-full">
        
          <thead>
            <tr>
        <th>সদস্য কোড নং</th>
        <th>সদস্যের নাম</th>
        <th>মোবাইল</th>
        <th>পিতা/স্বামীর নাম</th>
        <th>মাতার নাম</th>
        <th>গ্রাম</th>
        <th>উপজেলা</th>
        <th>জেলা</th>
       
              
               
            </tr>
          </thead>
          <tbody>
      
                 
          {
              shodossho?.map((item, index)=> (
               
                  <ShomitirNamRow
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

export default ShomitirNam;