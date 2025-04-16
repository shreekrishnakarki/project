import React, { useState } from 'react';
import { Search, Calendar, Users, Bed, Coffee, Wifi, Car, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';

type hotel={
  name: string;
  location: string;
  price: number;
  numberOfRooms: number;
  description: string;
  image: string;
}

function Home() {
  const token = localStorage.getItem('token')
  if(!token){
    window.location.href = '/auth'
  }

  const [admin,isAdmin] = React.useState(false);
  
  React.useEffect(()=>{
    getData()
    isAdmin(localStorage.getItem("isAdmin")==="true");
  }, [])



  const [data,setData]=useState([] as hotel[]) 

  const getData = async () => {
    await axios.get(import.meta.env.VITE_BACKEND_URL + '/hotel/get', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res)=>{
      if(res){
        setData(res.data)
      }
    }).catch((err)=>{
      console.log(err)
    }
    )
  }
  

  return (
    <>
      <NavBar/>
      <div className="min-h-screen bg-white">
     
        <div 
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR4QDgeW-EqignugZkJMMZzi7JS6Uwl0nR86T9F0PRAu3UIoCKkN_SGnC2_f7NcXZRWZb87_fn_h7df09I3HfGu7HmugZiK_Se6mSg3XQ")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Discover luxury accommodations at the best prices. Book your dream hotel stay with us today.
            </p>
            
           
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    placeholder="Check-in"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    placeholder="Check-out"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1 Adult</option>
                    <option>2 Adult</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </div>
                <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200">
                  Search Hotels
                </button>
              </div>
            </div>
          </div>
        </div>

        
          {
            admin && (
              <div className="bg-blue-50 py-12">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-lg">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Want to add a new Hotel?</h2>
                      <p className="text-gray-600">List new hotels here!.</p>
                    </div>
                    <Link
                      to="/add-hotel"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Add Hotel</span>
                    </Link>
                  </div>
                </div>
              </div>

            )
          }
        
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bed className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Comfortable Rooms</h3>
                <p className="text-gray-600">Experience luxury in our carefully curated rooms</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Breakfast Included</h3>
                <p className="text-gray-600">Start your day with a delicious breakfast</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Free Wi-Fi</h3>
                <p className="text-gray-600">Stay connected with high-speed internet</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Free Parking</h3>
                <p className="text-gray-600">Convenient parking for all our guests</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Hotels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
              {
              data.map((hotel, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                    <p className="text-gray-600 mb-4">{hotel.location}</p>
                    <div className="flex items-center justify-between">
                    
                      <p className="text-xl font-bold text-blue-600">
                        
                      <h3>Rs. {hotel.price}<span className="text-sm text-gray-600">/night</span> </h3>
                      </p>
                    </div>
                    <button 
                    onClick={()=>window.location.href="/reserve"}
                    className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 group"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;