// // signup
// const Signup=()=>{
//     return(
//         <div >
//             <form>
//                 <div>
//                     <input type="text" placeholder="Email Address or mobile number" className="bg-slate-100 text-sm p-4  w-full" />
//                 </div>
//                 <div className="mt-2">
//                     <input type="text" placeholder="Password" className="bg-slate-100 text-sm p-4  w-full" />
//                 </div>
//                 <span className="text-cyan-500 text-[12px]">Forgot password?</span>
//                 <div>
//                     <button className="bg-[#1AB6CF] text-white w-full p-4">Login</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Signup;


// "use client"; 
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://urlpt.technians.in/login/', {
//         username,
//         password,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,  // This ensures that cookies or credentials are sent
//       }
//     );

//       if (response.data.is_admin) {
//         router.push('/pages/admin-dashboard');
//       } else {
//         router.push('/pages/user-dashboard');
//       }

//       // Optionally, store the token for future requests
//       localStorage.setItem('token', response.data.token);

//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }