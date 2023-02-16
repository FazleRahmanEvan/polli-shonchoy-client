import ReactPrint from 'react-to-print';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OwaryNogodAdayBiboroni = () => {
    const {_id} = useParams();
    const [data, setData]= useState({});

    useEffect(() => {
      fetch(`https://polli-shonchoy-server-er34.vercel.app/nogodAdayBiborini/${_id}`,{
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
          
          ctx.fillText((data?.UnionerNam), 350, 377);
          ctx.fillText(data?.tarikh, 1100, 377);
          ctx.fillText(data?.NogodErShomitirNam, 350, 437);
          ctx.fillText(data?.shomitirCode, 1130, 437);
        

        };
    
        image.src = 'https://i.ibb.co/pfyfMyP/image.jpg';

      }
     
    }, [data]);
    return (
        <div className='text-center mb-20'>
        <div ref={ref}>
         <canvas ref={canvasRef} width={1420} height={1900} />
       </div>
         <ReactPrint
         trigger={() => <button class="btn">Print Pdf</button>}
         content={() => ref.current}
       />
         </div>
    );
};

export default OwaryNogodAdayBiboroni;