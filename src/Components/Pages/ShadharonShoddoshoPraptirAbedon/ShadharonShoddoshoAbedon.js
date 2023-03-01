import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import ReactPrint from 'react-to-print';
// import { useRef } from 'react';

const ShadharonShoddoshoAbedon = () => {
  // const ref=useRef()
  
  const {
    register,

    handleSubmit,
  } = useForm();

const [data, setData]= useState([])
    const [refetch, setFetch] = useState(false);
  
  
    const handleFetch = () => {
        setFetch((prev)=>!prev)
      }

      
const onSubmit = formData => {

  const shomitiId = formData.shomitirId;

    if (!shomitiId) {
      alert('Please choose a shomiti');
      return;
    }

    const selectedShomiti = data.find(shomiti => shomiti._id === shomitiId);

    const payload = {
      ...formData,
      shomitirNam: selectedShomiti.shomitirNam
    }


  axios.post('https://polli-shonchoy-server-er34.vercel.app/shadharonShodosho', payload)
  .then(res=> console.log(res) )
  .catch(err=> console.log(err))
  
  alert(`সদস্য ফর্ম তৈরি করা হল.`);
  
  

}
    
    useEffect(()=> {
        fetch('https://polli-shonchoy-server-er34.vercel.app/shomitiCreate')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
      },[refetch])

// if(loading){
//     return <Loading/>
// }

    return (
      <div className="p-5">
        <h1 className="text-3xl font-Bold mt-8 ml-5 text-center">
          পল্লী সঞ্চয় ব্যাংক
        </h1>
        <h1 className="text-5xl font-Bold mt-8 ml-5 text-center">
          সাধারণ সদস্য প্রাপ্তির আবেদনপত্র
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
                 <select    {...register("shomitirId")}  className="select select-bordered w-full max-w-xs">
                    <option disabled selected>সমিতির নাম</option>
                          {
                               data?.map((data,index) =><option 
                                key={index}
                                value={data._id}
                                label={data.shomitirNam}
                               ></option>)
                           }
                   
                     </select>
            </div>
            <div className="form-control w-full max-w-xs mt-5 ml-5">
              <input
                type="text"
                placeholder="সদস্য কোড নং"
                className="input input-bordered w-full max-w-xs"
                {...register("shodoshoCode", {
                  required:{
                      
                      message:'First Name is Required'
                  }
              })}
              />
            </div>
            <h1 className="text-xl ml-5 mt-10">১.আবেদনকারীর নাম</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="আবেদনকারীর নাম"
                  className="input input-bordered w-full max-w-xs"
                  {...register("abedonKarirNam", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>
            <h1 className="text-xl ml-5 mt-10">
              ২.পিতা/স্বামীর নাম,মাতার নাম"
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="পিতা/স্বামীর নাম"
                  className="input input-bordered w-full max-w-xs"
                  {...register("pitaShamirNam", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="মাতার নাম"
                  className="input input-bordered w-full max-w-xs"
                  {...register("matarNam", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">৩.ঠিকানা</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6 mb-10">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="গ্রাম"
                  className="input input-bordered w-full max-w-xs"
                  {...register("gram", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="ইউনিয়ন"
                  className="input input-bordered w-full max-w-xs"
                  {...register("union", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="উপজেলা"
                  className="input input-bordered w-full max-w-xs"
                  {...register("upazilla", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="জেলা"
                  className="input input-bordered w-full max-w-xs"
                  {...register("zilla", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5">৪.আবেদনকারীর মোবাইল ফোন নং</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="আবেদনকারীর মোবাইল ফোন নং"
                  className="input input-bordered w-full max-w-xs"
                  {...register("mobileNumber", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">
              ৫.বিবাহিত অবস্থা: অবিবাহিত/ বিবাহিত/ তালাকপ্রাপ্ত/ পরিত্যক্ত /
              বিধান{" "}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="অন্যান্য"
                  className="input input-bordered w-full max-w-xs"
                  {...register("onnanno", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            {/* <h1 className="text-xl ml-5 mt-10">৬.পৈত্রিক ভিটাঃ </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="আছে"
                  className="input input-bordered w-full max-w-xs"
                  {...register("poitrikVita", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="নাই"
                  className="input input-bordered w-full max-w-xs"
                  {...register("poitrikVitaNai", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div> */}

            <h1 className="text-xl ml-5 mt-10">৭.বয়স </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="বয়স"
                  className="input input-bordered w-full max-w-xs"
                  {...register("boiosh", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">৮.শিক্ষাগত যোগ্যতা:</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="শিক্ষাগত যোগ্যতা"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shikkhagotoJuggota", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">
              ৯.আবেদনকারী পরিবার প্রধান পরিবার প্রধান না হলে পরিবার প্রধানের
              সাথে সম্পর্ক
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="সম্পর্ক"
                  className="input input-bordered w-full max-w-xs"
                  {...register("shomporko", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">১৩.পরিবারের মোট বার্ষিক আয়</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="আয়"
                  className="input input-bordered w-full max-w-xs"
                  {...register("aai", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">১৪.কতজন রোজগার করে</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="কতজন"
                  className="input input-bordered w-full max-w-xs"
                  {...register("kotoJon", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="পুরুষ"
                  className="input input-bordered w-full max-w-xs"
                  {...register("purush", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="মহিলা"
                  className="input input-bordered w-full max-w-xs"
                  {...register("mohila", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">
              ১৫.পরিবারের অন্য কেউ অন্য কোন গ্রুপের সদস্য
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="আছে/নাই"
                  className="input input-bordered w-full max-w-xs"
                  {...register("onnoKunoGroupErShodosho", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">
              ১৬.আবেদনকারীর পেশা ও কাজের বিবরণ
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="বিবরণ"
                  className="input input-bordered w-full max-w-xs"
                  {...register("biboron", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>

            <h1 className="text-xl ml-5 mt-10">১৭.বছরের যে মাসে তার আয় কম</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ml-6">
              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="আয়"
                  className="input input-bordered w-full max-w-xs"
                  {...register("aaiKom", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs mt-5 ml-5">
                <input
                  type="text"
                  placeholder="পরিমাণ"
                  className="input input-bordered w-full max-w-xs"
                  {...register("aiiPoriman", {
                    required: {
                      message: "First Name is Required",
                    },
                  })}
                />
              </div>
            </div>
          </section>

          <div className="text-center mb-16 mt-16">
            <button class="btn  btn-wide "> সাবমিট</button>
          </div>
        </form>
      </div>
    );
};

export default ShadharonShoddoshoAbedon;