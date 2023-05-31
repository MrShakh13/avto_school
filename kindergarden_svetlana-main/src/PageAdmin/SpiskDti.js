import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import icon1 from "../img/icon1.svg";
import icon2 from "../img/icon21.svg";
import "./Employees.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import url from "../host";
import image_file from "../img/free-icon-cloud-upload-7838250 1.png";

export default class ChildAdmin extends Component {
  state = {
    data: [],
    formpages: 1,
    postchild: [],
    childid: 0,
    deleteData: {},
    parent: [],
    oneperson: {},
    legal_rep: {},
    relation: {},
    group: [],
    voditelGroup: [],
    subject_group: [],
    subject: [],
    postGroup: [],
    legalrep: "",
    Monro: [],
    Getted: [],
    nomi: [],
  };

  openModal() {
    document.querySelector(".modal11").style = "display:block";
    console.log("kfkjfjfjf");
  }
  closeModal() {
    document.querySelector(".modal11").style = "display:none";
    window.location.reload();
  }
  handleChange = (event) => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    this.setState({ value });
  };
  getDataChild() {
    axios
      .get(`${url}/child`)
      .then((res) => {
        var abu = res.data;
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getSubject = (event) => {
    console.log("ishlavoti");
    const uu = event.target.value;
    const uu2 = parseInt(uu);
    axios.get(`${url}/subject`).then((res) => {
      var dataA = [];
      res.data.map((item) => {
        if (item.subjectgroupid === uu2) {
          dataA.push(item);
        }
      });
      this.setState({ subject: dataA });
      console.log(dataA, "fgjaeigjmergjmerwiog");
    });
  };

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
        document.querySelector(".lipage4").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage5").style =
          "border-bottom:4px solid white";
        document.querySelector(".Apages1").style = "display:block";
        document.querySelector(".Apages2").style = "display:none";
        document.querySelector(".Apages3").style = "display:none";
        document.querySelector(".Apages4").style = "display:none";
        document.querySelector(".Apages5").style = "display:none";
        break;
      case 2:
        this.state.parent.map((item) => {
          var kluch = item;
          if (item.personid == document.querySelector("#child7").value) {
            axios.get(`${url}/address`).then((res) => {
              for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].addressid == item.addressid) {
                  console.log(res.data[i].addressid, item.addressid);
                  kluch.region = res.data[i].region;
                  kluch.city = res.data[i].city;
                  kluch.street = res.data[i].street;
                  kluch.house = res.data[i].house;
                  kluch.building = res.data[i].building;
                  kluch.flat = res.data[i].flat;
                }
              }
              axios.get(`${url}/Legal_Rep`).then((ress) => {
                for (let i = 0; i < ress.data.length; i++) {
                  if (item.personid === ress.data[i].personid) {
                    kluch.legalrep = ress.data[i].legalrepid;
                    kluch.company = ress.data[i].company;
                    this.setState({ oneperson: kluch });
                  }
                }
              });
            });
          }
        });
        document.querySelector(".lipage2").style =
          "border-bottom:4px solid gray";
        document.querySelector(".lipage1").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage3").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage4").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage5").style =
          "border-bottom:4px solid white";
        document.querySelector(".Apages2").style = "display:block";
        document.querySelector(".Apages1").style = "display:none";
        document.querySelector(".Apages3").style = "display:none";
        document.querySelector(".Apages4").style = "display:none";
        document.querySelector(".Apages5").style = "display:none";
        break;
      case 3:
        document.querySelector(".lipage3").style =
          "border-bottom:4px solid gray";
        document.querySelector(".lipage2").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage1").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage4").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage5").style =
          "border-bottom:4px solid white";
        document.querySelector(".Apages3").style = "display:block";
        document.querySelector(".Apages2").style = "display:none";
        document.querySelector(".Apages1").style = "display:none";
        document.querySelector(".Apages4").style = "display:none";
        document.querySelector(".Apages5").style = "display:none";
        break;
      case 4:
        document.querySelector(".lipage4").style =
          "border-bottom:4px solid gray";
        document.querySelector(".lipage1").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage3").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage2").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage5").style =
          "border-bottom:4px solid white";
        document.querySelector(".Apages4").style = "display:block";
        document.querySelector(".Apages1").style = "display:none";
        document.querySelector(".Apages3").style = "display:none";
        document.querySelector(".Apages5").style = "display:none";
        document.querySelector(".Apages2").style = "display:none";
        break;
      case 5:
        document.querySelector(".lipage5").style =
          "border-bottom:4px solid gray";
        document.querySelector(".lipage2").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage1").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage4").style =
          "border-bottom:4px solid white";
        document.querySelector(".lipage3").style =
          "border-bottom:4px solid white";
        document.querySelector(".Apages5").style = "display:block";
        document.querySelector(".Apages2").style = "display:none";
        document.querySelector(".Apages1").style = "display:none";
        document.querySelector(".Apages4").style = "display:none";
        document.querySelector(".Apages3").style = "display:none";
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    axios.get(`${url}/Legal_Rep`).then((res) => {
      var perent = [];
      var legal = res.data;
      axios.get(`${url}/person`).then((res2) => {
        for (let i = 0; i < res2.data.length; i++) {
          for (let e = 0; e < legal.length; e++) {
            if (legal[e].personid === res2.data[i].personid) {
              // console.log(res2.data[i]);
              perent.push(res2.data[i]);
            }
          }
        }
        console.log(perent, "kook");
        this.setState({ parent: perent });
      });
    });

    axios.get(`${url}/group`).then((res) => {
      this.setState({ group: res.data });
    });
    axios.get(`${url}/subject_group`).then((res) => {
      this.setState({ subject_group: res.data });
    });
    this.openPageNumber(1);
    this.getDataChild();
  }
  // get input child data post address
  postData1() {
    var formData = new FormData();
    formData.append("childlastname", document.querySelector("#child1").value);
    formData.append("childfirstname", document.querySelector("#child2").value);
    formData.append("childmiddlename", document.querySelector("#form3").value);
    formData.append("gender", document.querySelector("#child3").value);
    formData.append("dateofbirth", document.querySelector("#child5").value);
    formData.append("personid", document.querySelector("#child7").value);
    formData.append(
      "certificateofbirth",
      document.querySelector("#child6").value
    );
    var childAddress = new FormData();
    childAddress.append("region", document.querySelector(".caform1").value);
    childAddress.append("city", document.querySelector(".caform2").value);
    childAddress.append("street", document.querySelector(".caform3").value);
    childAddress.append("house", document.querySelector(".caform4").value);
    childAddress.append("building", document.querySelector(".caform5").value);
    childAddress.append("flat", document.querySelector(".caform6").value);
    axios.post(`${url}/address`, childAddress).then((res) => {
      axios.get(`${url}/address`).then((res2) => {
        res2.data.map((item) => {
          if (
            item.region == document.querySelector(".caform1").value &&
            item.city == document.querySelector(".caform2").value &&
            item.street == document.querySelector(".caform3").value &&
            item.house == document.querySelector(".caform4").value &&
            item.building == document.querySelector(".caform5").value &&
            item.flat == document.querySelector(".caform6").value
          ) {
            formData.append("addressid", item.addressid);
            this.openPageNumber(2);
            this.setState({ postchild: formData });
          }
        });
      });
    });
  }
  postData2() {
    // var legal_rep = new FormData();
    // legal_rep.append("personid", this.state.oneperson.personid);
    // legal_rep.append("company", document.querySelector(".companyperson").value);
    var relation = new FormData();
    relation.append("status", document.querySelector(".childstateus").value);
    relation.append("legalrepid", this.state.oneperson.legalrep);
    this.setState({ relation: relation });
    this.openPageNumber(3);
    // axios.post(`${url}/legal_rep`, legal_rep).then((res) => {
    //   axios.get(`${url}/legal_rep`).then((res1) => {
    //     res1.data.map((item) => {
    //       if (
    //         item.personid == this.state.oneperson.personid &&
    //         item.company == document.querySelector(".companyperson").value
    //       ) {
    //         relation.append("legalrepid", item.legalrepid);
    //         this.setState({ legalrep: item.legalrepid });
    //         this.setState({ relation: relation });
    //         this.openPageNumber(3);
    //       }
    //     });
    //   });
    // });
    console.log(this.state.oneperson.legalrep);
    console.log(relation);
  }

  postData3() {
    var postchild = this.state.postchild;
    var postGroup = new FormData();
    postGroup.append("number", document.querySelector("#group3").value);
    postGroup.append("date", document.querySelector(".group2").value);
    postGroup.append("legalrepid", this.state.legalrep);
    // this.setState({ postGroup: postGroup });
    postchild.append("groupid", document.querySelector("#group0").value);
    this.setState({ postchild: postchild });
    this.openPageNumber(4);
  }

  postData4() {
    var postchild = this.state.postchild;
    postchild.append("health", document.querySelector("#med1").value);
    postchild.append("isregisteredwith", document.querySelector("#med3").value);
    postchild.append("allergy", document.querySelector("#med7").value);
    postchild.append("deviations", document.querySelector("#med4").value);
    postchild.append("medicines", document.querySelector("#med5").value);
    postchild.append(
      "healthrestrictions",
      document.querySelector("#med6").value
    );
    postchild.append("diet", document.querySelector("#med9").value);
    postchild.append("comment", document.querySelector("#med8").value);
    console.log(postchild);
    axios.post(`${url}/child`, postchild).then((res) => {
      axios.get(`${url}/child`).then((res) => {
        res.data.map((item) => {
          if (
            postchild.get("childlastname") == item.childlastname &&
            postchild.get("childfirstname") == item.childfirstname &&
            postchild.get("childmiddlename") == item.childmiddlename &&
            postchild.get("addressid") == item.addressid
          ) {
            var relation = this.state.relation;
            relation.append("childid", item.childid);
            axios.post(`${url}/relation`, relation).then((res) => {
              this.openPageNumber(5);
              // window.location.reload();
            });
          }
        });
      });
    });
    // window.location.reload()
  }

  // getGroupVaditel(event) {
  //   var uu =event.target.value
  //   var uu2 =parseInt(uu)
  //   // this.setState({ namef: event.target.value });
  //   // console.log(this.state.namef,"ddd");
  //   var uu3 =[]
  //   axios.get(`${url}/group_emp`).then((res)=>{
  //       for (let i = 0; i < res.data.length; i++) {
  //        if (res.data[i].groupid===uu2) {
  //         console.log(res.data[i],"jjjjjjjjj");
  //         axios.get(`${url}/employee`).then((res2)=>{
  //          for (let w = 0; w < res2.data.length; w++) {
  //           if (res2.data[w].employeeid===res.data[i].employeeid) {
  //             axios.get(`${url}/person`).then((res3)=>{
  //               for (let e = 0; e < res3.data.length; e++) {
  //                if (res3.data[e].personid===res2.data[w].personid) {
  //                 console.log(res3.data[e],"fff");
  //                 uu3.push(res3.data[e])

  //                }
  //               }
  //             })
  //           }
  //          }
  //         })
  //        }
  //       }
  //   })
  //   // console.log(event.target.value,"kfgkgkgkgkgkgkgkgkgk");
  //   // console.log(uu2, "rabotate");
  //   // console.log( document.querySelector("#group0").value,"ejarijgesughhwurg");
  //   this.setState({nomi:uu3})
  // }
  getGroupVaditel = (event) => {
    const uu = event.target.value;
    const uu2 = parseInt(uu);
    const uu3 = [];

    axios.get(`${url}/group_emp`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].groupid === uu2) {
          console.log(res.data[i], "jjjjjjjjj");
          axios.get(`${url}/employee`).then((res2) => {
            for (let w = 0; w < res2.data.length; w++) {
              if (res2.data[w].employeeid === res.data[i].employeeid) {
                axios.get(`${url}/person`).then((res3) => {
                  for (let e = 0; e < res3.data.length; e++) {
                    if (res3.data[e].personid === res2.data[w].personid) {
                      console.log(res3.data[e], "fff");
                      uu3.push(res3.data[e]);
                    }
                  }
                  this.setState({ nomi: uu3 }, () => {
                    console.log(this.state.nomi);
                  });
                });
              }
            }
          });
        }
      }
    });
  };

  deletechild(key) {
    axios
      .delete(`${url}/child/${this.state.deleteData.childid}`)
      .then((res) => {
        document.querySelector(".modal12").style = "display:none";
        document.querySelector(".modal12").style = "display:none";
        window.location.reload();
      });
  }

  Getperson(key) {
    var childid = key.childid;
    // var groupid = key.groupid;
    // var addressid = key.addressid;
    // console.log(groupid);
    axios.get(`${url}/child/${childid}`).then((res) => {
      this.setState({ Monro: res.data });
    });
    console.log(this.state.Monro);
    document.querySelector(".modal1122").style = "display: block";
    document.querySelector(".mfhtrg").style = "display: none";
  }

  closeModal1122() {
    document.querySelector(".modal1122").style = "display: none";
    document.querySelector(".mfhtrg").style = "display: block";
  }
  closeModal1123(key) {
    // var childid = key.childid;
    var groupid = key.groupid;
    var addressid = key.addressid;
    var formData = new FormData();
    formData.append("addressid", addressid);
    formData.append("groupid", groupid);
    formData.append("childlastname", document.querySelector(".itmChild").value);
    formData.append(
      "childfirstname",
      document.querySelector(".itmChildfrst").value
    );
    formData.append(
      "childmiddlename",
      document.querySelector(".itmChilmdl").value
    );
    formData.append("gender", document.querySelector(".childGndr").value);
    formData.append(
      "certificateofbirth",
      document.querySelector(".childCertifi").value
    );
    formData.append("health", document.querySelector(".childHealth").value);
    formData.append(
      "isregisteredwith",
      document.querySelector(".childisregisteredwith").value + "T00:00:00.000Z"
    );
    formData.append("allergy", document.querySelector(".childAll").value);
    formData.append(
      "deviations",
      document.querySelector(".childdeviations").value
    );
    formData.append(
      "medicines",
      document.querySelector(".childmedicines").value
    );
    formData.append(
      "dateofbirth",
      document.querySelector(".childdateofbirth").value + "T00:00:00.000Z"
    );
    formData.append(
      "healthrestrictions",
      document.querySelector(".childhealthrestrictions").value
    );
    formData.append("diet", document.querySelector(".childdiet").value);
    formData.append("comment", document.querySelector(".childdiet").value);
    formData.append("photo", document.querySelector(".fileChild").file);
    console.log(key);
    axios
      .put(`${url}/child/${key.childid}`, formData)
      .then((res) => {
        alert("updated");
        window.location = "/spiskdti";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div className="body">
        <div className="modal12">
          <div className="form12">
            <h3>Удалить</h3>
            <h4 className="deletechild1">
              {this.state.deleteData.childlastname}
            </h4>
            <h4 className="deletechild1">
              {this.state.deleteData.childfirstname}
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
                this.deletechild(this.state.deleteData.childid);
              }}
            >
              Удалить
            </button>
          </div>
        </div>
        <div className="modal11">
          <ul className="tabs11">
            <li
              className="lipage1"
              onClick={() => {
                this.openPageNumber(1);
              }}
            >
              Информация о ребенке
            </li>
            <li
              className="lipage2"
              onClick={() => {
                this.openPageNumber(2);
              }}
            >
              Представители
            </li>
            <li
              className="lipage3"
              onClick={() => {
                this.openPageNumber(3);
              }}
            >
              Обучение
            </li>
            <li
              className="lipage4"
              onClick={() => {
                this.openPageNumber(4);
              }}
            >
              Медицинское заключение
            </li>
            <li
              className="lipage5"
              onClick={() => {
                this.openPageNumber(5);
              }}
            >
              Документы
            </li>
          </ul>

          <div className="Apages1">
            <div className="oyna101">
              <div className="pages11">
                <label htmlFor="child1">Фамилия</label>
                <br />
                <input id="child1" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="child2">Имя </label>
                <br />
                <input id="child2" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form3">Отчество</label>
                <br />
                <input id="form3" type="text" />
              </div>

              <div className="pages11">
                <label htmlFor="child3"> Пол </label>
                <br />
                <select name="child3" id="child3">
                  <option value="м">м</option>
                  <option value="ж">ж</option>
                </select>
              </div>
              <div className="pages11">
                <label htmlFor="child5">Дата рождения </label>
                <br />
                <input id="child5" type="date" />
              </div>
              <div className="pages11">
                <label htmlFor="child7"> Родители </label>
                <br />
                <select name="child7" id="child7">
                  {this.state.parent.map((item) => {
                    return (
                      <option value={item.personid}>
                        {item.personlastname} {item.personfirstname}{" "}
                        {item.personmiddlename}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="pages11">
                <label htmlFor="child6">Свидетельство о рождении </label>
                <br />
                <input id="child6" placeholder="III-КЕ 456789" type="text" />
              </div>
              <div className="pages11">
                <br />
                <label htmlFor="form4"> СНИЛС </label>
                <br />
                <input type="text" id="form4" />
              </div>
              <div className="pages11">
                <label htmlFor="form5">Полис ОМС</label>
                <br />
                <input id="form5" type="text" />
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
                  className="caform1"
                  placeholder="Страна"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="caform2"
                  placeholder="Город"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="caform3"
                  placeholder="Улица"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="caform4"
                  placeholder="Номер дома"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="caform5"
                  placeholder="Строение"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="caform6"
                  placeholder="Квартира"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
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
                <label htmlFor="prosta"> Фамилия</label>
                <br />
                <input
                  name="prosta"
                  value={this.state.oneperson.personlastname}
                  id=""
                />
              </div>
              <div className="pages11">
                <label htmlFor="form8">Имя</label>
                <br />
                <input
                  value={this.state.oneperson.personfirstname}
                  className="form8"
                  type="text"
                />
              </div>
              <div className="pages11">
                <label htmlFor="form9">Отчество</label>
                <br />
                <input
                  value={this.state.oneperson.personmiddlename}
                  className="form9"
                  type="text"
                />
              </div>
              <div className="pages11">
                <label htmlFor="childstateus">Статус </label>
                <br />
                <input className="childstateus" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form11">Место работы </label>
                <br />
                <input
                  value={this.state.oneperson.company}
                  className="companyperson"
                  type="text"
                />
              </div>
              <div className="pages11">
                <label htmlFor="form11">Телефон</label>
                <br />
                <PhoneInput
                  className="form11"
                  value={this.state.oneperson.phone}
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
                  value={this.state.oneperson.region}
                  className="aform1"
                  placeholder="Страна"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  value={this.state.oneperson.city}
                  className="aform2"
                  placeholder="Город"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform3"
                  value={this.state.oneperson.street}
                  placeholder="Улица"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform4"
                  value={this.state.oneperson.house}
                  placeholder="Номер дома"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform5"
                  value={this.state.oneperson.building}
                  placeholder="Building"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform6"
                  value={this.state.oneperson.flat}
                  placeholder="Квартира"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
            </div>
            <div className="df_button">
              <button
                className="df_button1"
                onClick={() => {
                  this.openPageNumber(1);
                }}
              >
                Назад
              </button>
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
                <label htmlFor="group0"> Группа </label>
                <br />
                <select
                  onChange={this.getGroupVaditel}
                  name="group0"
                  id="group0"
                >
                  <option>Выберите группу</option>
                  {this.state.group.map((item) => {
                    return (
                      <option value={item.groupid}>{item.groupname}</option>
                    );
                  })}
                </select>
              </div>
              <div className="pages11">
                <label htmlFor=""> Дата зачисления </label>
                <br />
                <input className="group1" type="date" />
              </div>
              <div className="pages11">
                <label htmlFor="group2">Номер контракта</label>
                <br />
                <input className="group2" type="text" />
              </div>

              <div className="pages11">
                <label htmlFor="group3">Программа обучения </label>
                <br />
                <select onChange={this.getSubject} name="group3" id="group3">
                  <option>Выберите программу обучения</option>
                  {this.state.subject_group.map((item) => {
                    return (
                      <option
                        // onClick={() => {
                        //   this.getSubject(item.subject_groupid);
                        // }}
                        value={item.subject_groupid}
                      >
                        {item.subjectgroupname}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="pages11">
                <label htmlFor="group4">Доп.занятия</label>
                <br />
                <select name="group4" id="group4">
                  {this.state.subject.length > 0 &&
                    this.state.subject.map((item) => {
                      return (
                        <option value={item.subjectid}>
                          {item.subjectname}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="pages11">
                <label htmlFor="group5">Воспитатель </label>
                <br />
                <select name="group5" id="group5">
                  {this.state.nomi.length > 0 &&
                    this.state.nomi.map((item) => {
                      return (
                        <option value="">
                          <p>{item.personfirstname}</p>
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="df_button">
              <button
                className="df_button1"
                onClick={() => {
                  this.openPageNumber(2);
                }}
              >
                Назад
              </button>
              <button
                className="df_button2"
                onClick={() => {
                  this.postData3();
                }}
              >
                Сохранить
              </button>
            </div>
          </div>

          <div className="Apages4">
            <div className="pages11">
              <label htmlFor="med1"> группа здоровья </label>
              <br />
              <select name="med1" id="med1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="pages11">
              <label htmlFor="med2"> Прививки по графику вакцинации</label>
              <br />
              <select name="med2" id="med2">
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
                <option value="Частично">Частично</option>
              </select>
            </div>
            <div className="pages11">
              <label htmlFor="med3">Медотвод</label>
              <br />
              <input id="med3" type="text" />
            </div>
            <div className="pages11">
              <label htmlFor="med4"> Отклонения в психомоторном развитии</label>
              <br />
              <select name="med4" id="med4">
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
              </select>
            </div>
            <div className="pages11">
              <label htmlFor="med5">
                Ребенок регулярно принимает лекарства
              </label>
              <br />
              <select name="med5" id="med5">
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
              </select>
            </div>
            <div className="pages11">
              <label htmlFor="med6">
                Необходимость интеграции по ограничению здоровья
              </label>
              <br />
              <select name="med6" id="med6">
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
                <option value="Частично">Частично</option>
              </select>
            </div>
            <div className="d-flex">
              {" "}
              <div className="pages11">
                <label htmlFor="med7">Аллергия </label>
                <br />
                <select name="med7" id="med7">
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
                </select>
              </div>
              <div className="pages11">
                <label htmlFor="form3">Аллергены</label>
                <br />
                <input id="form3" type="text" />
              </div>
            </div>
            <div className="pages11">
              <label htmlFor="med8">Особые требования по уходу </label>
              <br />
              <input id="med8" type="text" />
            </div>
            <div className="pages11">
              <label htmlFor="med9">Пожелания по питанию</label>
              <br />
              <input id="med9" type="text" />
            </div>
            <div className="df_button">
              <button
                className="df_button1"
                onClick={() => {
                  this.openPageNumber(2);
                }}
              >
                Назад
              </button>
              <button
                className="df_button2"
                onClick={() => {
                  this.postData4();
                }}
              >
                Сохранить
              </button>
            </div>
          </div>

          <div className="Apages5">
            <div className="fileUpload">
              <div className="pages_files">
                <label htmlFor="form6"></label>
                <div className="upload_file">
                  <h1>
                    <img src={image_file} alt="" />
                    <p>Копия свидетельства о рождении</p>
                  </h1>
                </div>
                <input className="form6" type="file" />
              </div>
              <div className="pages_files">
                <label htmlFor="form6"></label>
                <div className="upload_file">
                  <h1>
                    <img src={image_file} alt="" />
                    <p>Медицинский полис</p>
                  </h1>
                </div>
                <input className="form6" type="file" />
              </div>
              <div className="pages_files">
                <label htmlFor="form6"></label>
                <div className="upload_file">
                  <h1>
                    <img src={image_file} alt="" />
                    <p>СНИЛС</p>
                  </h1>
                </div>
                <input className="form6" type="file" />
              </div>
              <div className="pages_files">
                <label htmlFor="form6"></label>
                <div className="upload_file">
                  <h1>
                    <img src={image_file} alt="" />
                    <p>Справка о регистрации по месту жительства</p>
                  </h1>
                </div>
                <input className="form6" type="file" />
              </div>
              <div className="pages_files">
                <label htmlFor="form6"></label>
                <div className="upload_file">
                  <h1>
                    <img src={image_file} alt="" />
                    <p>Паспорт родителя</p>
                  </h1>
                </div>
                <input className="form6" type="file" />
              </div>
              <div className="pages_files">
                <label htmlFor="form6"></label>
                <div className="upload_file">
                  <h1>
                    <img src={image_file} alt="" />
                    <p>Согласие на обработку персональных данных</p>
                  </h1>
                </div>
                <input className="form6" type="file" />
              </div>
            </div>

            <div className="df_button">
              <button
                className="df_button1"
                onClick={() => {
                  this.openPageNumber(2);
                }}
              >
                Назад
              </button>
              <button
                className="df_button2"
                onClick={() => {
                  this.closeModal();
                }}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
        <div className="modal1122">
          {this.state.Monro.map((item) => {
            return (
              <div className="Apages1">
                <div className="oyna101">
                  <div className="pages11">
                    <label htmlFor="child1">Фамилия </label>
                    <br />
                    <input
                      className="itmChild"
                      placeholder={item.childlastname}
                      type="text"
                    />
                  </div>
                  <div className="pages11">
                    <label htmlFor="child2">Имя </label>
                    <br />
                    <input
                      className="itmChildfrst"
                      placeholder={item.childfirstname}
                      type="text"
                    />
                  </div>
                  <div className="pages11">
                    <label htmlFor="form3">Отчество</label>
                    <br />
                    <input
                      className="itmChilmdl"
                      placeholder={item.childmiddlename}
                      type="text"
                    />
                  </div>

                  <div className="pages11">
                    <label htmlFor="child3">пол </label>
                    <br />
                    <select className="childGndr">
                      <option value="м">м</option>
                      <option value="ж">ж</option>
                    </select>
                  </div>
                  <div className="pages11">
                    <label htmlFor="child5"> Свидетельство о рождении </label>
                    <br />
                    <input
                      className="childCertifi"
                      placeholder={item.certificateofbirth}
                      type="number"
                    />
                  </div>
                  <div className="pages11">
                    <label htmlFor="child7"> Здоровья </label>
                    <br />
                    <select className="childHealth">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="pages11">
                    <label htmlFor="child6">Дата выдачи </label>
                    <br />
                    <input
                      className="childisregisteredwith"
                      placeholder={item.isregisteredwith}
                      type="date"
                    />
                  </div>
                  <div className="pages11">
                    <br />
                    <label htmlFor="form4"> Аллергия </label>
                    <br />
                    <select className="childAll">
                      <option value="м">да</option>
                      <option value="ж">нет</option>
                    </select>
                  </div>
                  <div className="pages11">
                    <label htmlFor="form5">Отклонения </label>
                    <br />
                    <input
                      className="childdeviations"
                      placeholder={item.deviations}
                      type="text"
                    />
                  </div>
                  <div className="pages11">
                    <label htmlFor="form5">Медицинское заключение </label>
                    <br />
                    <input
                      className="childmedicines"
                      placeholder={item.medicines}
                      type="text"
                    />
                  </div>
                  <div className="pages11">
                    <label htmlFor="form5">
                      Необходимость интеграции по ограничению здоровья
                    </label>
                    <br />
                    <input
                      className="childhealthrestrictions"
                      placeholder={item.healthrestrictions}
                      type="text"
                    />
                  </div>
                  <div className="pages11">
                    <label htmlFor="form5">Пожелания по питанию</label>
                    <br />
                    <input
                      className="childdiet"
                      placeholder={item.diet}
                      type="text"
                    />
                  </div>
                  <div className="pages11">
                    <label htmlFor="form5">Дополнителъно</label>
                    <br />
                    <input
                      className="childcomment"
                      placeholder={item.comment}
                      type="text"
                    />
                  </div>
                  <div className="pages11">
                    <label htmlFor="form5">Дата рождении</label>
                    <br />
                    <input
                      className="childdateofbirth"
                      placeholder={item.dateofbirth}
                      type="date"
                    />
                  </div>
                </div>
                <div className="fileUpload">
                  <input className="fileChild" type="file" />
                  <img src={image_file} alt="" />
                  <p>(Перетащите или щелкните, чтобы вставить)</p>
                </div>

                <div className="df_button">
                  <button
                    className="df_button1"
                    onClick={() => {
                      this.closeModal1122(item);
                    }}
                  >
                    Назад
                  </button>
                  <button
                    className="df_button2"
                    onClick={() => {
                      this.closeModal1123(item);
                    }}
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mfhtrg">
          <h1 className="bigah1">Список детей</h1>
          <div className="headTools">
            <div>
              <select>
                {this.state.group.map((item) => {
                  return <option>{item.groupname}</option>;
                })}
              </select>
            </div>
            <div>
              <input type="date" />
            </div>
            <div>
              <button onClick={() => this.openModal()}>Добавить ребенка</button>
            </div>
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
              <p>Пол</p>
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
                      <p className="p-width">{item.childid}</p>
                      <p>{item.childlastname}</p>
                      <p>{item.childfirstname}</p>
                      <p>{item.childmiddlename}</p>
                      <p>{item.dateofbirth.slice(0, 10)}</p>
                      <p>{item.gender}</p>
                      <p>{item.syscreatedatutc.slice(0, 10)}</p>
                      <div id="iconci">
                        <img
                          onClick={() => this.Getperson(item)}
                          src={icon1}
                          alt=""
                        />
                        <img
                          src={icon2}
                          onClick={() => {
                            document.querySelector(".modal12").style =
                              "display:flex";
                            this.setState({ deleteData: item });
                          }}
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
                      <p className="p-width">{item.childid}</p>
                      <p>{item.childlastname}</p>
                      <p>{item.childfirstname}</p>
                      <p>{item.childmiddlename}</p>
                      <p>{item.dateofbirth.slice(0, 10)}</p>
                      <p>{item.gender}</p>
                      <p>{item.syscreatedatutc.slice(0, 10)}</p>
                      <div id="iconci">
                        <img
                          src={icon1}
                          alt=""
                          onClick={() => this.Getperson(item)}
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
              }
            })}

            <div id="inform1">
              <div id="inform-p"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <div className="dvasew">
//   <p>{item2.question}</p>
//   <div className="fykjh">
//     <img
//       src={"./img/" + item2.question_img}
//       alt={item2.question_img}
//     />
//     <div className="aysdu">
//       <button
//         onClick={() => CHECK([1, item2.answer,item.testid])}
//       >
//         1
//       </button>
//       <br />
//       <button
//         onClick={() => CHECK([2, item2.answer,item.testid])}
//       >
//         2
//       </button>
//       <br />
//       <button
//         onClick={() => CHECK([3, item2.answer,item.testid])}
//       >
//         3
//       </button>
//       <br />
//       <button
//         onClick={() => CHECK([4, item2.answer,item.testid])}
//       >
//         4
//       </button>
//     </div>
//   </div>
// </div>
