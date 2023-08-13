import React, { Component, Fragment } from 'react';
import Sidebar from '../../../components/sidebar';
import { Table } from '../../../components/cards/tables';
import AddUsersModal from '../../../components/modal/users/add';
import swal from 'sweetalert';
import axios from 'axios';
import ReactDOM from "react-dom";

class Users extends Component {
    deleteRow = (e, id) => {
        e.preventDefault();
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            buttons: [true, "Yes"],
        }).then((result) => {
            if(result){
                axios.delete(`/api/delete-user/${id}`).then(res => {
                    if(res.status === 200){
                        swal("Success", res.data.message, "success", {
                            button: false,
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                }).catch(err => {
                    console.log(err.message)
                    swal("Warning", 'something wrong', "warning");
                });
            }
        })
    }
    // updateRow = (id) => {
    //     alert(`update ${id}`)
    //     // const filteredData = this.state.data.filter((i) =>  i.id !== id);
    //     // this.setState({data: filteredData});
    // }
    render() {
        const columnData = [
            { title: "Name", data: "name" },
            { title: "Unit Kerja", data: "additional_user.work_unit", defaultContent: "" },
            { title: "NIK", data: "additional_user.nik", defaultContent: "" },
            { title: "NIP", data: "additional_user.nip", defaultContent: "" },
            { title: "Jenis Kelamin", data: "additional_user.gender", defaultContent: "" },
            { title: "Posisi KPB", data: "position_kpb", defaultContent: "" },
            { title: "Posisi departemen", data: "position_department", defaultContent: "" },
            { title: "Access", defaultContent: "", bSortable : false, },
        ]
        const columnDefs = [
            {
                targets: [7],
                width: 80,
                className: "center",
                createdCell: (td, cellData, rowData) =>
                ReactDOM.render(
                    <button
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      id={rowData.id}
                      onClick={(e) => {
                      this.deleteRow(e, rowData.id);
                      }}
                      > Delete </button>, td 
                ), 
            },
        ]
        const APIURL = "/api/users";
        const DATASET =  'res.data.data';
        
        return (
            <Fragment>
                <main>
                    <Sidebar />
                    <div className="relative md:ml-64 bg-gray-100 md:pt-12 pb-32 pt-12">
                        <div className="flex flex-wrap mt-4">
                            <div className="w-full mb-12 px-4 justify-between">
                                <div className="text-center flex justify-between px-5 py-3whitespace-nowrap">
                                    <h6 className="text-blueGray-700 text-xl font-bold">Users</h6>
                                    <AddUsersModal/>
                                </div>
                                <div className="py-5">
                                    <Table deleteRow={this.deleteRow} columnData={columnData} columnDefs={columnDefs} APIURL={APIURL} DATASET={DATASET}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </main>
            </Fragment>
        )
    }
}

export default Users;
