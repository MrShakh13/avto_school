import React, { Component, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import icon1 from "../img/free-icon-edit-6488637 (2).png";
import icon2 from "../img/free-icon-delete-5396993.png";
import "./Employees.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import url from "../host";

export default class Employees extends Component {
  state = {
    data: [],
    formpages: 1,
    formpages2: 1,
    postperson: [],
    personid: 0,
    deleteData: {},
    putData: [],
    perosndata: {},
    getPutPerson: [],
    getGroup: []
  };

  openModal() {
    document.querySelector("#dd").style = "display:block";
  }
  openModal2() {
    document.querySelector("#dd2").style = "display:block";
  }

  closeModal() {
    document.querySelector(".modal11").style = "display:none";
  }
  closeModal2() {
    document.querySelector(".modal22").style = "display:none";
  }
  handleChange = (event) => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    this.setState({ value });
  };

  getData11() {
    axios.get(`${url}/person`).then((res) => {
      var abu = res.data;
      var abu2 = [];
      axios.get(`${url}/employee`).then((res1) => {
        for (let i = 0; i < res1.data.length; i++) {
          for (let j = 0; j < abu.length; j++) {
            if (abu[j].personid === res1.data[i].personid) {
              abu[j].positionid = res1.data[i].positionid;
              abu2.push(abu[j]);
            }
          }
        }
        axios.get(`${url}/position`).then((res2) => {
          for (let i = 0; i < res2.data.length; i++) {
            for (let j = 0; j < abu2.length; j++) {
              if (abu2[j].positionid === res2.data[i].positionid) {
                abu2[j].positiontitle = res2.data[i].positiontitle;
              }
            }
          }
          this.setState({ data: abu2 });
        });
      });
    });
  }
  getInfa(key) {
    axios.get(`${url}/person/${key}`).then(res => {
      this.setState({ getPutPerson: res.data })
    })


    // axios.get(`${url}/person`).then((res) => {
    //   const zb2 = [];
    //   for (let i = 0; i < res.data.length; i++) {
    //     if (res.data[i].personid === key) {
    //       zb2.push(res.data[i]);
    //       this.setState({ perosndata: res.data[i] });
    //     }
    //   }
    //   console.log(zb2);
    //   console.log(key);
    // });
  }
  openPageNumber(key) {
    this.setState({ formpages: key });
    switch (key) {
      case 1:
        document.querySelector(".lipage1").style =
          "border-bottom:4px solid gray";
        document.querySelector(".lipage2").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage3").style =
          "border-bottom:4px solid white";
        document.querySelector(".Apages1").style = "display:block";
        document.querySelector(".Apages2").style = "display:none";
        document.querySelector(".Apages3").style = "display:none";
        break;
      case 2:
        document.querySelector(".lipage2").style =
          "border-bottom:4px solid gray";
        document.querySelector(".lipage1").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage3").style =
          "border-bottom:4px solid white";
        document.querySelector(".Apages2").style = "display:block";
        document.querySelector(".Apages1").style = "display:none";
        document.querySelector(".Apages3").style = "display:none";
        break;
      case 3:
        document.querySelector(".lipage3").style =
          "border-bottom:4px solid gray";
        document.querySelector(".lipage2").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage1").style =
          "border-bottom:4px solid white";
        document.querySelector(".Apages3").style = "display:block";
        document.querySelector(".Apages2").style = "display:none";
        document.querySelector(".Apages1").style = "display:none";
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    this.openPageNumber(1);
    this.getData11();
    axios.get(`${url}/group`).then(res => {
      this.setState({ getGroup: res.data })
    })
  }

  postData1() {
    var formData = new FormData();
    formData.append("personlastname", document.querySelector("#form1").value);
    formData.append("personfirstname", document.querySelector("#form2").value);
    formData.append("personmiddlename", document.querySelector("#form3").value);
    formData.append("gender", document.querySelector("#form4").value);
    formData.append("dateofbirth", document.querySelector("#form5").value);
    // formData.append("photo", document.querySelector(".form6").files[0])
    this.setState({ postperson: formData });
    this.openPageNumber(2);
  }
  postData2() {
    var formData1 = this.state.postperson;
    formData1.append("passportseries", document.querySelector(".form7").value);
    formData1.append("passportnumber", document.querySelector(".form8").value);
    formData1.append("passportdate", document.querySelector(".form9").value);
    formData1.append("phone", document.querySelector(".form10").value);
    formData1.append("email", document.querySelector(".form11").value);
    var formAdress = new FormData();
    formAdress.append("region", document.querySelector(".aform1").value);
    formAdress.append("city", document.querySelector(".aform2").value);
    formAdress.append("street", document.querySelector(".aform3").value);
    formAdress.append("house", document.querySelector(".aform4").value);
    formAdress.append("building", document.querySelector(".aform5").value);
    formAdress.append("flat", document.querySelector(".aform6").value);
    this.setState({ postaddress: formAdress, postperson: formData1 });
    axios.post(`${url}/address`, formAdress).then((res) => {
      var kluch = 0;
      axios.get(`${url}/address`).then((res1) => {
        for (let i = 0; i < res1.data.length; i++) {
          if (
            res1.data[i].region === document.querySelector(".aform1").value &&
            res1.data[i].city === document.querySelector(".aform2").value &&
            res1.data[i].street == document.querySelector(".aform3").value &&
            res1.data[i].house == document.querySelector(".aform4").value &&
            res1.data[i].building == document.querySelector(".aform5").value &&
            res1.data[i].flat == document.querySelector(".aform6").value
          ) {
            kluch = res1.data[i].addressid;
          }
        }
        formData1.append("addressid", kluch);
        axios.post(`${url}/person`, formData1).then((res2) => {
          this.openPageNumber(3);
          console.log("ishladi");
          axios.get(`${url}/person`).then((res) => {
            res.data.map((item) => {
              console.log(
                item.passportseries, document.querySelector(".form7").value,
                item.passportnumber, document.querySelector(".form8").value
              );
              if (
                item.passportseries == document.querySelector(".form7").value &&
                item.passportnumber == document.querySelector(".form8").value
              ) {
                this.setState({ personid: item.personid });
                console.log(item.personid, "personid");
              }
            });
          });
        });
      });
    });
  }
  postEmployee() {
    this.closeModal();
    var data = new FormData();
    data.append("positiontitle", document.querySelector(".dform1").value);
    axios.post(`${url}/position`, data).then((res) => {
      var labor = new FormData();
      labor.append("laborname", document.querySelector(".dform2").value);
      axios.post(`${url}/labor`, labor).then((res1) => {
        var positionid = 0;
        var labor = 0;
        axios.get(`${url}/position`).then((res2) => {
          for (let i = 0; i < res2.data.length; i++) {
            if (
              res2.data[i].positiontitle ==
              document.querySelector(".dform1").value
            ) {
              positionid = res2.data[i].positionid;
            }
          }
          axios.get(`${url}/labor`).then((res3) => {
            for (let i = 0; i < res3.data.length; i++) {
              if (
                res3.data[i].laborname ==
                document.querySelector(".dform2").value
              ) {
                labor = res3.data[i].laborid;
              }
            }
            var data12 = new FormData();
            data12.append("personid", this.state.personid);
            data12.append("laborid", labor);
            data12.append("positionid", positionid);
            console.log(this.state.personid, "whay");
            data12.append("hiredate", document.querySelector(".dform3").value);
            data12.append(
              "dismissaldate",
              document.querySelector(".dform4").value
            );
            data12.append(
              "medical_cert",
              document.querySelector(".dform5").value
            );
            data12.append("education", document.querySelector(".dform6").value);

            axios.post(`${url}/employee`, data12).then((res5) => {
              alert("Добавлено");
              window.location.reload();
            });
          });
        });
      });
    });
  }
  deletePerson(key) {
    axios.get(`${url}/employee`).then((res) => {
      var kluch = true;
      res.data.map((item) => {
        if (item.personid == key) {
          kluch = false;
          document.querySelector(".modal12").style = "display:none";
          axios.delete(`${url}/employee/${item.employeeid}`).then((res) => {
            axios.delete(`${url}/person/${item.personid}`).then((res) => {
              axios.delete(`${url}/position/${item.positionid}`).then((res) => {
                axios
                  .delete(`${url}/address/${this.state.deleteData.addressid}`)
                  .then((res) => {
                    axios.delete(`${url}/labor/${item.laborid}`).then((res) => {
                      alert("Удалено");
                      window.location.reload();
                    });
                  });
              });
            });
          });
        }
      });

      if (kluch) {
        axios
          .delete(`${url}/person/${this.state.deleteData.personid}`)
          .then((res) => {
            axios
              .delete(`${url}/address/${this.state.deleteData.addressid}`)
              .then((res) => {
                document.querySelector(".modal12").style = "display:none";
                window.location.reload();
              });
          });
      }
    });

  }

  putdata(key) {
    var addressidPerson = key.addressid
    var PutedPerson = new FormData()
    PutedPerson.append("personlastname", document.querySelector('.personlastname').value)
    PutedPerson.append("personfirstname", document.querySelector('.personfirstname').value)
    PutedPerson.append("personmiddlename", document.querySelector('.personmiddlename').value)
    PutedPerson.append("dateofbirth", document.querySelector('.birthDay').value + 'T00:00:00.000Z')
    PutedPerson.append("gender", document.querySelector('.jinsi').value)
    PutedPerson.append("passportseries", document.querySelector('.passportseries').value)
    PutedPerson.append("passportnumber", document.querySelector('.passportnumber').value)
    PutedPerson.append("passportdate", document.querySelector('.vidachiData').value + 'T00:00:00.000Z')
    PutedPerson.append("phone", document.querySelector('.form-control').value)
    PutedPerson.append("email", document.querySelector('.emailPerson').value)
    PutedPerson.append("addressid", addressidPerson)
    axios.put(`${url}/person/${key.personid}`, PutedPerson).then(res => {
      console.log(res.data);
    })
    console.log(document.querySelector('.form-control').value);

  }
  closededd() {
    document.querySelector('#dd2').style = 'display: none'
  }

  render() {
    return (
      <div className="body">
        <div className="modal12">
          <div className="form12">
            <h3>Удалить</h3>
            <h4 className="deleteperson1">
              {this.state.deleteData.personlastname}
            </h4>
            <h4 className="deleteperson1">
              {this.state.deleteData.personfirstname}
            </h4>
            <button
              className="df_button1"
              onClick={() => {
                document.querySelector(".modal12").style = "display:none";
              }}
            >
              Назад
            </button>
            <button
              className="df_button2"
              onClick={() => {
                this.deletePerson(this.state.deleteData.personid);
              }}
            >
              Удалить
            </button>
          </div>
        </div>
        <div id="dd" className="modal11">
          <ul className="tabs11">
            <li
              className="lipage1"
            // onClick={() => {
            //   this.openPageNumber(1);
            // }}
            >
              Основная информация
            </li>
            <li
              className="lipage2"
            // onClick={() => {
            //   this.openPageNumber(2);
            // }}
            >
              Контакты
            </li>
            <li
              className="lipage3"
            // onClick={() => {
            //   this.openPageNumber(3);
            // }}
            >
              Информация о работе
            </li>
          </ul>

          <div className="Apages1">
            <div className="oyna101">
              <div className="pages11">
                <label htmlFor="form1">Фамилия</label>
                <br />
                <input id="form1" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form2">Имя</label>
                <br />
                <input id="form2" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form3">Отчество</label>
                <br />
                <input id="form3" type="text" />
              </div>
              <div className="pages11">
                <br />
                <label htmlFor="form4"> Пол</label>
                <br />
                <select name="" id="form4">
                  <option value="М">М</option>
                  <option value="Ж">Ж</option>
                </select>
              </div>
              <div className="pages11">
                <label htmlFor="form5">Дата рождения</label>
                <br />

                <input id="form5" type="date" />
              </div>
            </div>
            <div className="pages12">
              <label htmlFor="form6"></label>
              <div className="upload_file">
                <h1>+</h1>
                <p>(Перетащите или щелкните, чтобы вставить)</p>
              </div>
              <input className="form6" type="file" />
            </div>
            <div className="df_button">
              <button
                className="df_button1"
                onClick={() => {
                  this.closeModal();
                }}
              >
                Назад
              </button>
              <button
                className="df_button2"
                onClick={() => {
                  this.postData1();
                }}
              >
                Сохранить
              </button>
            </div>
          </div>

          <div className="Apages2">
            <div className="oyna101">
              <div className="pages11">
                <label htmlFor="form7">Серия паспорта</label>
                <br />
                <input className="form7" placeholder="0000" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form8"> Номер паспорта</label>
                <br />
                <input className="form8" placeholder="000000" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form9"> Дата выдачи</label>
                <br />
                <input className="form9" type="date" />
              </div>
              <div className="pages11">
                <br />
                <label htmlFor="form10"> Телефон</label>
                <br />

                <input className="form10" type="tel" />
              </div>
              <div className="pages11">
                <label htmlFor="form11">Эл.почта</label>
                <br />
                <input
                  className="form11"
                  placeholder="info@gmail.com"
                  type="email"
                />
              </div>
            </div>
            <label
              htmlFor="form12"
              style={{
                marginLeft: "10%",
                marginTop: "50px",
                marginBottom: "30px",
              }}
            >
              Адрес регистрации
            </label>
            <div className="oyna101">
              <div className="pages11">
                <input
                  className="aform1"
                  placeholder="Страна"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform2"
                  placeholder="Город"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform3"
                  placeholder="Улица"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform4"
                  placeholder="Номер дома"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform5"
                  placeholder="Строение"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform6"
                  placeholder="Квартира"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
            </div>
            <div className="df_button">
              {/* <button
                className="df_button1"
                // onClick={() => {
                //   this.openPageNumber(1);
                // }}
              >
                Назад
              </button> */}
              <button
                className="df_button2"
                onClick={() => {
                  this.postData2();
                }}
              >
                Сохранить
              </button>
            </div>
          </div>

          <div className="Apages3">
            <div className="oyna101">
              <div className="pages11">
                <label htmlFor="">Должность</label>
                <br />
                <input className="dform1" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor=""> Образование</label>
                <br />
                <input className="dform2" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="">Дата приема</label>
                <br />
                <input className="dform3" type="date" />
              </div>
              <div className="pages11">
                <br />
                <label htmlFor=""> Дата увольнения</label>
                <br />
                <input className="dform4" type="date" />
              </div>
              <div className="pages11">
                <label htmlFor="">Дата выдачи мед.справки</label>
                <br />
                <input className="dform5" type="date" />
              </div>
              <div className="pages11">
                <label htmlFor="">Курсы/ Сертификаты</label>
                <br />
                <input className="dform6" type="text" />
              </div>
            </div>
            <div className="df_button">
              {/* <button
                className="df_button1"
                // onClick={() => {
                //   this.openPageNumber(2);
                // }}
              >
                Назад
              </button> */}
              <button
                className="df_button2"
                onClick={() => {
                  this.postEmployee();
                }}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
        <div id="dd2" className="modal11">
          {
            this.state.getPutPerson.map(item => {
              return (
                <div className="Apages1">
                  <div className="oyna101">
                    <div className="pages11">
                      <label htmlFor="form1">Фамилия</label>
                      <br />
                      <input
                        placeholder={item.personlastname}
                        className="personmiddlename"
                        type="text"
                      />
                    </div>
                    <div className="pages11">
                      <label htmlFor="form2">Имя</label>
                      <br />
                      <input className="personlastname" placeholder={item.personfirstname} type="text" />
                    </div>
                    <div className="pages11">
                      <label htmlFor="form3">Отчество</label>
                      <br />
                      <input className="personfirstname" placeholder={item.personmiddlename} type="text" />
                    </div>
                    <div className="pages11">
                      <br />
                      <label htmlFor="form4"> Пол</label>
                      <br />
                      <select name="" className="jinsi">
                        <option value="М">М</option>
                        <option value="Ж">Ж</option>
                      </select>
                    </div>
                    <div className="pages11">
                      <label htmlFor="form5">Дата рождения</label>
                      <br />

                      <input className="birthDay" type="date" />
                    </div>
                  </div>
                </div>

              )
            })
          }
          {
            this.state.getPutPerson.map(item => {
              return (
                <div className="Apages2">
                  <div className="oyna101">
                    <div className="pages11">
                      <label htmlFor="form7">Серия паспорта</label>
                      <br />
                      <input className="passportseries" placeholder={item.passportseries} type="text" />
                    </div>
                    <div className="pages11">
                      <label htmlFor="form8"> Номер паспорта</label>
                      <br />
                      <input className="passportnumber" placeholder={item.passportnumber} type="text" />
                    </div>
                    <div className="pages11">
                      <label htmlFor="form9"> Дата выдачи</label>
                      <br />
                      <input className="vidachiData" type="date" />
                    </div>
                    <div className="pages11">
                      <br />
                      <label htmlFor="form10"> Телефон</label>
                      <br />

                      <PhoneInput
                        id="userNumber2"
                        className="userNumber2"
                        country={"ru"}
                      />
                    </div>
                    <div className="pages11">
                      <label htmlFor="form11">Эл.почта</label>
                      <br />
                      <input
                        className="emailPerson"
                        placeholder={item.email}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="df_button">
                    <button
                      className="df_button1"
                      onClick={() => {
                        this.closededd();
                      }}
                    >
                      Назад
                    </button>

                    <button
                      className="df_button2"
                      onClick={() => {
                        this.putdata(item);
                      }}
                    >
                      Сохранить0
                    </button>
                  </div>
                </div>

              )
            }
            )}
        </div>
        <h1 className="bigah1">Список сотрудников</h1>
        {/* <div>
          <button
            id="btnlar1"
            onClick={() => {
              this.openModal();
            }}
            >
            + Добавить сотрудника
          </button>
            </div> */}
        <div className="dropw">
        <select className="selectRgroup">
          <option>Должность</option>
          </select>
          <select className="selectRgroup">
            {
              this.state.getGroup.map(item => {
                return(
                  <option>{item.groupname}</option>
                )
              })
            }
          </select>
          <select className="selectRgroup">
            <option>Занятие</option>
          </select>
          <button id="btnlar1" onClick={() => this.openModal()}>
            Добавить сотрудника
          </button>
        </div>

        <div id="tables">
          <div id="names">
            <p>ID</p>
            <p>Фамилия</p>
            <p>Имя</p>
            <p>Отчество</p>
            <p>
              Дата <br /> рождения
            </p>
            <p>Должность</p>
            <p>
              Дата <br /> добавления
            </p>
            <p>Действие</p>
          </div>
          {this.state.data.map((item, key) => {
            if (key % 2 === 0) {
              return (
                <div id="inform2">
                  <div id="inform-p">
                    <p className="itemPrsn">{item.personid}</p>
                    <p className="itemPrsnLst">{item.personlastname}</p>
                    <p className="itemPrsnLst">{item.personfirstname}</p>
                    <p className="itemPrsnLst">{item.personmiddlename}</p>
                    <p className="itemPrsnLst">
                      {item.dateofbirth.slice(0, 10)}
                    </p>
                    <p className="itemPrsnLst">{item.positiontitle}</p>
                    <p className="itemPrsnLst">
                      {item.syscreatedatutc.slice(0, 10)}
                    </p>
                    <div id="iconci">
                      {/* <img src={icon1} onClick={()=>postModalopen(item.personid)} alt='' /> */}
                      <img
                        onClick={() => {
                          this.openModal2();
                          this.getInfa(item.personid);
                        }}
                        src={icon1}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          document.querySelector(".modal12").style =
                            "display:flex";
                          this.setState({ deleteData: item });
                        }}
                        src={icon2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div id="inform1">
                  <div id="inform-p">
                    <p className="itemPrsn">{item.personid}</p>
                    <p className="itemPrsnLst">{item.personlastname}</p>
                    <p className="itemPrsnLst">{item.personfirstname}</p>
                    <p className="itemPrsnLst">{item.personmiddlename}</p>
                    <p className="itemPrsnLst">
                      {item.dateofbirth.slice(0, 10)}
                    </p>
                    <p className="itemPrsnLst">{item.positiontitle}</p>
                    <p className="itemPrsnLst">
                      {item.syscreatedatutc.slice(0, 10)}
                    </p>
                    <div id="iconci">
                      {/* <img src={icon1} onClick={()=>postModalopen(item.personid)} alt='' /> */}
                      <img
                        onClick={() => {
                          this.openModal2();
                          this.getInfa(item.personid);
                        }}
                        src={icon1} alt="" />
                      <img
                        onClick={() => {
                          document.querySelector(".modal12").style =
                            "display:flex";
                          this.setState({ deleteData: item });
                        }}
                        src={icon2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}

          <div id="inform1">
            <div id="inform-p">
              {/* <p>1</p>
          <p>Марина</p>
          <p>Вероника</p>
          <p>Петровна</p>
          <p>20/03/1986</p>
          <p>Воспитатель</p>
          <p>15/07/2020</p>
          <div id='iconci'>
          <img src={icon1} alt=''/> 
          <img src={icon2} alt=''/>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
