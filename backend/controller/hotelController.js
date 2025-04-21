import {Hotel} from "../models/hotelSchema.js";



export const createHotel = async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json({ message: "Hotel created successfully", hotel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getHotels = async (req, res) => {
  console.log("Fetching hotels...");
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ message: "Server error while fetching hotels" });
  }
};


export const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateHotel = async (req, res) => {
  console.log("Updating hotel with ID:", req.params.id);
  console.log("Request body:", req.body);

  try {
    const { id } = req.params;
    const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json(updatedHotel);
  } catch (error) {
    console.error("Error updating hotel:", error);
    res.status(500).json({ message: "Server error while updating hotel" });
  }
};


export const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handleUpdate = async () => {
  if (!editingHotel) return;

  const token = localStorage.getItem("token");

  if (!token) {
    setError("You must be logged in as an admin to access this page.");
    return;
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const baseUrl = "http://localhost:4000/api/v1";
    const res = await fetch(`${baseUrl}/hotel/update/${editingHotel._id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Failed to update hotel");
    }

    const updatedHotel = await res.json();

    
    setHotels((prev) =>
      prev.map((hotel) => (hotel._id === updatedHotel._id ? updatedHotel : hotel))
    );

    setEditingHotel(null);
    setFormData({});
  } catch (err) {
    console.error("Error updating hotel:", err);
    setError(err instanceof Error ? err.message : "An unknown error occurred");
  }
};
