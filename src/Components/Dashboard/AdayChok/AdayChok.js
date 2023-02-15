import React from 'react';

const AdayChok = () => {
    return (
      <div>
        <h1 className="text-5xl font-Bold mt-8 ml-5 text-center">আদায় ছক</h1>

        <div class="overflow-x-auto mt-16">
          <table class="table w-full">
            <thead>
              <tr>
                <th>সদস্য কোড নং</th>
                <th>সদস্যের নাম</th>
                <th>সঞ্চয়</th>
                <th>সঞ্চয় বিবরণ</th>
                <th>ঋণ</th>
                <th>ঋণের বিবরণ</th>
                <th>মোট টাকা</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>১</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>


       
        <div className='p-6 text-center grid grid-cols-1 lg:grid-cols-2 mt-20 gap-6'>
            <div>
            <button class="btn btn-wide">আদায় বহিতে যুক্ত করুন</button>
            </div>
            <div>
            <button class="btn btn-wide">আদায় বহি দেখুন</button>
            </div>
      
       
        </div>
       


        <div>
          <h1 className="text-3xl font-Bold mt-24 ml-5 text-center">
            লোন ক্যালকুলেটার
          </h1>

          <div className='text-center p-6'>
          <div className='mt-14 grid grid-cols-1 lg:grid-cols-3  gap-6'>
            <div class="form-control">
              <label class="input-group">
                <span>ঋণের পরিমাণ</span>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                />
              </label>
            </div>

            <div class="form-control">
              <label class="input-group">
                <span>মুনাফার হার</span>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                />
              </label>
            </div>

            <h1 className='text-xl font-medium'>পাওনা টাকা:-</h1>
               
          </div>
          <button class="btn btn-wide mt-16">ক্যালকুলেট</button>
          </div>
          
         
        </div>
      </div>
    );
};

export default AdayChok;