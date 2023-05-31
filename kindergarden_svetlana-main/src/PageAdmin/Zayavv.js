import "./css/Zayavv.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import icon1 from "../img/free-icon-edit-6488637 (2).png";
import icon2 from "../img/free-icon-delete-5396993.png";
import axios from "axios";
import url from "../host.js";
export default class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios.get(`${url}/contact`).then((res) => {
      this.setState({ data: res.data });
    });
  }
  openModal(key) {
    axios.delete(`${url}/contact/${key}`).then(res => {
      console.log(res.data);
      alert('Удалено')
      window.location.reload()
    })
  }

  render() {
    return (
      <div className="nodir53">
        <div className="modallPut"></div>
        <h1>Заявки</h1>

        <div className=" bigbox">
          <div className="bodyadmpn">
            <div className="btnadmp_box1">
              <table className="btnchil_table">
                <tr className="btnadmp_tr">
                  <th className="btnadmp_th1">ID</th>

                  <th className="btnadmp_th"> Имя</th>
                  <th className="btnadmp_th">Эл.почта</th>
                  <th className="btnadmp_th">Телефон</th>
                  <th className="btnadmp_th">Дата поступления</th>

                  <th className="btnadmp_th2">Примечание </th>
                </tr>
                {this.state.data.map((item, key) => {
                    return (
                      <tr className="btnadmp_tr1">
                        <td className="btnadmp_td2"> {key+1}</td>
                        <td className="btnadmp_td2">{item.fullname}</td>
                        <td className="btnadmp_td2">{item.email}</td>
                        <td className="btnadmp_td2">{item.phone} </td>
                        <td className="btnadmp_td2">
                          {item.syscreatedatutc.slice(0, 10)}
                        </td>
  
                        <td className="btnadmp_td2">
                        <button className="butadmp2">
                          <img onClick={() => this.openModal(item.contractid)} src={icon2} alt="" />
                        </button>
                        </td>
                      </tr>
                    )
                  
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
