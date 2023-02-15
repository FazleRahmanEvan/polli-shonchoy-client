// import React from 'react';
import ReactPrint from 'react-to-print';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ShadharOnShodosho = () => {
    const { _id } = useParams();
    const [data, setData]= useState({});
    useEffect(() => {
        fetch(`https://polli-shonchoy-server.vercel.app/shadharonShodosho/shodoshoCode/${_id}`, {
          method: "GET",
          headers: {
            "Content-Type" : "application/json",
          }
        })
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.log(err));
        //   console.log(data)
      }) 
   
    const canvasRef = useRef(null);
    const ref=useRef()
    useEffect(() => {
      
     if(data){
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();
    
        image.onload = function() {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          ctx.font = '24px Solid';
          
          ctx.fillText((data?.shomitirNam), 250, 370);
          ctx.fillText(data?.shodoshoCode,  1251, 433);
          ctx.fillText((data?.abedonKarirNam), 280, 410);
          ctx.fillText(data?.abedonKarirNam, 381, 650);
          ctx.fillText(data?.pitaShamirNam, 400, 740);
          ctx.fillText(data?.gram, 300, 830);
          ctx.fillText(data?.union, 625, 830);
          ctx.fillText(data?.upazilla, 990, 830);
          ctx.fillText(data?.zilla, 310, 910);
          ctx.fillText(data?.mobileNumber, 490, 1000);
          ctx.fillText(data?.boiosh, 210, 1219);
          ctx.fillText(data?.shikkhagotoJuggota, 340, 1260);
          ctx.fillText(data?.shomporko, 990, 1300);
        };
    
        image.src = 'https://i.ibb.co/ZfQ66Jj/image.jpg';

      }
     
    }, [data]);

    const canvasRef1 = useRef(null);
    
    useEffect(() => {
        if(data){
      const canvas = canvasRef1.current;
      const ctx = canvas.getContext('2d');
      const image = new Image();
  
      image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.font = '24px Arial';
        ctx.fillText(data?.aai, 430, 424);
        ctx.fillText(data?.kotoJon, 430, 470);
        ctx.fillText(data?.purush, 670, 470);
        ctx.fillText(data?.mohila, 970, 470);
        ctx.fillText(data?.biboron, 550, 550);
        ctx.fillText(data?.aaiKom, 500, 587);
        ctx.fillText(data?.aiiPoriman, 860, 587);
       
      };
  
      image.src = 'https://i.ibb.co/PF8QFwd/image.jpg';
    }
    }, [data]);
  
    return (
        <div className='text-center mb-20'>
       <div ref={ref}>
        <canvas ref={canvasRef} width={1420} height={1900} />
        <canvas ref={canvasRef1} width={1320} height={1800} />
    
      </div>
        <ReactPrint
        trigger={() => <button class="btn">Print Pdf</button>}
        content={() => ref.current}
      />
        </div>
     
    );
};

export default ShadharOnShodosho