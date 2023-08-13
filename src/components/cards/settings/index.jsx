import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate  } from 'react-router-dom';

// components

export default function CardSettings() {
  const [profileInput, setProfileList] = useState([]);
  const [picture, setPicture] = useState([]);
  const navigate = useNavigate();
  const handleInput = (e) => {
    e.persist();
    setProfileList({...profileInput, [e.target.name]: e.target.value});
  }

  const handleImage= (e) => {
      setPicture({ image: e.target.files[0]});
  }

  useEffect(() => {
    axios.get('/api/profile').then(res => {
        if(res.status === 200){
          setProfileList(res.data.data)
        }
    }).catch(err => {
        console.log(err.message)
    })
    ;
  },[]);

  const profileSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', profileInput.name);
    formData.append('email', profileInput.email);
    formData.append('role', profileInput.role);
    formData.append('profile_picture', picture.image);

    axios.get('/sanctum/csrf-cookie').then(res => {
        axios.post(`/api/update-profile`, formData, {
            headers: {
                'x-http-method-override': 'patch'
            }
        }).then(res => {
            if(res.status === 200){
                // localStorage.setItem('auth_name', res.data.username);
                swal("Success", res.data.message, "success");
            }
        }).catch(err => {
            swal("Warning", 'something wrong', "warning");
        })
        ;
    });
    
  }

  const registerDetailSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nip', profileInput.nip);
    formData.append('nik', profileInput.nik);
    formData.append('work_unit', profileInput.work_unit);
    formData.append('gender', profileInput.gender);
    formData.append('position_kpb', profileInput.position_kpb);
    formData.append('position_department', profileInput.position_department);
    formData.append('facebook', profileInput.facebook);
    formData.append('instagram', profileInput.instagram);
    formData.append('twitter', profileInput.twitter);

    axios.get('/sanctum/csrf-cookie').then(res => {
        axios.post(`/api/profile-detail`, formData).then(res => {
            if(res.status === 200){
                // localStorage.setItem('auth_name', res.data.username);
                navigate('/admin/settings');
                swal("Success", res.data.message, "success");
            }
        }).catch(err => {
            swal("Warning", 'something wrong', "warning");
        })
        ;
    });
    
  }
  
  const changePasswordSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('password', profileInput.password);

    axios.get('/sanctum/csrf-cookie').then(res => {
        axios.post(`/api/change-password`, formData, {
            headers: {
                'x-http-method-override': 'patch'
            }
        }).then(res => {
            if(res.status === 200){
                // localStorage.setItem('auth_name', res.data.username);
                navigate('/admin/settings');
                swal("Success", res.data.message, "success");
            }
        }).catch(err => {
            swal("Warning", 'something wrong', "warning");
        })
        ;
    });
    
  }

  const updateDetailSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nip', profileInput.nip);
    formData.append('nik', profileInput.nik);
    formData.append('work_unit', profileInput.work_unit);
    formData.append('gender', profileInput.gender);
    formData.append('position_kpb', profileInput.position_kpb);
    formData.append('position_department', profileInput.position_department);
    formData.append('facebook', profileInput.facebook);
    formData.append('instagram', profileInput.instagram);
    formData.append('twitter', profileInput.twitter);

    axios.get('/sanctum/csrf-cookie').then(res => {
        axios.post(`/api/profile-detail`, formData, {
            headers: {
                'x-http-method-override': 'patch'
            }
        }).then(res => {
            if(res.status === 200){
                // localStorage.setItem('auth_name', res.data.username);
                swal("Success", res.data.message, "success");
                navigate('/admin/settings');
            }
        }).catch(err => {
            swal("Warning", 'something wrong', "warning");
        })
        ;
    });
    
}

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-blueGray-100 ">
        <div className="bg-gray-100 mb-0 px-6 py-3">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Settings</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
          <div >
            <h5 className="text-blueGray-400 text-lg mt-3 font-bold uppercase">
              User Profile
            </h5>
            <hr className="my-3 border-b-1 border-blueGray-300" />
            <form encType="multipart/form-data" class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={profileSubmit}>
                <div>
                    <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input onChange={handleInput} value={profileInput.email}  type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
                <div>
                    <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">name</label>
                    <input onChange={handleInput} value={profileInput.name}  type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
                <div>
                    <label for="profile_picture" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Profile Picture</label>
                    <input onChange={handleImage}  name="profile_picture" id="profile_picture" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" type="file"/>
                </div> 
                <div>
                    <label for="role" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Role</label>
                    <select id="role" onChange={handleInput} value={profileInput.role} name="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option></option>
                        <option>admin</option>
                        <option>user</option>
                    </select>
                </div>
                    
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Profile</button>
            </form>
          </div>
          <h5 className="text-blueGray-400 text-lg mt-3 font-bold uppercase">
              User Detail
            </h5>
          <hr className="my-3 border-b-1 border-blueGray-300" />
          {!profileInput.additional_user || !profileInput.position_user || !profileInput.social_media_user  
            ?   
              <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="detail-modal-profile">
                  Tambah Detail
              </button>
            : 
              <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="detail-modal-profile">
                  Edit Detail
              </button> 
          }
              <div id="detail-modal-profile" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                <div class="relative px-4 w-full h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-end p-2">
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="detail-modal-profile">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        {!profileInput.additional_user || !profileInput.position_user || !profileInput.social_media_user  
                          ?   
                            <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={registerDetailSubmit}>
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add Detail User</h3>
                                <div className="flex flex-wrap gap-2">
                                  <div>
                                    <label for="nip" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nip</label>
                                    <input onChange={handleInput} value={profileInput.nip} type="number" name="nip" id="nip" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                                  <div>
                                    <label for="nik" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nik</label>
                                    <input onChange={handleInput} value={profileInput.nik} type="number" name="nik" id="nik" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                                  <div>
                                    <label for="work_unit" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">work unit</label>
                                    <input onChange={handleInput} value={profileInput.work_unit} type="name" name="work_unit" id="work_unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                                  <div>
                                  <label for="gender" class="text-left block mb-2 w-24 text-sm font-medium text-gray-900 dark:text-gray-400">Gender</label>
                                  <select id="gender" onChange={handleInput} value={profileInput.gender} name="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                      <option></option>
                                      <option>male</option>
                                      <option>female</option>
                                  </select>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <div>
                                      <label for="position_kpb" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">position kpb</label>
                                      <input onChange={handleInput} value={profileInput.position_kpb} type="name" name="position_kpb" id="position_kpb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                                  <div>
                                      <label for="position_department" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">position department</label>
                                      <input onChange={handleInput} value={profileInput.position_department} type="name" name="position_department" id="position_department" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  <div>
                                      <label for="facebook" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">facebook</label>
                                      <input onChange={handleInput} value={profileInput.facebook} type="name" name="facebook" id="facebook" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                                  <div>
                                      <label for="instagram" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">instagram</label>
                                      <input onChange={handleInput} value={profileInput.instagram} type="name" name="instagram" id="instagram" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                                  <div>
                                      <label for="twitter" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">twitter</label>
                                      <input onChange={handleInput} value={profileInput.twitter} type="name" name="twitter" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                                </div>
                                    
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                            </form>
                          : 
                            <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={updateDetailSubmit}>
                              <h3 class="text-xl font-medium text-gray-900 dark:text-white">Update Detail User</h3>
                              <div className="flex flex-wrap gap-2">
                                <div>
                                  <label for="nip" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nip</label>
                                  <input onChange={handleInput} value={profileInput.nip} type="number" name="nip" id="nip" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                <div>
                                  <label for="nik" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nik</label>
                                  <input onChange={handleInput} value={profileInput.nik} type="number" name="nik" id="nik" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                <div>
                                  <label for="work_unit" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">work unit</label>
                                  <input onChange={handleInput} value={profileInput.work_unit} type="name" name="work_unit" id="work_unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                <div>
                                <label for="gender" class="text-left block mb-2 w-24 text-sm font-medium text-gray-900 dark:text-gray-400">Gender</label>
                                <select id="gender" onChange={handleInput} value={profileInput.gender} name="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option></option>
                                    <option>male</option>
                                    <option>female</option>
                                </select>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <div>
                                    <label for="position_kpb" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">position kpb</label>
                                    <input onChange={handleInput} value={profileInput.position_kpb} type="name" name="position_kpb" id="position_kpb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                <div>
                                    <label for="position_department" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">position department</label>
                                    <input onChange={handleInput} value={profileInput.position_department} type="name" name="position_department" id="position_department" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                <div>
                                    <label for="facebook" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">facebook</label>
                                    <input onChange={handleInput} value={profileInput.facebook} type="name" name="facebook" id="facebook" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                <div>
                                    <label for="instagram" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">instagram</label>
                                    <input onChange={handleInput} value={profileInput.instagram} type="name" name="instagram" id="instagram" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                <div>
                                    <label for="twitter" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">twitter</label>
                                    <input onChange={handleInput} value={profileInput.twitter} type="name" name="twitter" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                              </div>
                                  
                              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                          </form>
                        }
                    </div>
                </div>
            </div>
          
            {profileInput.additional_user && profileInput.position_user && profileInput.social_media_user
              ?
                <div class="my-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Gender : {profileInput.additional_user.gender} <br/>
                      NIP : {profileInput.additional_user.nip} <br/>
                      NIK : {profileInput.additional_user.nik} <br/>
                      WORK UNIT : {profileInput.additional_user.work_unit} <br/>
                      Position Department : {profileInput.position_user.position_department} <br/>
                      Position KPB : {profileInput.position_user.position_kpb} <br/>
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <a href={profileInput.social_media_user.facebook} target="_blank" rel="noopener" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Facebook
                      </a>
                      <a href={profileInput.social_media_user.facebook} target="_blank" rel="noopener" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Instagram
                      </a>
                      <a href={profileInput.social_media_user.facebook} target="_blank" rel="noopener" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              : 
                <p>Add detail</p>
            }
            <h5 className="text-blueGray-400 text-lg mt-3 font-bold uppercase">
              Change Password
            </h5>
            <hr className="my-3 border-b-1 border-blueGray-300" />
            <form encType="multipart/form-data" class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={changePasswordSubmit}>
                <div>
                    <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input onChange={handleInput} value={profileInput.password}  type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
                    
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Password</button>
            </form>
            


        </div>
      </div>
    </>
  );
}
