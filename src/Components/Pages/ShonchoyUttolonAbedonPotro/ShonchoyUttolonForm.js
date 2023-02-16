import ReactPrint from 'react-to-print';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShonchoyUttolonForm = () => {
    const {_id} = useParams();
    const [data, setData]= useState({});

    useEffect(() => {
      fetch(`https://polli-shonchoy-server-er34.vercel.app/shonchoyUttolon/${_id}`,{
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
          
          ctx.fillText((data?.shonchoyZilla), 460, 276);
          ctx.fillText(data?.shonchoyUpzilla, 904, 276);
          ctx.fillText(data?.ShonchoywardNumber, 1234, 276);
          ctx.fillText(data?.shonchoyUnion, 456, 318);
          ctx.fillText(data?.shonchoyGram, 856, 318);
          ctx.fillText(data?.shonchoyShomitirNam, 456, 358);
          ctx.fillText(data?.shonchoyShomitirCode, 456, 396);
          ctx.fillText(data?.shomitirMobileNumber, 456, 439);
          ctx.fillText(data?.abedonKarirNam, 456, 749);
          ctx.fillText(data?.ShonchoyPitaShamirNam, 456, 806);
          ctx.fillText(data?.shodosherNam, 656, 866);
          ctx.fillText(data?.shodoshoCodeNumber, 606, 926);
         
        };
    
        image.src = 'https://i.ibb.co/py8ntkY/image.jpg';

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

export default ShonchoyUttolonForm;