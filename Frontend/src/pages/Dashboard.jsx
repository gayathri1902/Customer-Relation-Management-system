import './pages.css';
// import  InvoiceData from './InvoiceData';
// import QuoteData from './QuoteData';
// import OfferData from './OfferData';
import Piechart from './Piechart';
import Sidebar from '../components/Sidebar';
import React, { Component } from 'react'
// import Abx from '../files_import/Abx';
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      totp: 0,
      toti:0,
      totq:0,
      totdp:0,
      arr_ip: {},
      arr_qp: {},
      arr_rI : [],
      arr_rQ: []
    
    };
}
callAPI() {
  //for 1st row
    fetch("https://crmbackend-fgt7.onrender.com/crm/a")
        .then(result => result.json())
        .then(data => {
            this.setState({totp: data[0]})
            this.setState({toti: data[0]})
            this.setState({totq: data[0]})
            this.setState({totdp: data[1]})
            console.log(data)
      });
      //for previews
      fetch("https://crmbackend-fgt7.onrender.com/crm/bar")
        .then(result => result.json())
        .then(data => {
            this.setState({arr_ip: data})
            console.log(this.state.arr)
      });
      fetch("https://crmbackend-fgt7.onrender.com/crm/qp")
        .then(result => result.json())
        .then(data => {
            this.setState({arr_qp: data})
            console.log(this.state.arr_qp)
      });
      //for 3rd row recent incoices
      fetch("https://crmbackend-fgt7.onrender.com/crm/recentI")
        .then(result => result.json())
        .then(data => {
            this.setState({arr_rI: data})
            console.log(this.state.arr_rI)
      });
      //for 3rd row recent Quotes
      fetch("https://crmbackend-fgt7.onrender.com/crm/recentQ")
        .then(result => result.json())
        .then(data => {
            this.setState({arr_rQ: data})
            console.log(this.state.arr_rQ)
      });
        
}

