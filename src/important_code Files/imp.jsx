
// import React, { useEffect, useState } from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// // import axios from 'axios'
// import {Route , Routes } from 'react-router-dom'

// import Find_a_Tutor from "./pages/Find_a_Tutor"
// import Contact_Us from "./pages/Contact_Us"
// import About_Us from "./pages/About_Us"
// import Home from "./pages/Home"
// import Register_as_a_Tutor from "./pages/Register_as_a_Tutor"


// // Api fetching
// const App = () => {



//   // Api fetching
// //   const [data,setData]=useState([])
// //   const getData= async()=>{
// //     const response =await axios.get("https://picsum.photos/v2/list")
// //     setData(response.data)
// //   }
//   // without bottom
//     // useEffect(() => {
//     //   getData()
//     //   },[])
//   return (
//   // {/* /* by bottom fetching api data */ }
//   //   {/* <button onClick={getData} className='size-25 bg-teal-900 text-white text-3xl p-2 m-6 rounded-2xl active:scale-90'>Get Data</button> */}
//   //       {/* <div>
//   //         {data.map(function(elem,idx){
//   //           return <div key={idx} className='bg-gray-50 flex items-center justify-between px-6 py-7 w-full mb-4'>
//   //           <img className='h-40' src={elem.download_url} alt="" />
//   //            <h1 className='text-black'>{elem.author}</h1>
//   //           </div>
//   //         })}
//   //       </div> */}
//   //       {/* by bottom fetching api data end */}

//   // new code
//     <>
//     <Routes>
//     <Navbar />

//       <Route path='/About' elemen={<About_Us />} />
//       <Route path='/contact' elemen={<Contact_Us />} />

//       <Footer />
//     </Routes>
//     </>

//         )
// }

// export default App






// // import React from 'react'
// // import Navbar from './components/Navbar'
// // import Footer from './components/Footer'
// // import Card from './components/Card'
// // // import Navbar from '.components/Navbar' 
// // const App = () => {
// //   const users=[
// //     {
// //       "name": "john_doe",
// //       "city": "New York",
// //       "age": 29,
// //       "profession": "Mathematics Teacher",
// //       "profile_photo": "https://example.com/profiles/john_doe.jpg"
// //     },
// //     {
// //       "name": "emma_smith",
// //       "city": "San Francisco",
// //       "age": 32,
// //       "profession": "Physics Tutor",
// //       "profile_photo": "https://example.com/profiles/emma_smith.jpg"
// //     },
// //     {
// //       "name": "raj_verma",
// //       "city": "Mumbai",
// //       "age": 27,
// //       "profession": "English Lecturer",
// //       "profile_photo": "https://example.com/profiles/raj_verma.jpg"
// //     },
// //     {
// //       "name": "Suraj Saxena",
// //       "city": "Dubai",
// //       "age": 34,
// //       "profession": "Mathematician",
// //       "profile_photo": "https://example.com/profiles/fatima_ali.jpg"
// //     },
// //     {
// //       "name": "li_wei",
// //       "city": "Shanghai",
// //       "age": 30,
// //       "profession": "Chemistry Instructor",
// //       "profile_photo": "https://example.com/profiles/li_wei.jpg"
// //     }
// //   ]
  
// //   return (
// //     <>
// //     <Navbar />
// //       <div className=' p-10 text-bold flex flex-row mr-5'>
// //         {users.map(function(elem){
// //           return <h1><Card name={elem.name} age={elem.age} city={elem.city} profession={elem.profession} /></h1>
// //         })}
// //     {/* <Card  user="Pawan" age="69" city="MRJ"/> */}
// //     </div>
// //     <Footer />
    
// //     </>
// //   )
// // }
// // export default App





// // incrising and decrising buton 

// // import  { useState } from "react";
// // import "./styles.css"
// // const App = () => {
// //   const [num1, setNum1] = useState(0);
// //   return (
// //     <div className="border-4 border-green-400 p-4">
// //       <h1 className="text-2xl font-bold">Number is {num1}</h1>
// //       <div className="space-x-4 mt-4">
// //         <button
// //           className="bg-red-800 text-white px-4 py-2 rounded active:scale-90"
// //           onClick={() => setNum1(num1 + 10)}
// //         >
// //           Increment
// //         </button >
// //         <button
// //           className="bg-blue-800 text-white px-4 py-2 rounded active:scale-90"
// //           onClick={() => setNum1(num1 - 10)}
// //         >
// //           Decrement
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };
// // export default App;





// // // userForm form handling
// // import React, { useState } from "react";

// // const App = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form Data Submitted:", formData);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
// //         <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">
// //               Name:
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">
// //               Email:
// //             </label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">
// //               Message:
// //             </label>
// //             <textarea
// //               name="message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };
// // export default App;




