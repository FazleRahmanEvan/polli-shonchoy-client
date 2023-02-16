import ReactPrint from 'react-to-print';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShodoshoProttaharForm = () => {
    const {_id} = useParams();
    const [data, setData]= useState({});

    useEffect(() => {
      fetch(`https://polli-shonchoy-server-er34.vercel.app/shodoshoProttahar/${_id}`,{
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
          
          ctx.fillText((data?.zilla), 450, 277);
          ctx.fillText((data?.Upzilla), 780, 277);
          ctx.fillText((data?.wardNumber), 1180, 277);
          ctx.fillText((data?.Union), 450, 317);
          ctx.fillText((data?.gram), 780, 317);
          ctx.fillText((data?.shomitirNam), 450, 357);
          ctx.fillText((data?.shomitirCodeNumber), 450, 393);
          ctx.fillText((data?.shomitirMobileNumber), 450, 435);
          ctx.fillText((data?.abedonkarirNam), 450, 785);
          ctx.fillText((data?.pitaShamirNam), 450, 842);
          ctx.fillText((data?.shodoshoCodeNumber), 450, 902);
          
        

        };
    
        image.src = 'https://i.ibb.co/vw0GSW6/image.jpg';

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

export default ShodoshoProttaharForm;