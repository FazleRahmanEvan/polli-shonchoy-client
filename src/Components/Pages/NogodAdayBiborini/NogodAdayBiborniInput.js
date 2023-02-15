import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';



const NogodAdayBiborniInput = () => {

  const {
    register,

    handleSubmit,
  } = useForm();

const onSubmit = data => {
    axios.post('https://polli-shonchoy-server.vercel.app/nogodAdayBiborini', data)
    .then(res=> console.log(res) )
    .catch(err=> console.log(err))
    
    alert(`নগদ আদায় বিবরণী ফর্ম তৈরি করা হল.`);

}

// if(loading){
//     return <Loading/>
// }
    return (
      <div>
        <div>
          <h1 className="text-3xl font-Bold mt-8 ml-5 text-center">
            পল্লী সঞ্চয় ব্যাংক
          </h1>
          <h1 className="text-5xl font-Bold mt-8 ml-5 text-center">
            সমিতি থেকে সদস্যওয়ারী নগদ আদায় বিবরণী
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="mb-8 mt-14 lg:ml-60 sm:ml-16 ">
            {/* <h1 className='text-xl ml-5'>৩.</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 ml-6">
              <div>
                <div className="form-control w-full max-w-xs mt-5 ml-5">
                  <input
                    type="text"
                    // defaultValue={data.union}
                    placeholder="ইউনিয়নের নাম"
                    className="input input-bordered w-full max-w-xs"
                    {...register("UnionerNam", {
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
                    {...register("NogodErShomitirNam", {
                      required:{
                          
                          message:'First Name is Required'
                      }
                  })}
                  />
                </div>
              </div>

              <div>
                <div className="form-control w-full max-w-xs mt-5 ml-5">
                  <input
                    type="text"
                    placeholder="তারিখ"
                    className="input input-bordered w-full max-w-xs"
                    {...register("tarikh", {
                      required:{
                          
                          message:'First Name is Required'
                      }
                  })}
                  />
                </div>
                <div className="form-control w-full max-w-xs mt-5 ml-5">
                  <input
                    type="text"
                    placeholder="সমিতির কোড"
                    className="input input-bordered w-full max-w-xs"
                    {...register("shomitirCode", {
                      required:{
                          
                          message:'First Name is Required'
                      }
                  })}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 lg:ml-16 sm:ml-6">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="ক্রঃনং"
                  className="input input-bordered w-full max-w-xs"
                  {...register("kromikNumber", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="সদস্যের নাম"
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
                  placeholder="রশিদ নং"
                  className="input input-bordered w-full max-w-xs"
                  {...register("roshidNumber", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="সদস্যের কোড নং"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shodoshoCodeNumber", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="সঞ্চয় আমানত"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shonchoyAmanat", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>
            </div>

            <div className="mt-14 ml-8">
              <h1 className="text-2xl font-medium">ঋণ</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 mr-10 ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="আসল"
                  className="input input-bordered w-full max-w-xs"
                  {...register("ashol", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="সার্ভিস চার্জ"
                  className="input input-bordered w-full max-w-xs"
                  {...register("serviceCharge", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="flex gap-2">
                <h1 className="text-3xl mt-6 ml-5">=</h1>
                <div className="form-control w-full max-w-xs mt-5 mb-10">
                  <input
                    type="text"
                    placeholder="মোট"
                    className="input input-bordered w-full max-w-xs"
                    {...register("Mut", {
                      required:{
                          
                          message:'First Name is Required'
                      }
                  })}
                  />
                </div>
              </div>
            </div>
            <div class="divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-10 ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="শেয়ার"
                  className="input input-bordered w-full max-w-xs"
                  {...register("share", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="অন্যান্য"
                  className="input input-bordered w-full max-w-xs"
                  {...register("onnanno", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>
            </div>

            <div className="mt-24">
              <div className="form-control w-full max-w-xs mt-5 ml-9 mb-10">
                <input
                  type="text"
                  placeholder="সর্বমোট (টাকা)"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shorboMutTaka", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-9 mb-10">
                <input
                  type="text"
                  placeholder="সর্বমোট টাকা (কথায়)"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shorboMutTakaKothay", {
                    required:{
                        
                        message:'First Name is Required'
                    }
                })}
                />
              </div>
            </div>
          </section>

          <div className="text-center mb-16">
            <button class="btn  btn-wide ">
              সাবমিট
            </button>
          </div>
        </form>
      </div>
    );
};

export default NogodAdayBiborniInput;