import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending data:", credentials); // Debugging log

    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });

      const json = await response.json();
      console.log("Response from server:", json); // Debugging log

      if (!json.success) {
        alert("Enter valid credentials");
      }
    } catch (error) {
      console.error("Error during fetch:", error); // Debugging log
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="geolocation"
            value={credentials.geolocation}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="../login" className="m-3 btn btn-danger">
          Already a user
        </Link>
      </form>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: "",
//   });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(
//       JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//         location: credentials.geolocation,
//       })
//     );
//     const response = await fetch("http://localhost:5000/api/createuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//         location: credentials.geolocation,
//       }),
//     });

//     const json = await response.json();
//     console.log(json);

//     if (!json.success) {
//       alert("Enter valid credentials");
//     }
//   };

//   const handleChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };
//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label
//             htmlFor="name"
//             className="form-label"
//             name="name"
//             value={credentials.name}
//             onChange={handleChange}
//           >
//             Name
//           </label>
//           <input type="text" className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label
//             htmlFor="exampleInputEmail1"
//             className="form-label"
//             name="email"
//             value={credentials.email}
//             onChange={handleChange}
//           >
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label
//             htmlFor="exampleInputPassword1"
//             className="form-label"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div className="mb-3">
//           <label
//             htmlFor="address"
//             className="form-label"
//             name="address"
//             value={credentials.geolocation}
//             onChange={handleChange}
//           >
//             Address
//           </label>
//           <input type="text" className="form-control" />
//         </div>

//         <button type="submit" className="m-3 btn btn-success">
//           Submit
//         </button>
//         <Link to={"./login"} className="m-3 btn btn-danger">
//           Already a user
//         </Link>
//       </form>
//     </div>
//   );
// }
