import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
// import { useNavigate  } from 'react-router-dom';


function AddUsersModal() {

    // const navigate = useNavigate ();
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        // error_list: [],
    });
    
    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }
    
    const registerSubmit = (e) => {
        e.preventDefault();
    
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            role: registerInput.role,
        }
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post('/api/register', data).then(res => {
                // console.log(res.data.validation_errors);
                if(res.status === 200){
                    swal("Success", res.data.message, "success", {
                        button: false,
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    // localStorage.setItem('auth_name', res.data.username);
                    // setRegister({ ...registerInput, error_list: res.data.validation_errors })
                }
            }).catch(err => {
                swal("Warning", 'something wrong', "warning");
            })
            ;
        });
        
    }
    return (
        <div>
            <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                Tambah Users
            </button>

            <div id="authentication-modal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                <div class="relative px-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-end p-2">
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={registerSubmit}>
                            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add Users</h3>
                            <div>
                                <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input onChange={handleInput} value={registerInput.name} type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                {/* <span>{registerInput.error_list.name}</span> */}
                            </div>
                            <div>
                                <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                <input onChange={handleInput} value={registerInput.password} type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                {/* <span>{registerInput.error_list.password}</span> */}
                            </div>
                            <div>
                                <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                <input onChange={handleInput} value={registerInput.email} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                {/* <span>{registerInput.error_list.email}</span> */}
                            </div>
                            <div>
                                <label for="role" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Role</label>
                                <select id="role" onChange={handleInput} value={registerInput.role} name="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option></option>
                                    <option>admin</option>
                                    <option>user</option>
                                </select>
                            </div>
                                
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default AddUsersModal