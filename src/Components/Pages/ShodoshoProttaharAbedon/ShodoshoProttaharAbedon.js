import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ShodoshoProttaharAbedon = () => {
  const {
    register,

    handleSubmit,
  } = useForm();

const onSubmit = data => {
    axios.post('https://polli-shonchoy-server.vercel.app/shodoshoProttahar', data)
    .then(res=> console.log(res) )
    .catch(err=> console.log(err))
    
    alert(`নগদ আদায় বিবরণী ফর্ম তৈরি করা হল.`);

}

// if(loading){
//     return <Loading/>
// }
    return (
        <div>
             <h1 className="text-3xl font-Bold mt-8 ml-5 text-center">
          পল্লী সঞ্চয় ব্যাংক
        </h1>

        <h1 className="text-5xl font-Bold mt-8 ml-5 text-center">
        সদস্যপদ প্রত্যাহারের আবেদনপত্র
        </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 ml-6 mb-10">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="জেলা"
                className="input input-bordered w-full max-w-xs"
                {...register("zilla", {
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
                {...register("Upzilla", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="ইউনিয়ন"
                className="input input-bordered w-full max-w-xs"
                {...register("Union", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="ওয়ার্ড নং"
                className="input input-bordered w-full max-w-xs"
                {...register("wardNumber", {
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
                {...register("gram", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="সমিতির নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("shomitirNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="সমিতির কোড নং"
                className="input input-bordered w-full max-w-xs"
                {...register("shomitirCodeNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="সমিতির মোবাইল নং"
                className="input input-bordered w-full max-w-xs"
                {...register("shomitirMobileNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>
              
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 ml-6 mb-10">

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="আবেদনকারীর নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonkarirNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="পিতা/স্বামীর নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("pita/ShamirNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="সদস্য কোড নং"
                className="input input-bordered w-full max-w-xs"
                {...register("shodoshoCodeNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          
              </div>

        </section>
        <div className="text-center mb-20">
          <button class="btn btn-outline btn-wide sm:btn-sm md:btn-md">সাবমিট</button>
          </div>
          </form>

        </div>
    );
};

export default ShodoshoProttaharAbedon;