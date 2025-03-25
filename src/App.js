import React, { useState } from "react";
import zxcvbn from "zxcvbn";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center mt-6 rounded-t">
      <div className="flex justify-center items-center space-x-4">
        <img src="/logo.png" alt="BA Logo" className="h-8" />
        <div className="text-sm">&copy; 2025 Blue Altair | All Rights Reserved.</div>
      </div>
      <div className="mt-2 space-x-4">
        <a href="https://www.facebook.com/bluealtair1/" className="text-blue-600">Facebook</a>
        <a href="https://x.com/BlueAltair1/status/1861794686093951190?mx=2" className="text-blue-400">Twitter</a>
        <a href="https://www.linkedin.com/company/blue-altair/posts/?feedView=all" className="text-blue-700">LinkedIn</a>
        <a href="https://www.instagram.com/bluealtair1/" className="text-pink-600">Instagram</a>
      </div>
    </footer>
  );
};

const CreateAccount = ({ onProceed }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return email.endsWith("@bluealtair.com");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Invalid email domain. Please use a Blue Altair email.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    onProceed();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full mx-auto p-6 border rounded shadow-md bg-white">
        <header className="flex justify-center mb-4">
          <img src="/logo.png" alt="BA Logo" className="h-16" />
        </header>
        <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Official BA Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Proceed to Signup</button>
        </form>
      <Footer />

      </div>
    </div>
  );
};

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    employeeId: "",
    title: "",
    mobileNumber: "",
    doj: "",
    gender: "",
    bloodGroup: "",
    dob: "",
    placeOfBirth: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    emergencyContactRelation: "",
    capabilityName: "Blue Altair", // Pre-filled organization name
    baseLocation: "",
    careerManager: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check password strength only when the password is updated
    if (name === "password") {
      const result = zxcvbn(value);
      setPasswordStrength(result.score);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup Successful!");
  };

  const getStrengthLabel = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "Weak";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full mx-auto p-6 border rounded shadow-md bg-white">
        <header className="flex justify-center mb-4">
          <img src="/logo.png" alt="BA Logo" className="h-16" />
        </header>
        <h2 className="text-xl font-bold mb-4 text-center">Signup Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold">Account Information</h3>
          <input
            type="email"
            name="email"
            placeholder="Official BA Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="doj"
            placeholder="Date of Joining"
            value={formData.doj}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <h3 className="text-lg font-semibold">Personal Information</h3>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="placeOfBirth"
            placeholder="Place of Birth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <h3 className="text-lg font-semibold">Emergency Contact</h3>
          <input
            type="text"
            name="emergencyContactName"
            placeholder="Emergency Contact Name"
            value={formData.emergencyContactName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="emergencyContactNumber"
            placeholder="Emergency Contact Number"
            value={formData.emergencyContactNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="emergencyContactRelation"
            placeholder="Emergency Contact Relation"
            value={formData.emergencyContactRelation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <h3 className="text-lg font-semibold">Organization Information</h3>
          <input
            type="text"
            name="capabilityName"
            value={formData.capabilityName} // Pre-filled
            onChange={handleChange}
            className="w-full p-2 border rounded"
            disabled // Disabled to prevent editing
          />
          <input
            type="text"
            name="baseLocation"
            placeholder="Base Location"
            value={formData.baseLocation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="careerManager"
            placeholder="Career Manager"
            value={formData.careerManager}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <h3 className="text-lg font-semibold">Credentials</h3>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="text-sm text-gray-600 mt-2">
            Password strength: <strong>{getStrengthLabel()}</strong>
          </div>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full p-2 bg-red-500 text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  return <div>{!isAccountCreated ? <CreateAccount onProceed={() => setIsAccountCreated(true)} /> : <SignupForm />}</div>;
};

export default App;
