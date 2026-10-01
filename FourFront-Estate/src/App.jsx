import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Neighborhoods from './pages/Neighborhoods';
import NeighborhoodDetails from './pages/NeighborhoodDetails';
import Agents from './pages/Agents';
import AgentDetails from './pages/AgentDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';
import Compare from './pages/Compare';
import ScheduleViewing from './pages/ScheduleViewing';
import MyInquiries from './pages/MyInquiries';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
export default function App(){return <BrowserRouter><Routes><Route element={<PublicLayout/>}><Route path="/" element={<Home/>}/><Route path="/properties" element={<Properties/>}/><Route path="/property/:slug" element={<PropertyDetails/>}/><Route path="/neighborhoods" element={<Neighborhoods/>}/><Route path="/neighborhood/:slug" element={<NeighborhoodDetails/>}/><Route path="/agents" element={<Agents/>}/><Route path="/agent/:id" element={<AgentDetails/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/favorites" element={<Favorites/>}/><Route path="/compare" element={<Compare/>}/><Route path="/schedule-viewing" element={<ScheduleViewing/>}/><Route path="/my-inquiries" element={<MyInquiries/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></BrowserRouter>}
