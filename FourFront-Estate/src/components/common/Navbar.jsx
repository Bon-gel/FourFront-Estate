import { Link, NavLink } from 'react-router-dom';
import { Heart, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar(){
 const [open,setOpen]=useState(false);
 const links=[['Properties','/properties'],['Neighborhoods','/neighborhoods'],['Agents','/agents'],['About','/about'],['Contact','/contact']];
 return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
   <div className="container-site flex h-20 items-center justify-between">
    <Link to="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
      <img src="/images/agency-logo.png" alt="FourFront Estate" className="h-10 w-10 rounded-lg object-contain" onError={e=>e.currentTarget.style.display='none'}/>
      <div><div className="font-serif text-xl font-bold tracking-tight text-navy">FourFront <span className="text-gold">Estate</span></div><div className="hidden text-[10px] font-semibold uppercase tracking-[.22em] text-slate-400 sm:block">Abuja Property Advisory</div></div>
    </Link>
    <nav className="hidden items-center gap-7 lg:flex">{links.map(([label,to])=><NavLink key={to} to={to} className={({isActive})=>`text-sm font-semibold ${isActive?'text-gold':'text-slate-600 hover:text-navy'}`}>{label}</NavLink>)}</nav>
    <div className="hidden items-center gap-3 sm:flex"><Link to="/favorites" className="icon-btn" aria-label="Favorites"><Heart size={19}/></Link><a href="tel:+2348030000000" className="btn-primary"><Phone size={17}/> Talk to an adviser</a></div>
    <button className="icon-btn lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   </div>
   {open&&<div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"><div className="container-site flex flex-col gap-2">{links.map(([label,to])=><NavLink onClick={()=>setOpen(false)} key={to} to={to} className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-slate-50">{label}</NavLink>)}<Link onClick={()=>setOpen(false)} to="/favorites" className="rounded-lg px-3 py-3 font-semibold text-slate-700">Saved properties</Link></div></div>}
 </header>
}
