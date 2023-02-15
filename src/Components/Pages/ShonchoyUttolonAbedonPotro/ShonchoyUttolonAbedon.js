import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ShonchoyUttolonAbedon = () => {
  
  const {
    register,

    handleSubmit,
  } = useForm();

const onSubmit = data => {
    axios.post('https://polli-shonchoy-server.vercel.app/shonchoyUttolon', data)
    .then(res=> console.log(res) )
    .catch(err=> console.log(err))
    
    alert(`নগদ আদায় বিবরণী ফর্ম তৈরি করা হল.`);

}

// if(loading){
//     return <Loading/>
// }
    return (
      <div className="p-5">
        <h1 className="text-3xl font-Bold mt-8 ml-5 text-center">
          পল্লী সঞ্চয় ব্যাংক
        </h1>
        <h1 className="text-5xl font-Bold mt-8 ml-5 text-center">
          সঞ্চয় উত্তোলনের আবেদনপত্র
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mb-10">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  // defaultValue={data.zilla}
                  placeholder="জেলা"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shonchoyZilla", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  // defaultValue={data.upazilla}
                  placeholder="উপজেলা"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shonchoyUpzilla", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  // defaultValue={data.wardNumber}
                  placeholder="ওয়ার্ড নং"
                  className="input input-bordered w-full max-w-xs"
                  {...register("ShonchoywardNumber", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  // defaultValue={data.union}
                  placeholder="ইউনিয়ন"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shonchoyUnion", {
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
                  {...register("shonchoyGram", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  // defaultValue={data.shomitirNam}
                  placeholder="সমিতির নাম"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shonchoyShomitirNam", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"  
                  // defaultValue={data.RinShomitirCode}
                  placeholder="সমিতির কোড"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shonchoyShomitirCode", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="সমিতির মোবাইল নম্বর"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shomitirMobileNumber", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  // defaultValue={data.abedonKarirNam}
                  placeholder="আবেদনকাযরীর নাম"
                  className="input input-bordered w-full max-w-xs"
                  {...register("abedonKarirNam", {
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
                  placeholder="পিতা/স্বামীর নাম"
                  className="input input-bordered w-full max-w-xs"
                  {...register("ShonchoyPitaShamirNam", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="সদস্যের নাম (মনোনীত ব্যক্তি আবেদন করলে)"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shodosherNam", {
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

            <div className="text-center mb-16">
              <button class="btn btn-outline btn-wide sm:btn-sm md:btn-md lg:btn-lg ">
                সাবমিট
              </button>
            </div>
          </section>
        </form>
      </div>
    );
};

export default ShonchoyUttolonAbedon;