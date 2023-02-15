import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <div class="navbar bg-base-200 mb-20">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3  p-4 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/shadharonShodoshoAbedon"> সাধারণ সদস্য আবেদনপত্র</Link></li>
        {/* <li> <Link to="/hishabKhularform"> হিসাব-খোলার-ফরম</Link></li>
        <li> <Link to="/nogodAdayBiborini">নগদ আদায় বিবরণী</Link></li> */}
         <li tabindex="0">
       <a class="justify-between text-sm">
       হিসাব-খোলার-ফরম
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/hishabKhularform'}>হিসাব-খোলার-ফরম</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/hishabtalika'}>হিসাব-খোলার-ফরম তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
        <li tabindex="0">
       <a class="justify-between text-sm">
       ঋণ আবেদন পত্র
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/rinAbedonOnumodonPotro'}>ঋণ আবেদন পত্র</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/rintalika'}>ঋণ আবেদন পত্র তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
          <li tabindex="0">
       <a class="justify-between text-sm">
       সদস্যওয়ারী নগদ আদায় বিবরণী
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/nogodAdayBiborini'}>সদস্যওয়ারী নগদ আদায়</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/nogodtalika'}>নগদ আদায় বিবরণী</Link></a></li> 
          </ul>
            
          
          </li>
          <li tabindex="0">
       <a class="justify-between text-sm">
       সঞ্চয় উত্তোলনের আবেদনপত্র
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/shonchoyUttolon'}>সঞ্চয় উত্তোলন</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/shonchoyTalika'}>সঞ্চয় উত্তোলনের তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
          <li tabindex="0">
       <a class="justify-between text-sm">
       শস্যগোলা ঋণ
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/shoshsogulaRin'}>শস্যগোলা ঋণ</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/shoshogularinTalika'}>শস্যগোলা ঋনের তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
          <li tabindex="0">
       <a class="justify-between text-sm">
       সদস্যপদ প্রত্যাহার
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/shodoshoProttahar'}>সদস্যপদ প্রত্যাহার</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/shodoshoProttaharTalika'}>সদস্যপদ প্রত্যাহারের তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
        {/* <li><Link to="/shonchoyUttolonAbedon">সঞ্চয় আবেদনপত্র</Link></li>
        <li><Link to="/shoshogulaRinAbedon">শস্যগোলা ঋণ আবেদনপত্র</Link></li>
        <li> <Link to="/shodoshoProttaharAbedon">সদস্যপদ প্রত্যাহারের </Link></li> */}
        <li><Link to="/mulPata">মূলপাতা </Link></li>
        <li> <Link to="/adayChok">আদায়ছক</Link></li>
        <li> <Link to="/adayBohi">আদায়বহি</Link></li>
      
      </ul>
    </div>
    {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
  </div>
  <div class="navbar-center pr-96 gap-5 hidden lg:flex">
    <ul class="menu menu-horizontal pr-16">
    <li className='text-sm'><Link to="/shadharonShodoshoAbedon"> সাধারণ সদস্য আবেদন</Link></li>
        {/* <li> <Link to="/hishabKhularform"> হিসাব-খোলার-ফরম</Link></li>
        <li> <Link to="/nogodAdayBiborini">নগদ আদায় বিবরণী</Link></li> */}
     <li tabindex="0">
       <a class="justify-between text-sm">
       হিসাব-খোলার-ফরম
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/hishabKhularform'}>হিসাব-খোলার-ফরম</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/hishabtalika'}>হিসাব-খোলার-ফরম তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
     <li tabindex="0">
       <a class="justify-between text-sm">
       ঋণ আবেদন পত্র
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/rinAbedonOnumodonPotro'}>ঋণ আবেদন পত্র</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/rintalika'}>ঋণ আবেদন পত্র তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
          <li tabindex="0">
       <a class="justify-between text-sm">
       নগদ আদায় বিবরণী
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/nogodAdayBiborini'}>সদস্যওয়ারী নগদ আদায়</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/nogodtalika'}>নগদ আদায় বিবরণী</Link></a></li> 
          </ul>
            
          
          </li>
          <li tabindex="0">
       <a class="justify-between text-sm">
       সঞ্চয় উত্তোলন পত্র
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/shonchoyUttolon'}>সঞ্চয় উত্তোলন</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/shonchoyTalika'}>সঞ্চয় উত্তোলনের তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
          <li tabindex="0">
       <a class="justify-between text-sm">
       শস্যগোলা ঋণ
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/shoshsogulaRin'}>শস্যগোলা ঋণ</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/shoshogularinTalika'}>শস্যগোলা ঋনের তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
          <li tabindex="0">
       <a class="justify-between text-sm">
       সদস্যপদ প্রত্যাহার
       <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
       </a>
       <ul class="p-2 bg-base-300">
       <li><a><Link class="link link-hover" to= {'/shodoshoProttahar'}>সদস্যপদ প্রত্যাহার</Link></a></li> 
       <li><a><Link class="link link-hover" to= {'/shodoshoProttaharTalika'}>সদস্যপদ প্রত্যাহারের তালিকা</Link></a></li> 
          </ul>
            
          
          </li>
        {/* <li><Link to="/shonchoyUttolonAbedon">সঞ্চয় আবেদনপত্র</Link></li>
        <li><Link to="/shoshogulaRinAbedon">শস্যগোলা ঋণ</Link></li>
        <li> <Link to="/shodoshoProttahar">সদস্যপদ প্রত্যাহার</Link></li> */}
        <li className='text-sm'><Link to="/mulPata">মূলপাতা </Link></li>
        <li className='text-sm'> <Link to="/adayChok">আদায়ছক</Link></li>
        <li className='text-sm'> <Link to="/adayBohi">আদায়বহি</Link></li>
    </ul>
  </div>
  {/* <div class="navbar-end">
    <a class="btn">Get started</a>
  </div> */}
</div>
      </div>
    );
};

export default Navbar;


//<div class="navbar bg-base-100">
{/* <div class="navbar-start">
<div class="dropdown">
  <label tabindex="0" class="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li tabindex="0">
      <a class="justify-between">
        Parent
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
      </a>
      <ul class="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </li>
    <li><a>Item 3</a></li>
  </ul>
</div>
<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
</div>
<div class="navbar-center hidden lg:flex">
<ul class="menu menu-horizontal px-1">
  <li><a>Item 1</a></li>
  <li tabindex="0">
    <a>
      Parent
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
    </a>
    <ul class="p-2">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>
</div>
<div class="navbar-end">
<a class="btn">Get started</a>
</div>
</div> */}



//    <Link to="/shadharonShodoshoAbedon"> সাধারণ সদস্য আবেদনপত্র</Link>
{/* <Link to="/hishabKhularform"> হিসাব-খোলার-ফরম</Link>
<Link to="/shadharonShodoshoAbedon">নগদ আদায় বিবরণী</Link>
<Link to="/shadharonShodoshoAbedon"> ঋণ আবেদন পত্র</Link>
<Link to="/shadharonShodoshoAbedon">সঞ্চয় আবেদনপত্র</Link>
<Link to="/shadharonShodoshoAbedon">শস্যগোলা ঋণ আবেদনপত্র</Link>
<Link to="/shadharonShodoshoAbedon">সদস্যপদ প্রত্যাহারের </Link> */}