componentWillMount() {
    this.callAPI();
}
  render() {
    const array = Object.entries(this.state.arr_ip);
    const array_qp= Object.entries(this.state.arr_qp);
    var arr_ri1 = Object.entries(this.state.arr_rI)
    arr_ri1 = arr_ri1.slice(0,5)
    var arr_rq1 = Object.entries(this.state.arr_rQ)
    arr_rq1 = arr_rq1.slice(0,5)
    console.log(array)
    return (
      <div>
        <Sidebar>
        <div className='mx-5'>
          <div className='x d-flex justify-content-center'>Dashboard</div><br/>
          <div className='d-flex justify-content-center'>
            <div className='p row '>
              <div className='text text-center invoice pb-3 col col-md-5 col-lg col-sm-12 shadow'>
                <div className='text-center'>Invoice</div>
                <hr />
                <span className='text-center'>
                  <span className='pe-2 mx-2' style={{borderRight: "2px solid black"}}>
                    This month
                  </span>
                  <span className='text-center  border px-2' style={{background: '#D5FFFF',color: 'darkgreen'}}>{this.state.toti}</span>
                </span>
              </div>
              <div className='invoice text text-center pb-3 col col-md-5 col-lg col-sm-12 shadow'>
                <div className='text-center'>Quote</div>
                <hr />
                <span>
                  <span className='me-2 pe-2' style={{borderRight: "2px solid black"}}>
                    this month
                  </span>
                  <span className='text-center  border px-2' style={{background: '#D5FFFF',color: 'darkgreen'}}>{this.state.totq}</span>
                </span>
              </div>
              <div className='invoice text text-center pb-3 col col-md-5 col-lg col-sm-12 shadow'>
                <div className='text-center'>Payment</div>
                <hr />
                <span>
                  <span className='me-2 pe-2' style={{borderRight: "2px solid black"}}>
                    this month
                  </span>
                  <span className='text-center  border px-2' style={{background: '#D5FFFF',color: 'darkgreen'}}>{this.state.totp}</span>
                </span>
              </div>
              <div className='invoice text text-center pb-3 col col-md-5 col-lg col-sm-12 shadow'>
                <div className='text-center'>Due Payment</div>
                <hr />
                <span>
                  <span className='me-2 pe-2' style={{borderRight: "2px solid black"}}>
                    this month
                  </span>
                  <span className='text-center  border px-2' style={{background: '#FF8886',color: 'darkgreen'}}>{this.state.totdp}</span>
                </span>
              </div>
            </div>
          </div><br/>
          {/* 2nd row */}
          <div className='d-flex justify-content-center'>
            <div className='p row mr-0'>
              <div className='invoice col col-md-10 col-lg col-sm-12 shadow'>
                <div className='k row p-3'>
                  <div className='k col col-md-4 col-lg '>
                    <span className=''>Invoice Preview</span>
                    {/* {InvoiceData.map((item) => {
                      return (<div className="skill-item">
                        <div className="skill-info">
                          <p>{item.name} <span className=''>{item.perc}</span></p>
                        </div>
                        <div className="progress-line" data-percent="90%">
                          <span style={{ width: item.perc }}></span>
                        </div>
                      </div>)
                    })} */}
                    {array.map((item) => {
                      return (<div className="skill-item">
                        <div className="skill-info">
                          <p>{item[1].name} <span style={{float: "right"}}>{item[1].value}%</span></p>
                        </div>
                        <div className="progress-line" data-percent="90%">
                          <span style={{ width: item[1].value }}></span>
                        </div>
                      </div>)
                    })}
                  </div>
                  <div className='k col col-md-4 col-lg '>
                    <span className=''>Payment Preview</span>
                    {array.map((item) => {
                      return (<div className="skill-item">
                        <div className="skill-info">
                          <p>{item[1].name} <span style={{float: "right"}}>{item[1].value}%</span></p>
                        </div>
                        <div className="progress-line" data-percent="90%">
                          <span style={{ width: item[1].value }}></span>
                        </div>
                      </div>)
                    })}
                  </div>
                  <div className='k col col-md-4 col-lg '>
                    <span className=''>Quote Preview</span>
                    {array_qp.map((item) => {
                      return (<div className="skill-item">
                        <div className="skill-info">
                          <p>{item[1].name} <span style={{float: "right"}}>{item[1].value}%</span></p>
                        </div>
                        <div className="progress-line" data-percent="90%">
                          <span style={{ width: item[1].value }}></span>
                        </div>
                      </div>)
                    })}
                  </div>
  
                </div>
              </div>
  
              <div className='customer-pre col col-md-10 col-lg-3 col-sm-12 shadow'>
                <div className='text-center pt-3'>Customer Preview</div>
                <hr /><br /> 
                <div><Piechart val='20' /></div>
                <div className='text-center'>New Customer this Month</div>
                <hr />
                <div className='text-center'>Active Customers</div>
              </div>
            </div>
          </div><br/>
          {/* 3rd row */}
          <div className='d-flex justify-content-center'>
            <div className='p row mr-0'>
              <div className='invoice col col-md-10 col-lg col-sm-12 shadow'>
                <div className='py-4'>Recent Invoice</div>
                <div>
                  <table style={{margin:0,width:'100%'}}>
                    <tr>
                      <th style={{width:'10%'}}>S.no</th>
                      <th style={{width:'30%'}}>Name</th>
                      <th style={{width:'30%'}}>Total </th>
                      <th style={{width:'20%'}}>Status</th>
                    </tr>
                    {arr_ri1.map((item,index) => {
                      return (
                        <tr>
                          <td>{index = index+1}</td>
                          <td>{item[1].name}</td>
                          <td>{item[1].total}</td>
                          <td>{item[1].status}</td>
                        </tr>
                      )})}
                  </table>
                </div>
                
                
              </div>
              <div className='invoice col col-md-10 col-lg col-sm-12 shadow'>
                <div className='py-4'>Recent Quotes</div>
                <div>
                  <table style={{margin:0,width:'100%'}}>
                    <tr>
                      <th >S.no</th>
                      <th>Name</th>
                      <th >Total </th>
                      <th>Status</th>
                    </tr>
                    {arr_rq1.map((item,index) => {
                      return (
                        <tr>
                          <td>{index = index+1}</td>
                          <td>{item[1].name}</td>
                          <td>{item[1].total}</td>
                          <td>{item[1].status}</td>
                        </tr>
                      )})}
                  </table>
                </div>
              </div>
            </div>
          </div>
  
        </div>
        </Sidebar>
      </div>
    )
  }
}

export default Dashboard