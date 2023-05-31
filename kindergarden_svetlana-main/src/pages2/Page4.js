import React, { useState, useEffect } from "react";
import axios from "axios";
import Img12 from "../img/free-icon-child-5238428.png";
import Img11 from "../img/Group 133.png";
import Img2 from '../img/free-icon-kindergarden-5235725 1.png'
import image from '../img/free-icon-information-932010.png'
import imgg from '../img/free-icon-group-5942363 1.png'
import './AllPages2.css'
import chil from './AllPages2.css'
import url from "../host";

export default function Page4 () {
  const [child22, useChild2] = useState([]);
  const [bolas22, useBola2] = useState([]);
  const [group2, useGroup22] = useState([]);
const [state, setstate] = useState([]);
const [stat2e, set2] = useState([]);
const [uut, setuu] = useState([]);
const [DAta, setDAta] = useState([]);

useEffect(() => {
  const fetchData33 = async () => {
    axios
      .get(`${url}/Legal_Rep`)
      .then((res) => {
        const filteredChildren = res.data.filter(
          (child) =>
            child.personid === parseInt(localStorage.getItem("personid"))
        );
        
        axios.get(`${url}/relation`).then((res22) => {
          const tempBolas = [];
          for (let i = 0; i < res22.data.length; i++) {
            for (let j = 0; j < filteredChildren.length; j++) {
              if (
                filteredChildren[j].legalrepid === res22.data[i].legalrepid
              ) {
                tempBolas.push(res22.data[i]);
              }
            }
          }
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useBola2(tempBolas);
          // useChild(filteredChildren);
        });

      })
      .catch((err) => {
        console.log(err);
      });
      axios.get(`${url}/child`).then((res33) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useChild2(res33.data);
      });
      axios.get(`${url}/group`).then((res44) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useGroup22(res44.data);
      });

  };
  fetchData33();
}, []);

