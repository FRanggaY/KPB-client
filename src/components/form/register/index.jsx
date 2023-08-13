// import React, { useState } from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';
// import { useNavigate  } from 'react-router-dom';

// function RegisterForm() {
//     const navigate = useNavigate ();
//     const [registerInput, setRegister] = useState({
//         name: '',
//         email: '',
//         password: '',
//         error_list: [],
//     });
    
//     const handleInput = (e) => {
//         e.persist();
//         setRegister({...registerInput, [e.target.name]: e.target.value});
//     }
    
//     const registerSubmit = (e) => {
//         e.preventDefault();
    
//         const data = {
//             name: registerInput.name,
//             email: registerInput.email,
//             password: registerInput.password,
//         }
//         axios.get('/sanctum/csrf-cookie').then(res => {
//             axios.post('/api/register', data).then(res => {
//                 if(res.data.status === 200){
//                     // localStorage.setItem('auth_token', res.data.token);
//                     // localStorage.setItem('auth_name', res.data.username);
//                     swal("Success", res.data.message, "success");
//                     navigate('/login');
//                 }else{
//                     setRegister({ ...registerInput, error_list: res.data.validation_errors })
//                 }
//             });
//         });
        
//     }
    

//     return (
//         <form onSubmit={registerSubmit}>
//             <div className="mb-6">
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
//                 <input name="name" onChange={handleInput} value={registerInput.name} type="text" id="name" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" />
//                 <span>{registerInput.error_list.name}</span>
//             </div>
//             <div className="mb-6">
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
//                 <input name="email" onChange={handleInput} value={registerInput.email} type="email" id="email" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" />
//                 <span>{registerInput.error_list.email}</span>
//             </div>
//             <div className="mb-6">
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
//                 <input name="password" onChange={handleInput} value={registerInput.password} type="password" id="password" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" />
//                 <span>{registerInput.error_list.password}</span>
//             </div>
//             <div className="flex justify-center mb-6">
//                 <div className="text-sm">
//                     <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">Already have an account?  <a href="/login" className="text-blue-600 hover:underline dark:text-blue-500">Sign In</a></label>
//                 </div>
//             </div>
//             <button type="submit" className="w-full w-text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white">Next</button>
//         </form>
//     );
// }

// export default RegisterForm;