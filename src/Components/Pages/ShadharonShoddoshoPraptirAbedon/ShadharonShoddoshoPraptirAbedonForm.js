import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ShadharonShodosho.css'
import ReactPrint from 'react-to-print';
import { useRef } from 'react';
// import shodosho from '../../../All loan form/সাধারণ সদস্য প্রাপ্তির আবেদন ১.jpg'


const ShadharonShoddoshoPraptirAbedonForm = () => {
  const ref=useRef()
    const { _id } = useParams();
    const [data, setData]= useState({});
  
    useEffect(() => {
      fetch(`https://polli-shonchoy-server.vercel.app/shadharonShodosho/${_id}`, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json",
        }
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }) 
    return (
      
      <div className='text-center mb-16'>
        <div ref={ref}>

        {/* style={{ backgroundImage: `url(https://i.ibb.co/ZfQ66Jj/image.jpg)`}} */}
          <div style={{ backgroundImage: `url(https://i.ibb.co/ZfQ66Jj/image.jpg)`, backgroundSize:'cover', backgroundRepeat:'no-repeat',height:''}} className="">

          </div>
         <div >
          {/* <img  className="" src={"https://i.ibb.co/ZfQ66Jj/image.jpg"} alt=""/> */}
          {/* <div className="">
              <h1 className="shomitirnam text-2xl font-medium">
                {data.shomitirNam}
              </h1>
              <h1 className="shodoshoNam  text-2xl font-medium">
                {data.abedonKarirNam}
              </h1>
              <h1 className="abedonNam text-2xl font-medium">
                {data.abedonKarirNam}
              </h1>
              <h1 className=" pitarnam  text-2xl font-medium">
                {data.pitaShamirNam}
              </h1>
              <h1 className="gram text-2xl font-medium">
                {data.gram}
              </h1>
              <h1 className="union  text-2xl font-medium">
                {data.union}
              </h1>
              <h1 className=" upazilla  text-2xl font-medium">
                {data.upazilla}
              </h1>
              <h1 className=" zilla  text-2xl font-medium">
                {data.zilla}
              </h1>
              <h1 className="mobile text-2xl font-medium">
                {data.mobileNumber}
              </h1>
              <h1 className="boiosh text-2xl font-medium">
                {data.boiosh}
              </h1>
              <h1 className="juggota text-2xl font-medium">
                {data.shikkhagotoJuggota}
              </h1>
              <h1 className=" shomporko text-2xl font-medium">
                {data.shomporko}
              </h1>
          </div> */}
    
         </div>
         <div className="">
          {/* <img className="" src={"https://i.ibb.co/PF8QFwd/image.jpg"} alt=''/> */}
          <div class="">
            <div class="">
              <h1 className=" aai text-2xl font-medium">
                {data.aai}
              </h1>
              <h1 className=" kotojon text-2xl font-medium">
                {data.kotoJon}
              </h1>
              <h1 className="purush text-2xl font-medium">
                {data.purush}
                
              </h1>
              <h1 className="mohila text-2xl font-medium">
              {data.mohila}
                
              </h1>
              {/* <h1 className="onnogroup text-2xl font-medium">
                {data.onnoKunoGroupErShodosho}
              </h1> */}
              <h1 className="biboron text-2xl font-medium">
                {data.biboron}
              </h1>
              <h1 className="aaiKom text-2xl font-medium">
                {data.aaiKom}
              </h1>
              
              <h1 className="aaiPoriman text-2xl font-medium">
                {data.aiiPoriman}
              </h1>
              
            </div>
          </div>
        </div> 
       
      </div>

      <ReactPrint trigger={()=> <button class="btn">Print Pdf</button>} content={()=>ref.current}/>
      </div>
    );
};

export default ShadharonShoddoshoPraptirAbedonForm;











// {/* <div >
//           <img className='overflow-x-auto'  src="https://i.ibb.co/ZfQ66Jj/image.jpg" alt="" />
             
//              <h1>Nam:{data.zilla}</h1>
//           </div> */}

//         {/* <div className='h-screen' style={{background:`url(https://i.ibb.co/ZfQ66Jj/image.jpg)`}}>
//           <h1 className='absolute  left-80 top-96 mt-32 text-2xl font-bold'>{data.abedonKarirNam}</h1>
//          </div> */}