useEffect(() => {
}, [
  child22,
  group2,
]);

  function openBodychild() {
    document.querySelector('.bodychil2').style = 'display: block'
    document.querySelector('.kids-Page2').style = 'display: none'
  }
  function openBodychild2(id) {
    setDAta(id)
    document.querySelector('.bodychil2').style = 'display: none'
    document.querySelector('.bodychil').style = 'display: block'
  }
  function functionName () {
    setstate(document.querySelector("#kk22").value)
    console.log(state);

  }
  function functionName2 () {
    let uu=(document.querySelector("#dd").value);
    set2(uu.slice(8,10))
    setuu(uu.slice(8,10)*1+7)
    
  }
  return (
    <div>
      <div className="kids-Page2">
        {bolas22.map((item) => (
          <div className="kid-Page2">
            {child22.map((item22) => {
              if (item.childid === item22.childid) {
                if (item22.gender==="ж") {
                  return (
                    <div className="asd">
                      <div className="ing55">
                      <img src={Img11} alt="" />
                      </div>
                      <div className="kid-prfl">
                        <div className="asd23">
                          <h4 className="kakak">
                            {item22.childlastname} {item22.childfirstname}
                          </h4>
                          <h5>{2023 - item22.dateofbirth.slice(0, 4)} года</h5>
                        </div>
                        {group2.map((item33) => {
                          if (item22.groupid === item33.groupid) {
                            return (
                              <div className="volss">
                                <img src={Img2} alt="" />
                                <p>{item33.groupname}</p>
                              </div>
                            );
                          }
                        })}
                      </div>
                      <button className="kkk" onClick={() => openBodychild(item)}>
                        Подробнее
                      </button>
                    </div>
                  );               
                }else{
                  return (
                    <div className="asd">
     <img src={Img12} alt="" />
                      <div className="kid-prfl">
                        <div className="asd23">
                          <h4 className="kakak">
                            {item22.childlastname} {item22.childfirstname}
                          </h4>
                          <h5>{2023 - item22.dateofbirth.slice(0, 4)} года</h5>
                        </div>
                        {group2.map((item33) => {
                          if (item22.groupid === item33.groupid) {
                            return (
                              <div className="volss">
                                <img src={Img2} alt="" />
                                <p>{item33.groupname}</p>
                              </div>
                            );
                          }
                        })}
                      </div>
                      <button className="kkk" onClick={() => openBodychild(item)}>
                        Подробнее
                      </button>
                    </div>
                  ); 
                }
              }
            })}
          </div>
        ))}
      </div>
      <div className='bodychil2'>
        <div className='textchil_box'>
          <div className='bodyAcc'>
            <select onChange={() => functionName()} id='kk22'>
              <option value={"ВОЛШЕБНИК 1 УРОВНЯ"}>ВОЛШЕБНИК 1 УРОВНЯ</option>
              <option value={"ВОЛШЕБНИК 2 УРОВНЯ"}>ВОЛШЕБНИК 2 УРОВНЯ</option>
              <option value={"ВОЛШЕБНИК 3 УРОВНЯ"}>ВОЛШЕБНИК 3 УРОВНЯ</option>
            </select>
            <input onChange={() => functionName2()} id="dd" type='date' />
          </div>
          <div className='bodyAcc2'>
            <h6>{state}</h6>
            <div className='personDiv'>
              <img src={imgg} alt='' />
              10
            </div>
            <h4>2023/05/{stat2e} - 2023/05/{uut}</h4>
          </div>
        </div>
        <div className='btnchil_box1'>
          <table className='btnchil_table'>
            <tr className='btnchil_tr'>
              <th className='btnchil_th1'>День</th>
              <th className='btnchil_th'>Отсутствующие</th>
              {/* <th className='btnchil_th'>Время</th> */}
              <th className='btnchil_th'>Тема</th>
              <th className='btnchil_th2'>Примечание</th>
            </tr>

            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> ПН 05/23 <img onClick={() => openBodychild2(" ПН 05/23")} src={image} alt='' /></td>
              <td className='btnchil_td1'>10/7/1</td>
              <td className='btnchil_td1'>Лес</td>
              {/* <td className='btnchil_td1'>Ручкина К.Е. </td> */}
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> ВТ 05/24 <img onClick={() => openBodychild2("ВТ 05/24")} src={image} alt='' /></td>
              <td className='btnchil_td1'>10/5/1</td>
              <td className='btnchil_td1'>Горы</td>
              {/* <td className='btnchil_td1'>Ручкина К.Е. </td> */}
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> СР 05/25 <img onClick={() => openBodychild2("СР 05/25")} src={image} alt='' /></td>
              <td className='btnchil_td1'>10/7/3</td>
              <td className='btnchil_td1'>Реки и моря</td>
              {/* <td className='btnchil_td1'>Ручкина К.Е. </td> */}
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> ЧТ 05/26 <img onClick={() => openBodychild2("ЧТ 05/26")} src={image} alt='' /></td>
              <td className='btnchil_td1'>10/8/2</td>
              <td className='btnchil_td1'>Космос</td>
              {/* <td className='btnchil_td1'>Ручкина К.Е. </td> */}
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> ПТ 05/27 <img onClick={() => openBodychild2( "ПТ 05/27")} src={image} alt='' /></td>
              <td className='btnchil_td1'>10/2/8</td>
              <td className='btnchil_td1'>Я люблю природу</td>
              {/* <td className='btnchil_td1'>Ручкина К.Е. </td> */}
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'>СБ 05/28 <img onClick={() => openBodychild2("СБ 05/28")} src={image} alt='' /></td>
              <td className='btnchil_td1'>10/9/1</td>
              <td className='btnchil_td1'>Лес</td>
              {/* <td className='btnchil_td1'>Ручкина К.Е. </td> */}
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'>ВС 05/29 <img onClick={() => openBodychild2("ВС 05/29")} src={image} alt='' /></td>
              <td className='btnchil_td1'>10/5/5</td>
              <td className='btnchil_td1'>Космос</td>
              {/* <td className='btnchil_td1'>Ручкина К.Е. </td> */}
              <td className='btnchil_td1'> </td>
            </tr>
          </table>
        </div>
      </div>
      <div className='bodychil'>
        <div className='textchil_box'>
          <h2 className='bodychil_h2'>
            <b>ГРУППА</b> ВОЛШЕБНИК 1 УРОВНЯ
          </h2>
          <h2 className='bodychil_h2'>
            <b>День</b> <br />{DAta}
          </h2>
        </div>
        <div className='btnchil_box1'>
          <table className='btnchil_table'>
            <tr className='btnchil_tr'>
              <th className='btnchil_th1'>Занятие</th>
              <th className='btnchil_th'>Тема</th>
              <th className='btnchil_th'>Время</th>
              <th className='btnchil_th'>Педагог</th>
              <th className='btnchil_th2'>Примечание</th>
            </tr>

            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> ФЭМП</td>
              <td className='btnchil_td1'> Порядок чисел от 1 до 10</td>
              <td className='btnchil_td1'>09.00 - 09.25 </td>
              <td className='btnchil_td1'>Ручкина К.Е. </td>
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> Ритмика</td>
              <td className='btnchil_td1'> Марш</td>
              <td className='btnchil_td1'>09.25 - 09.50 </td>
              <td className='btnchil_td1'>Азанова А.А. </td>
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> Лепка</td>
              <td className='btnchil_td1'> Работа с глиной</td>
              <td className='btnchil_td1'>10.15 - 10.40 </td>
              <td className='btnchil_td1'>Солнцева В.А. </td>
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> Музыка</td>
              <td className='btnchil_td1'> Жанры</td>
              <td className='btnchil_td1'>11.05 - 11.30 </td>
              <td className='btnchil_td1'>Азанова А.А. </td>
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> Психолог</td>
              <td className='btnchil_td1'> Обида</td>
              <td className='btnchil_td1'>11.30 - 11.55 </td>
              <td className='btnchil_td1'>Кнопкина О.П. </td>
              <td className='btnchil_td1'> </td>
            </tr>
            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> ОФП</td>
              <td className='btnchil_td1'> Работа с мячом</td>
              <td className='btnchil_td1'>16.00 - 16.30 </td>
              <td className='btnchil_td1'>Бубнов Р.А. </td>
              <td className='btnchil_td1'> </td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  )
}
