import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const HishabKhularFormInput = () => {
 

  const {
    register,
    handleSubmit,
  } = useForm();

const onSubmit = data => {
    axios.post('https://polli-shonchoy-server-er34.vercel.app/hishabKhularForm', data)
    .then(res=> console.log(res) )
    .catch(err=> console.log(err))
    
    alert(`নগদ আদায় বিবরণী ফর্ম তৈরি করা হল.`);

}

// if(loading){
//     return <Loading/>
// }
    return (
      <div className="p-5">
        <div>
          <h1 className="text-3xl font-Bold mt-8 ml-5 text-center">
            পল্লী সঞ্চয় ব্যাংক
          </h1>
          <h1 className="text-5xl font-Bold mt-8 ml-5 text-center">
            হিসাব-খোলার-ফরম
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl ml-5">১.</h1>
        <div className="form-control w-full max-w-xs mt-5 ml-5">
          <input
            type="text"
            placeholder="হিসাবের নাম"
            className="input input-bordered w-full max-w-xs"
            {...register("hishaberNam", {
              required:{
                  
                  message:'First Name is Required'
              }
          })}
          />
        </div>

        <section className="mb-8">
          <div className="justify-start">
            <h1 className="text-xl text-slate-700 mb-4 mt-5 ml-5">
              ২.আবেদনকারী/আবেদনকারীগণের ব্যক্তিগত পরিচয়:
            </h1>
          </div>
          <h1 className="text-xl ml-5">২.১</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                // defaultValue={data.abedonKarirNam}
                 placeholder="নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKarirnam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                // defaultValue={data.pitaShamirNam}
                 placeholder="পিতার নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKarirPitarNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}

              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                // defaultValue={data.matarNam}
                 placeholder="মাতার নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("MatarNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">

          
              <input
                type="text"
                // defaultValue={data.gram}
                 placeholder="গ্রাম"
                className="input input-bordered w-full max-w-xs"
                {...register("Gram", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
{/* 
              <p className='text-red font-bold'>{data.upazilla}</p> */}

              <input
                type="text"
                // defaultValue={data.upazilla}
                placeholder="উপজেলা"
                className="input input-bordered w-full max-w-xs"
                {...register("Upazilla", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
            {/* <p className='text-red font-bold'>{data.zilla}</p> */}
              <input
                type="text"
                // defaultValue={data.zilla}
                placeholder="জেলা"
                className="input input-bordered w-full max-w-xs"
                {...register("Zilla", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
    
          </div>
          <h1 className="text-xl ml-5 mt-5">২.২ আবেদনকারীগণের ব্যক্তিগত পরিচয়</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKariGonerNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="পিতার নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKariGonerPitarNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
                
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="মাতার নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKariGonerMatarNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="গ্রাম"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKariGonerGram", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="উপজেলা"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKariGonerUpazilla", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="জেলা"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKariGonerZilla", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            {/* <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="জাতীয় পরিচয় পত্র নম্বর"
                className="input input-bordered w-full max-w-xs"
              />
            </div> */}
          </div>
        </section>

        <section className="mb-8 ">
          <div className="justify-start">
            <h1 className="text-xl text-slate-700 mb-4 mt-5 ml-5">
              ৩.হিসাব পরিচালনাকারী/হিসাব পরিচালনাকারীগণের নাম ও স্বাক্ষর :
            </h1>
          </div>
          {/* <h1 className='text-xl ml-5'>৩.</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("hishabPorichalonaKarirNam1", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("hishabPorichalonaKarirNam2", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>
        </section>

        <section className="mb-8 ">
          <div className="justify-start">
            <h1 className="text-xl text-slate-700 mb-4 mt-5 ml-5">
              ৪.পরিবারের কোনো সদস্য একটি বাড়ি একটি খামার প্রকল্পে / পল্লী সঞ্চয়
              ব্যাংকের সমিতির সদস্য হলে :
            </h1>
          </div>
          {/* <h1 className='text-xl ml-5'></h1> */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
            <input
                type="text"
                placeholder="সমিতির নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("shomitirShodoshoshomitirNam", {
                  required: {
                    message: "First Name is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="সদস্যের নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("shomitirShodosherNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="পরিচিতি নম্বর"
                className="input input-bordered w-full max-w-xs"
                {...register("porichitiNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>
        </section>

        <section className="mb-8 ">
          <div className="justify-start">
            <h1 className="text-xl text-slate-700 mb-4 mt-5 ml-5">
              ৫.মৃত্যুজনিত জনিত কারণে মনোনীত ব্যক্তি/ব্যক্তিগন হিসাবে জমাকৃত
              অর্থ উত্তোলন করার অধিকারী হবেন:
            </h1>
          </div>
          {/* <h1 className='text-xl ml-5'>৫.</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("mrittuJonitoMononitoBektirNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder=" সম্পর্ক"
                className="input input-bordered w-full max-w-xs"
                {...register("mrittuJonitoMononitoBektirShomporko", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="প্রাপ্য অংশ"
                className="input input-bordered w-full max-w-xs"
                {...register("mrittuJonitoMononitoBektirPrappoOngsho", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="মন্তব্য"
                className="input input-bordered w-full max-w-xs"
                {...register("mrittuJonitoMononitoBektirMontobbo", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("mrittuJonitoMononitoBektirNam2", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder=" সম্পর্ক"
                className="input input-bordered w-full max-w-xs"
                {...register("mrittuJonitoMononitoBektirShomporko2", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="প্রাপ্য অংশ"
                className="input input-bordered w-full max-w-xs"
                {...register("mrittuJonitoMononitoBektirPrappoOngsho2", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="মন্তব্য"
                className="input input-bordered w-full max-w-xs"
                {...register("mrittuJonitoMononitoBektirMontobbo2", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>
        </section>

        <section className="mb-16 ">
          <div className="justify-start">
            <h1 className="text-xl text-slate-700 mb-4 mt-5 ml-5">
              ৬.হিসাব খোলার সময় নগদ/চেকের মাধ্যমে জমাকৃত টাকার পরিমান:
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="টাকার পরিমান"
                className="input input-bordered w-full max-w-xs"
                {...register("hishabKhularShomoyJomakritoTaka", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>
        </section>

        <div className="text-center mb-16">
          <button class="btn  btn-wide">
            সাবমিট
          </button>
        </div>
        </form>
       
      </div>
    );
};

export default HishabKhularFormInput;