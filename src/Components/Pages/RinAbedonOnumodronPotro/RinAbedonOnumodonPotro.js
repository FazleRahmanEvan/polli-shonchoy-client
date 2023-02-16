import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const RinAbedonOnumodronPotro = () => {
  const {_id} = useParams();
  const {
    register,

    handleSubmit,
  } = useForm();

const onSubmit = data => {
    axios.post('https://polli-shonchoy-server-er34.vercel.app/rinAbedonOnumodonPotro', data)
    .then(res=> console.log(res) )
    .catch(err=> console.log(err))
    
    alert(`নগদ আদায় বিবরণী ফর্ম তৈরি করা হল.`);

}

// if(loading){
//     return <Loading/>
// }
    return (
      <div className="p-5">
        <h1 className="text-3xl fontBold mt-8 ml-5 text-center">
          পল্লী সঞ্চয় ব্যাংক
        </h1>

        <h1 className="text-5xl font-Bold mt-8 ml-5 text-center">
          ঋণ আবেদন ও অনুমোদন পত্র
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 ml-6 mb-10">
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                // defaultValue={data.zilla}
                placeholder="জেলা"
                className="input input-bordered w-full max-w-xs"
                {...register("RinZilla", {
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
                // defaultValue={data.upazilla}
                className="input input-bordered w-full max-w-xs"
                {...register("RinUpazilla", {
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
                // defaultValue={data.union}
                className="input input-bordered w-full max-w-xs"
                {...register("RinUnion", {
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
                // defaultValue={data.gram}
                placeholder="গ্রাম"
                className="input input-bordered w-full max-w-xs"
                {...register("RinGram", {
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
                {...register("RinShomitirCode", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="সমিতির সভাপতি/ ম্যানেজার এর মোবাইল নং"
                className="input input-bordered w-full max-w-xs"
                {...register("shomitirSovapotirMobileNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-16 ml-6 mb-10">

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                // defaultValue={data.abedonKarirNam}
                placeholder="আবেদনকারীর নাম"
                className="input input-bordered w-full max-w-xs"
                {...register("RinAbedonKarirNam", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                // defaultValue={data.shodoshoCode}
                placeholder="সদস্য কোড নং"
                className="input input-bordered w-full max-w-xs"
                {...register("shodoshoCode", {
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
                {...register("RinPitaShamirNam", {
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
                placeholder="ঋণের উদ্দেশ্য"
                className="input input-bordered w-full max-w-xs"
                {...register("RinerUddesho", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="মেয়াদ"
                className="input input-bordered w-full max-w-xs"
                {...register("meyad", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="সম্ভাব্য ব্যয় (মোট)"
                className="input input-bordered w-full max-w-xs"
                {...register("shomvabboBae", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          </div>


          <h1 className="text-xl ml-5 mt-10">অর্থায়ন</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ml-6 mb-10">

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="নিজস্বঃ"
                className="input input-bordered w-full max-w-xs"
                {...register("Nijosho", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="ঋণ"
                className="input input-bordered w-full max-w-xs"
                {...register("Rin", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>

          <h1 className="text-xl ml-5 mt-16">আবেদনকারীর সঞ্চয়</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ml-6 mb-10">
           
          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="ব্যাক্তিগত সঞ্চয়"
                className="input input-bordered w-full max-w-xs"
                {...register("BektigotoShonchoy", {
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
                {...register("Onnanno", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="মোট ="
                className="input input-bordered w-full max-w-xs"
                {...register("Mut", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>

          <h1 className="text-xl ml-5 mt-10">পূর্বে গৃহীত ঋণের তথ্য</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ml-6 mb-10">

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="১.ঋণের দফা নং"
                className="input input-bordered w-full max-w-xs"
                {...register("RinerDofaNumber", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="২.ঋণের পরিমাণ"
                className="input input-bordered w-full max-w-xs"
                {...register("RinerPoriman", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="৩.ঋণ গ্রহনের তারিখ"
                className="input input-bordered w-full max-w-xs"
                {...register("RinGrohonerTarikh", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="৪.ঋণের উদ্দেশ্য"
                className="input input-bordered w-full max-w-xs"
                {...register("PurbeRinerUddesho", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="৫.মেয়াদকাল"
                className="input input-bordered w-full max-w-xs"
                {...register("MeyadKal", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="৮.ঋণ পূর্ণ পরিশোধের তারিখ"
                className="input input-bordered w-full max-w-xs"
                {...register("RinPurnoPorishoderTarikh", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          </div>

          <h1 className="text-xl ml-5 mt-10">আবেদনকৃত ঋণের পরিমাণ</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ml-6 mb-10">

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="আবেদনকৃত ঋণের পরিমাণ"
                className="input input-bordered w-full max-w-xs"
                {...register("AbedonKritoRinerPoriman", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>

          <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="(কথায়)"
                className="input input-bordered w-full max-w-xs"
                {...register("AbedonKritoRinerPorimanKothay", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
          </div>

          
        </section>

        <div className="text-center mb-16 mt-16">
          <button class="btn btn-wide">
           <li><a><Link class="link link-hover" to= {`/rinAbedonOnumodonPotro/${_id}`}> সাবমিট </Link></a></li>
          </button>
        </div>

        </form>
     
      </div>
    );
};

export default RinAbedonOnumodronPotro;