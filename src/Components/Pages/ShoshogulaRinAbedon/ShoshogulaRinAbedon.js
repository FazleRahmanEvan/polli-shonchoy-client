import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const ShoshogulaRinAbedon = () => {
 
  const {
    register,

    handleSubmit,
  } = useForm();

const onSubmit = data => {
    axios.post('https://polli-shonchoy-server-er34.vercel.app/shoshsogulaRin', data)
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
        শস্যগোলা ঋণ আবেদন ও অনুমোদন পত্র
        </h1>
         <form onSubmit={handleSubmit(onSubmit)}>
         <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 ml-6 mb-10">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                // defaultValue={data.zilla}
                placeholder="জেলা"
                className="input input-bordered w-full max-w-xs"
                {...register("shoshoZilla", {
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
                {...register("shoshoUpzilla", {
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
                {...register("shoshoUnion", {
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
                {...register("shoshoWardNumber", {
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
                {...register("shoshoGram", {
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
                {...register("shoshoShomitirNam", {
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
                placeholder="সমিতির কোড নং"
                className="input input-bordered w-full max-w-xs"
                {...register("shoshoShomitirCodeNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text" 
                // defaultValue={data.shomitirSovapotirMobileNumber}
                placeholder="সমিতির সভাপতি/ ম্যানেজার এর মোবাইল নং"
                className="input input-bordered w-full max-w-xs"
                {...register("ShoshoShomitirSovapotiMobileNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16 ml-6 mb-10">

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                // defaultValue={data.abedonKarirNam}
                placeholder="আবেদনকারীর নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("shoshoAbedonKarirNam", {
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
                {...register("shoshoCodeNumber", {
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
                {...register("shoshoPitaShamirNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="মোবাইল ফোন নং"
                className="input input-bordered w-full max-w-xs"
                {...register("MobileNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="উদ্দেশ্য"
                className="input input-bordered w-full max-w-xs"
                {...register("uddesho", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="বাস্তবায়নকাল"
                className="input input-bordered w-full max-w-xs"
                {...register("bastobayonkal", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="শস্য বিবরণ ও পরিমাণ"
                className="input input-bordered w-full max-w-xs"
                {...register("shoshoBiboronPoriman", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
             
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="বন্ধকীকৃত শস্য বর্তমান বাজার মূল্য"
                className="input input-bordered w-full max-w-xs"
                {...register("bondhoKritoShoshoBortomanMullo", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
             
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="প্রস্তাবিত ঋণ নির্ধারিত মূল্যের সর্বোচ্চ ৮০%"
                className="input input-bordered w-full max-w-xs"
                {...register("prostabitoRinMullo", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
             
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="নির্ধারিত সময় পর প্রকল্পের সম্ভাব্য আয়"
                className="input input-bordered w-full max-w-xs"
                {...register("nirdharitoShomoyPorProkolperAai", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
             
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="আবেদনকৃত ঋণের পরিমাণ"
                className="input input-bordered w-full max-w-xs"
                {...register("abedonKritoRinerPoriman", {
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
          
        </section>
         </form>
        
      </div>
    );
};

export default ShoshogulaRinAbedon;