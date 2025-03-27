import { useState } from "react";

export default function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <label htmlFor="firstName" className="block mb-2 font-medium">
          First Name:
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <label htmlFor="lastName" className="block mb-2 font-medium">
          Last Name:
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>

      {fullName && (
        <p className="mt-4 text-lg font-bold">Full Name Display: {fullName}</p>
      )}
    </div>
  );
}
