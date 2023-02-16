import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShomitiCreate = () => {
  const [data, setData]= useState([])
  // const [refetch, setFetch] = useState(false);
  

  //   const handleFetch = () => {
  //       setFetch((prev)=>!prev)
  //     }
 
  useEffect(()=> {
      fetch('https://polli-shonchoy-server-er34.vercel.app/shomitiCreate')
      .then(res=>res.json())
      .then(data=>setData(data))
      .catch(err=>console.log(err))
    },);

  const {
    register,

    handleSubmit,
  } = useForm();

const onSubmit = data => {
    axios.post('https://polli-shonchoy-server-er34.vercel.app/shomitiCreate', data)
    .then(res=> console.log(res) )
    .catch(err=> console.log(err))
    
    alert(`নগদ আদায় বিবরণী ফর্ম তৈরি করা হল.`);

}

// if(loading){
//     return <Loading/>
// }
    return (
      <section className="mt-16">

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:ml-16'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
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
                  placeholder="মোবাইল নং"
                  className="input input-bordered w-full max-w-xs"
                  {...register("mobileNumber", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>
            </div>

            <div className="text-center mb-16 mt-16">
              <button class="btn btn-outline btn-wide  sm:btn-sm md:btn-md ">
                সাবমিট
              </button>
            </div>
          </div>
          </form>
        

          <div className='mt-14 ml-14 lg:ml-56 '>
            <div class="form-control">
              <div class="input-group">
                <select class="select select-bordered">
                  <option disabled selected>সমিতি নির্বাচন করুন</option>
                  <option>{data.shomitirNam}</option> 
                </select>
                <button class="btn">অনুসন্ধান</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
};

export default ShomitiCreate;