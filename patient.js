import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import HealthCare from "./HealthCare";
import web3 from "./web3";

export default class Patient extends React.Component {
  async componentDidMount() {
    console.log("hello world");
    const records = await HealthCare.methods._records(1).call();
    console.log("records.testName" + records.testName);
    // this.setState({ message: "Patient Record created!!" });
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      recID: "",
      pname: "",
      dDate: "",
      hname: "",
      price: "",
      message: "",
      records: null,
    };
    console.log("try ");
  }

  async handleClick(event) {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await HealthCare.methods
      .newRecord(
        this.state.recID,
        this.state.pname,
        this.state.dDate,
        this.state.hname,
        this.state.price
      )
      .send({ from: accounts[0], gas: 2100000 })
      .on("confirmation", (a) => {
        console.log("Aoa");
      });
    this.setState({ message: "Patient Record created!!" });
    //console.log(await HealthCare.methods.get());
    console.log("test muneeb");
  }

  render() {
    return (
      <div class="container container-fluid login-conatiner">
        {this.state.records && this.state.records.map((item) => (
          
          <div>hi</div>


        ))}
        <div class="col-md-4">
          <div class="login-form">
            <form method="post" autoComplete="off">
              <h2 class="text-center">New Record</h2>

              <div class="form-group">
                <input
                  type="text"
                  value={this.state.recID}
                  onChange={(event) =>
                    this.setState({ recID: event.target.value })
                  }
                  class="form-control"
                  placeholder="ID"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  value={this.state.pname}
                  onChange={(event) =>
                    this.setState({ pname: event.target.value })
                  }
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="Date"
                  value={this.state.dDate}
                  onChange={(event) =>
                    this.setState({ dDate: event.target.value })
                  }
                  class="form-control"
                  placeholder="Date"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  value={this.state.hname}
                  onChange={(event) =>
                    this.setState({ hname: event.target.value })
                  }
                  class="form-control"
                  placeholder="Hospital Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  value={this.state.price}
                  onChange={(event) =>
                    this.setState({ price: event.target.value })
                  }
                  class="form-control"
                  placeholder="Price"
                />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-primary btn-block"
                  onClick={this.handleClick}
                >
                  Submit
                </button>
              </div>
              {this.state.message && (
                <p class="alert alert-danger fade in">{this.state.message}</p>
              )}
              <div class="clearfix" />
            </form>
          </div>
        </div>

        <div class="col-md-6 col-md-offset-2">
          <div class="c-list">
            <h2 className="text-center">Records</h2>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Hospital Name</th>
                  <th>Price</th>
                  <th>Sign Count</th>
                </tr>
              </thead>
              <tbody>

                
                <tr>
                  <td>A</td>
                  <td>A</td>
                  <td>A</td>
                  <td>A</td>
                  <td>A</td>
                  <td>A</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      
      </div>
    );
  }
}
