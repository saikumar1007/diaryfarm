import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Bot as Bottle } from 'lucide-react';
import Button from '../ui/Button'; // Ensure this button component is properly styled and imported

interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  address: string;
  bottleSize: string;
  bottlesPerDay: string;
  deliveryDays: string[];
  startDate: string;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    address: '',
    bottleSize: '',
    bottlesPerDay: '',
    deliveryDays: [],
    startDate: '',
  });

  const [loading, setLoading] = useState(false);

  // Generic input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Delivery day checkbox change handler
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      deliveryDays: checked
        ? [...prev.deliveryDays, name]
        : prev.deliveryDays.filter(day => day !== name)
    }));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Registration successful! We will contact you shortly.');
        setFormData({
          fullName: '',
          mobileNumber: '',
          email: '',
          address: '',
          bottleSize: '',
          bottlesPerDay: '',
          deliveryDays: [],
          startDate: '',
        });
      } else {
        const data = await response.json();
        alert(`❌ Error: ${data.message || 'Something went wrong!'}`);
      }
    } catch (error) {
      alert('⚠️ Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Registration Form</h3>
      <p className="text-gray-600 text-center mb-6">Please fill in your details for milk delivery service</p>

      <form onSubmit={handleSubmit}>
        {/* Full Name & Mobile Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <User size={18} className="text-green-500 mr-2" />
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <Phone size={18} className="text-green-500 mr-2" />
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              required
              placeholder="Enter your mobile number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-6">
          <label className="flex items-center text-gray-700 mb-2">
            <Mail size={18} className="text-green-500 mr-2" />
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="mb-6">
          <label className="flex items-center text-gray-700 mb-2">
            <MapPin size={18} className="text-green-500 mr-2" />
            Full Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="address"
            required
            placeholder="Enter full delivery address including landmarks"
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Bottle Size & Bottles per Day */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
            <Bottle size={20} className="text-green-500 mr-2" /> Order Details
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-gray-700 mb-2 block">
                Bottle Size <span className="text-red-500">*</span>
              </label>
              <select
                name="bottleSize"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={formData.bottleSize}
                onChange={handleChange}
              >
                <option value="">Select bottle size</option>
                <option value="500ml">500ml</option>
                <option value="1L">1 Liter</option>
                <option value="2L">2 Liters</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 mb-2 block">
                Bottles per Day <span className="text-red-500">*</span>
              </label>
              <select
                name="bottlesPerDay"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={formData.bottlesPerDay}
                onChange={handleChange}
              >
                <option value="">Select quantity</option>
                <option value="1">1 Bottle</option>
                <option value="2">2 Bottles</option>
                <option value="3">3 Bottles</option>
                <option value="4">4 Bottles</option>
                <option value="5+">5+ Bottles</option>
              </select>
            </div>
          </div>

          {/* Delivery Days */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block">
              Delivery Days <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {daysOfWeek.map(day => (
                <label key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    name={day}
                    className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                    checked={formData.deliveryDays.includes(day)}
                    onChange={handleCheckboxChange}
                  />
                  <span className="ml-2 text-gray-700">{day}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Start Date */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto px-10"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Register Now'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
