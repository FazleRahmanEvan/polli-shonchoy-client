import ReactPrint from 'react-to-print';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RinAbedonForm = () => {
    const {_id} = useParams();
    const [data, setData]= useState({});

    useEffect(() => {
      fetch(`https://polli-shonchoy-server-er34.vercel.app/rinAbedonOnumodonPotro/${_id}`,{
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
          
          ctx.fillText((data?.RinZilla), 370, 336);
          ctx.fillText(data?.RinUpazilla, 954, 332);
          ctx.fillText(data?.RinUnion, 370, 376);
          ctx.fillText(data?.wardNumber, 670, 370);
          ctx.fillText(data?.RinGram, 870, 370);
          ctx.fillText(data?.shomitirNam, 370, 408);
          ctx.fillText(data?.RinShomitirCode, 370, 442);
          ctx.fillText(data?.shomitirSovapotirMobileNumber, 600, 476);
          ctx.fillText(data?.RinAbedonKarirNam, 420, 546);
          ctx.fillText(data?.shodoshoCode, 420, 580);
          ctx.fillText(data?.RinPitaShamirNam, 420, 619);
          ctx.fillText(data?.MobileNumber, 420, 649);
          ctx.fillText(data?.RinerUddesho, 420, 684);
          ctx.fillText(data?.meyad, 434, 727);
          ctx.fillText(data?.shomvabboBae, 434, 757);
          ctx.fillText(data?.Nijosho, 489, 787);
          ctx.fillText(data?.Rin, 889, 787);
          ctx.fillText(data?.BektigotoShonchoy, 578, 849);
          ctx.fillText(data?.Onnanno, 828, 849);
          ctx.fillText(data?.Mut, 1128, 849);
          ctx.fillText(data?.RinerDofaNumber, 636, 879);
          ctx.fillText(data?.RinerPoriman, 900, 879);
          ctx.fillText(data?.RinGrohonerTarikh, 1170, 879);
          ctx.fillText(data?.PurbeRinerUddesho, 584, 926);
          ctx.fillText(data?.MeyadKal, 1000, 926);
          ctx.fillText(data?.RinPurnoPorishoderTarikh, 700, 1000);
          ctx.fillText(data?.AbedonKritoRinerPoriman, 430, 1040);
          ctx.fillText(data?.AbedonKritoRinerPorimanKothay, 770, 1040);
         
        };
    
        image.src = 'https://i.ibb.co/bKb46rr/image.jpg';

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

export default RinAbedonForm;