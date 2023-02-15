import ReactPrint from 'react-to-print';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShoshoRinForm = () => {
    const {_id} = useParams();
    const [data, setData]= useState({});

    useEffect(() => {
      fetch(`https://polli-shonchoy-server.vercel.app/shoshsogulaRin/${_id}`,{
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
          
          ctx.fillText((data?.shoshoUnion), 350, 395);
        //   ctx.fillText((data?.tarikh), 1100, 377);
          ctx.fillText((data?.shoshoShomitirNam), 350, 437);
          ctx.fillText((data?.shoshoUpzilla), 900, 400);
          ctx.fillText((data?.shoshoGram), 900, 430);
          ctx.fillText((data?.shoshoWardNumber), 1230, 396);
          ctx.fillText((data?.shoshoShomitirNam), 700, 476);
          ctx.fillText((data?.shoshoShomitirCodeNumber), 700, 510);
          ctx.fillText((data?.ShoshoshomitirSovapotiMobileNumber), 700, 538);
          ctx.fillText((data?.shoshoAbedonKarirNam), 700, 588);
          ctx.fillText((data?.shoshoCodeNumber), 700, 615);
          ctx.fillText((data?.shoshoPitaShamirNam), 700, 650);
          ctx.fillText((data?.MobileNumber), 700, 680);
          ctx.fillText((data?.uddesho), 700, 711);
          ctx.fillText((data?.bastobayonkal), 700, 744);
          ctx.fillText((data?.shoshoBiboronPoriman), 700, 774);
          ctx.fillText((data?.bondhoKritoShoshoBortomanMullo), 700, 808);
          ctx.fillText((data?.prostabitoRinMullo), 700, 868);
          ctx.fillText((data?.nirdharitoShomoyPorProkolperAai), 700, 898);
          ctx.fillText((data?.abedonKritoRinerPoriman), 700, 932);
      

        };
    
        image.src = 'https://i.ibb.co/DWt1zm8/image.jpg';

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

export default ShoshoRinForm;