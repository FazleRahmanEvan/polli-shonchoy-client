import ReactPrint from 'react-to-print';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HishabForm = () => {
    const {_id} = useParams();
    const [data, setData]= useState({});

    useEffect(() => {
      fetch(`https://polli-shonchoy-server.vercel.app/hishabForm/${_id}`,{
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
          
          ctx.fillText((data?.hishaberNam), 400, 616);
          ctx.fillText(data?.abedonKarirnam, 354, 700);
          ctx.fillText(data?.abedonKarirPitarNam, 760, 703);
          ctx.fillText(data?.MatarNam, 1120, 703);
          ctx.fillText(data?.Gram, 344, 747);
          ctx.fillText(data?.Upazilla, 674, 747);
          ctx.fillText(data?.Zilla, 974, 747);
          ctx.fillText(data?.abedonKariGonerNam, 390, 827);
          ctx.fillText(data?.abedonKariGonerPitarNam, 760, 827);
          ctx.fillText(data?.abedonKariGonerMatarNam, 1090, 827);
          ctx.fillText(data?.abedonKariGonerGram, 344, 860);
          ctx.fillText(data?.abedonKariGonerUpazilla, 670, 860);
          ctx.fillText(data?.abedonKariGonerZilla, 970, 860);
          ctx.fillText(data?.hishabPorichalonaKarirNam1, 344, 996);
          ctx.fillText(data?.hishabPorichalonaKarirNam2, 344, 1026);
          ctx.fillText(data?.shomitirShodoshoshomitirNam, 444, 1126);
          ctx.fillText(data?.shomitirShodosherNam, 444, 1156);
          ctx.fillText(data?.porichitiNumber, 444, 1186);
          ctx.fillText(data?.mrittuJonitoMononitoBektirNam, 344, 1330);
          ctx.fillText(data?.mrittuJonitoMononitoBektirShomporko, 534, 1330);
          ctx.fillText(data?.mrittuJonitoMononitoBektirPrappoOngsho, 834, 1330);
          ctx.fillText(data?.mrittuJonitoMononitoBektirMontobbo, 974, 1325);
          ctx.fillText(data?.mrittuJonitoMononitoBektirNam2, 344, 1360);
          ctx.fillText(data?.mrittuJonitoMononitoBektirShomporko2, 534, 1360);
          ctx.fillText(data?.mrittuJonitoMononitoBektirPrappoOngsho2, 834, 1360);
          ctx.fillText(data?.mrittuJonitoMononitoBektirMontobbo2, 974, 1360);
         

        };
    
        image.src = 'https://i.ibb.co/Mck56yX/image.jpg';

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

export default HishabForm;