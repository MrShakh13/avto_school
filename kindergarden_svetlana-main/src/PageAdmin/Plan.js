import React, { useEffect, useState } from "react";
import icon1 from "../img/free-icon-edit-6488637 (2).png";
import icon2 from "../img/free-icon-delete-5396993.png";
import "./css/Plan.css";
import url from "../host";
import axios from "axios";

export default function Plan() {
  const [data, setData] = useState([]);
  const [state, setstate] = useState([]);
  const [state2, setstate2] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  function trf() {
    axios.get(`${url}/syllabu`).then((res) => {
      axios.get(`${url}/subject`).then((res2) => {
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res2.data.length; j++) {
            if (res.data[i].subjectid == res2.data[j].subjectid) {
              res.data[i].subjectname = res2.data[j].subjectname;
            }
          }
        }
        setData(res.data);
      });
    });
    console.log(data);
  }
  useEffect(() => {
    trf();
     axios.get(`${url}/group`).then((res) => {
     setstate(res.data)
    })
    axios.get(`${url}/subject`).then((res) => {
      setstate2(res.data)
     })

    console.log(data.subjectname, "sgfuksdhjksh");
  }, []);
  function openModal () {
    document.querySelector('.dobavit').style = 'display: flex'
  }
  function closeModal () {
    document.querySelector('.dobavit').style = 'display: none'
  }
  function postSubject_postSillabu () {
    var formData = new FormData();
    formData.append("subjectname", selectedValue);
    formData.append("subjectgroupid",3);
    formData.append("topic", document.querySelector('#tema').value);
    formData.append("duration", 25);
    axios
    .post(`${url}/subject`,formData)
    .then((res)=>{
console.log("ishladi");
    axios
    .get(`${url}/subject`)
    .then((res2)=>{
      for (let i = 0; i < res2.data.length; i++) {
        if (res2.data[i].subjectname===selectedValue&& res2.data[i].topic===document.querySelector('#tema').value) {
          var formData2 = new FormData();
formData2.append("subjectid", res2.data[i].subjectid);
formData2.append("winterparty",document.querySelector('#zima').value);
formData2.append("winterles", document.querySelector('#les').value);
formData2.append("mountain", document.querySelector('#gori').value);
formData2.append("animal", document.querySelector('#animal').value);
axios
.post(`${url}/syllabu`,formData2)
.then((res4)=>{
  console.log("ishladi22");
})
        }
      }
    })

    })
    console.log(selectedValue);
  }

  return (
    <div>
      <div className="dobavit">
        <div className="dobav">
          <h4>Месяц </h4>
          <input type='text' value={"МАЙ"} />
          <h4>Неделя</h4>
          <input type='text' />
          {/* <h4>Тема</h4>
          <input type='text' /> */}
          <h4>Занятие</h4>
          <select value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)} className="slect34">
            {/* {state2.map((item)=>{
              return<option value={item.subjectid}>{item.subjectname}</option>
            })} */}
            <option>Выберите занятия</option>
            <option value={"ФЭМП"}>ФЭМП</option>
            <option value={"Лепка"}>Лепка </option>
            <option value={"Ритмика"}>Ритмика</option>
            <option value={"ОФП"}>ОФП</option>
            <option value={"Музыка"}>Музыка</option>
            <option value={"Конструирование"}>Конструирование</option>
            <option value={"Психолог"}>Психолог</option>
            <option value={"Логопед"}>Логопед</option>
            <option value={"Театр"}>Театр</option>
            <option value={"Английский"}>Английский</option>
            <option value={"Школа"}>Школа </option>
          </select>
          <h4>Тема</h4>
          {/* <select className="slect34"> */}
          <input id="tema" type='text' />
            {/* {state2.map((item)=>{
              return<option value={item.subjectid}>{item.subjectname}</option>
            })} */}
          {/* </select> */}
          <h4>Зимние  забавы</h4>
          <input id="zima" type='number' />
          <h4> Зимний лес </h4>
          <input id="les" type='number' />
          <h4>Животные </h4>
          <input id="animal" type='number' />
          <h4>Горы </h4>
          <input id="gori" type='number' />
        <div className="btn_Groupo">
        <button onClick={() => postSubject_postSillabu()}>Создать</button>
        <button onClick={() => closeModal()}>Отмена</button>
        </div>
        </div>
      </div>
      <div className="headTools">
        <div>
          <select>
            {state.map((item)=>{
              return<option>{item.groupname}</option>
            })}
          </select>
        </div>
        <div>
          <input type="date" />
        </div>
        <div>
          <button onClick={() => openModal()}>Добавить Статистика</button>
        </div>
      </div>
      {/* <h1 className='bigah1'></h1> */}
      <div className="biga-pages"></div>
      <div id="tables">
        <div id="names">
          <p>МАЙ 2023</p>
        </div>
        <div id="inform1">
          <div id="inform-p">
            <p>Неделя</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>

        <div id="inform1">
          <div id="inform-p1">
            <p>Тема</p>
            <p>
              Зимние <br /> забавы{" "}
            </p>
            <p>Зимний лес</p>
            <p>Горы</p>
            <p>Животные</p>
            <div id="iconci">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
            </div>
          </div>
        </div>

        {data.map((item) => {
          return (
            <div id="inform1">
              <div id="inform-p">
                <p>{item.subjectname}</p>
                {/* <p>{item.subjectid}</p> */}
                <p>{item.winterparty}</p>
                <p>{item.winterles}</p>
                <p>{item.mountain}</p>
                <p>{item.animal}</p>
                <div id="iconci">
                  <img src={icon1} alt="" />
                  <img src={icon2} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
