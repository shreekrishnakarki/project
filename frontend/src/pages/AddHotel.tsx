import React, { useState } from 'react';
import { Building2, MapPin, Image, BedDouble } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

function AddHotel() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    description: '',
    image: '',
    numberOfRooms: '',
  });

  const token = localStorage.getItem('token');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post(import.meta.env.VITE_BACKEND_URL + '/hotel/createHotel', formData, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        if (res) {
          toast.success('Hotel Added Successfully!');
          setFormData({
            name: '',
            location: '',
            price: '',
            description: '',
            image: '',
            numberOfRooms: '',
          });
        }
      })
      .catch((err) => {
        toast.error('Failed to Add Hotel');
        console.error(err);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: 'url("https://i.redd.it/uoq4n2ksxl871.jpg")',
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-green-600 to-blue-700">
            <h1 className="text-4xl font-bold text-white">Add New Hotel</h1>
            <p className="text-blue-100 mt-2">List your hotel on StayFinder and reach more customers.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hotel Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="E.g., Pokhara Paradise Hotel"
                    required
                  />
                </div>
              </div>

              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="E.g., Kathmandu, Nepal"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price per Night</label>
                <div className="relative">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="pl-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="E.g., 5000"
                    required
                  />
                </div>
              </div>

              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
                <div className="relative">
                  <BedDouble className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    name="numberOfRooms"
                    value={formData.numberOfRooms}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="E.g., 50"
                    required
                  />
                </div>
              </div>
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <div className="relative">
                <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="E.g., https://example.com/hotel-image.jpg"
                  required
                />
              </div>
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your hotel..."
                required
              ></textarea>
            </div>

           
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-200"
            >
              Add Hotel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHotel;