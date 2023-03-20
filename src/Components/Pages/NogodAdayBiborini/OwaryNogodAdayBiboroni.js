import ReactPrint from 'react-to-print';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './OwaryNogod.css';

const OwaryNogodAdayBiboroni = () => {
    const {_id} = useParams();
    const [data, setData]= useState({});
    

    useEffect(() => {
      fetch(`http://localhost:5000/NogodShomitiNam/${_id}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
        // console.log(data)
    }); 
    const canvasRef = useRef(null);
    const ref=useRef()
    useEffect(() => {
      
     if(data){
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();
  
        image.onload = function() {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          ctx.font = '18px bold';
          
          ctx.fillText(data?.Union, 350, 377);
          ctx.fillText(data?.shomitirNam, 350, 437);
          // ctx.fillText(data?.shomitirCodeNumber, 1130, 437);
          ctx.fillText((<input type="text" placeholder="Type here" class=" border-none input w-full max-w-xs"/>), 150, 577)
          
      
        };
    
        image.src = 'https://i.ibb.co/pfyfMyP/image.jpg';

      }
     
    }, [data]);
    
    return (

        <div className='text-center mb-20'>
        <div  ref={ref}>
          {/* <h1 className='mt--96'>PolliShonchoy</h1> */}
         <canvas ref={canvasRef} width={1420} height={1900}></canvas> 
         <input type="text" placeholder="Type here" class="aNogod border-none input  max-w-xs"/>
        </div>
         <ReactPrint
         trigger={() => <button class="btn">Print Pdf</button>}
         content={() => ref.current}
       />
         </div>
    );
};

export default OwaryNogodAdayBiboroni;

// <input type="text" placeholder="Type here" class=" border-none input w-full max-w-xs"/>