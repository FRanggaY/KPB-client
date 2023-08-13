import React, {Component} from 'react';
import axios from "axios";
const $ = require("jquery");
$.DataTable = require('datatables.net');

export class Table extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [],
      loading: true
    };
  }

  async getData() {
    await axios.get(this.props.APIURL).then(res => {
      this.setState({ 
        dataSet: eval(this.props.DATASET),
        loading: false,
      });
    })
  }

  componentDidMount() {
    this.getData().then(() => this.sync());
  }

  sync() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.state.dataSet,
      columns: this.props.columnData,
      columnDefs : this.props.columnDefs,
    });
  }
  render(){
    
    return <div className="py-5 overflow-auto w-11/12 lg:w-full bg-white p-2">
        {this.state.loading 
        ?  <div>loading data...</div>
        : null}
        <table className="display bg-white" width="100%" ref={(el) => (this.el = el)}></table>
    </div>
  }
}