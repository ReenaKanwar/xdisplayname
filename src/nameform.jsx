import { useState, useEffect } from "react";

export default function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${firstName.trim()} ${lastName.trim()}`);
  }, [firstName, lastName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
    } else {
      setFullName("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <div>
          <h1 className="text-xl font-bold mb-4">Full Name Display</h1>
        </div>
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
        <br/>  
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
        <br/>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>

      {fullName.trim() && (
        <p className="mt-4 text-lg font-bold">Full Name: {fullName}</p>
      )}
    </div>
  );
}
