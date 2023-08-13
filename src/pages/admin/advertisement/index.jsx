import React, { Component, Fragment } from 'react';
import Sidebar from '../../../components/sidebar';
// import CardAdvertise from '../../../components/cards/advertise';
import AddAdversiteModal from '../../../components/modal/advertise/add';
import { Table } from '../../../components/cards/tables';
import swal from 'sweetalert';
import axios from 'axios';
import ReactDOM from "react-dom";

class Advertise extends Component {
    deleteRow = (e, id) => {
        e.preventDefault();
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            buttons: [true, "Yes"],
        }).then((result) => {
            if(result){
                axios.delete(`/api/advertisement/${id}`).then(res => {
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
            { title: "Image", data: "image", defaultContent: "" },
            { title: "Result", bSortable : false, defaultContent: "" },
            { title: "Title", data: "title", defaultContent: "" },
            { title: "Link", data: "link", defaultContent: "" },
            { title: "Access", defaultContent: "", bSortable : false, },
            { title: "", defaultContent: "", bSortable : false, },
        ]
        const columnDefs = [
            {
                targets: [1],
                width: 120,
                height: 80,
                className: "center",
                createdCell: (td, cellData, rowData) =>
                ReactDOM.render(
                    <img src={`http://localhost:8000/${rowData.image}`} alt="" />, td 
                ), 
            },
            {
                targets: [4],
                width: 80,
                className: "center",
                createdCell: (td, cellData, rowData) =>
                ReactDOM.render(
                    <a 
                        href={`advertise/edit/${rowData.id}/`} 
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                        >Update </a>, td
                    // <button
                    //   className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    //   id={rowData.id}
                    //   onClick={(e) => {
                    //   this.updateRow(e, rowData.id);
                    //   }}
                    //   > Update </button>, td 
                ), 
            },
            {
                targets: [5],
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
        const APIURL = "/api/advertisement";
        const DATASET =  'res.data.data';
        
        return (
            <Fragment>
                <main>
                    <Sidebar />
                    <div className="relative md:ml-64 bg-gray-100 md:pt-12 pb-32 pt-12">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="text-center flex justify-between px-5 py-3whitespace-nowrap">
                                    <h6 className="text-blueGray-700 text-xl font-bold">Advertisement</h6>
                                    <AddAdversiteModal/>
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

export default Advertise;
