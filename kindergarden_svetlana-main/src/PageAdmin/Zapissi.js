import React, { useEffect, useState } from 'react'
import './AllAdmin.css'
import icon1 from '../img/free-icon-delete-5396993.png'
import icon2 from '../img/free-icon-edit-6488637 (2).png'
import axios from 'axios'
import url from '../host'

export default function Zapissi() {
  const [state, setState] = useState([])
  const [group, setGroup] = useState([])
  const [person, setPerson] = useState([])
  const [person2, setPerson2] = useState([])
  const [person3, setPerson3] = useState([])
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");
  function getExcuse() {
    axios.get(`${url}/excuse`).then(res => {
      axios.get(`${url}/child`).then(res2 => {
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res2.data.length; j++) {
            if (res.data[i].childid == res2.data[j].childid) {
              res.data[i].childlastname = res2.data[j].childlastname
            }
          }
        }
        setState(res.data)
      })
    })
  }
 function openmodal () {
  document.querySelector(".headTools").style = "display: block !important";
 }
  useEffect(() => {
    axios.get(`${url}/group`).then(res => {
      setGroup( res.data )
    })
    axios.get(`${url}/child`).then(res => {
      setPerson( res.data )
    })
    axios.get(`${url}/employee`).then(res => {
      setPerson2( res.data )
    })
    axios.get(`${url}/person`).then(res => {
      setPerson3( res.data )
    })
    getExcuse()
  }, [])


  function deleteExcuse(key) {
    axios.delete(`${url}/excuse/${key}`).then(res => {
      alert('deleted')
      window.location = '/zapissi'
    })
  }
  function modalSozdat () {
    document.querySelector('.modallses').style = 'display: flex'
  }

  function modalSozdat2 () {
    document.querySelector('.modallses').style = 'display: none'
  }
  function postExcuse () {
    console.log(selectedValue,"DETI");
    console.log(selectedValue2,"CHASTDNYAA");
    console.log(document.querySelector('#uunachaolo').value,"NACHALO");
    console.log(document.querySelector('#konec').value,"konec");
    console.log(selectedValue3,"PRICHINA");
    var formData = new FormData();
    formData.append("datestart",document.querySelector('#uunachaolo').value);
    formData.append("dateend", document.querySelector('#konec').value);
    formData.append("childid", selectedValue);
    formData.append("daypart", selectedValue2);
    formData.append("reason",selectedValue3);
    formData.append("employeeid",selectedValue4 );
    axios.post(`${url}/excuse`,formData).then((res)=>{
      console.log("ishldi");
      window.location.reload()
    })
  }


  return (
    <div className='asdasdasdasdasd'>
      <div className='modallses'>
       <div className="modalSozdat">
        <span className="clossedModal" onClick={() => modalSozdat2()}>
          X
        </span>
        <h4>Создать запись о пропуске занятий</h4>
        <br />
        <h4>Ребенок </h4>
        <select value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)} id="uudeti" className="selectDeti">
        <option>Выберите</option>
           {person.map((item)=>{
            return<option value={item.childid}>{item.childfirstname}</option>
           })}
        </select>
        <div className="datanachl">
          <div className="hashla">
            <h4>Дата начала </h4>
            <input id="uunachaolo" type="date" />
          </div>
          <div className="hashla">
            <h4>Дата окончания *</h4>
            <input id="konec" type="date" />
          </div>
        </div>
        <h4>Часть дня </h4>
        <div className="checkboxForm">
          <select value={selectedValue2} onChange={(event) => setSelectedValue2(event.target.value)} id="chast" className="selectDeti">
          <option>Выберите</option>
            <option value={"Утро"}>Утро</option>
            <option value={"Весь день"}>Весь день</option>
            <option value={"После обеда"}>После обеда</option>
          </select>
        </div>
        <h4>Причина </h4>
        <select value={selectedValue3} onChange={(event) => setSelectedValue3(event.target.value)} id="prichina" className="boleznS">
          <option>Выберите</option>
          <option value={"Болезнь"}>Болезнь</option>
          <option value={"Посещение врача"}>Посещение врача</option>
          <option value={"Отпуск"}>Отпуск</option>
          <option value={"Семейные об-ва"}>Семейные об-ва</option>
        </select>
        <h4>Воспитатель </h4>
        <select value={selectedValue4} onChange={(event) => setSelectedValue4(event.target.value)} id="uudeti" className="selectDeti">
        <option>Выберите</option>
           {person2.map((item)=>{
            return<>{person3.map((item2)=>{
              if (item.personid===item2.personid) {
                return<option value={item.employeeid}>{item2.personlastname}  {item2.personfirstname} </option>
              }
            })}</>
  
           })}
        </select>
        <button onClick={() => postExcuse()} className="btnu">
        Создать
        </button>
      </div>
      </div>
      <div className='headTools'>
        <div>
          <select>
            {
              group.map(item => {
                return(
                  <option>{item.groupname}</option>
                )
              })
            }
          </select>
        </div>
        <div>
          <select>
            {
              person.map(item => {
                return(
                  <option>{item.childfirstname}</option>
                )
              })
            }
          </select>
        </div>
        <div>
          <input type='date' />
        </div>
        <div>
          <button onClick={() => modalSozdat()}>Добавить пропуск</button>
        </div>
      </div>
      <div className="tablle">
        <div className="numbersss">
          <p>ID</p>
          <p>Дата  <br />добавления</p>
          <p>Дата</p>
          <p>Ребенок</p>
          <p>Причина</p>
          <p>Автор</p>
          <p>Действие</p>
        </div>
        {
          state.map(item => {
            return (

              <div className="tesxtt">
                <p>{item.excuseid}</p>
                <p>{item.datestart.slice(0, 16)}</p>
                <p>{item.dateend.slice(0, 16)}</p>
                <p>{item.childlastname}</p>
                <p>{item.reason}</p>
                <p>Marina</p>
                <p>
                  <img src={icon2} alt="" />
                  <img src={icon1} onClick={() => deleteExcuse(item.excuseid)} alt="" />
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
