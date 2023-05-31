
import './css/New.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react'
import ico1 from '../img/free-icon-delete-5396993 (2).png'
import ico2 from '../img/free-icon-edit-6488637 (2).png'
import axios from 'axios';
import url from '../host';




export default class App extends Component {
   state = {
      group: [],
      region: []
   }




   componentDidMount = () => {
      //    axios.get(`${url}/person`).then(res => {
      //       // console.log(res.data);
      //       this.setState({
      //          person: res.data
      //       })

      //    }).finally(() => {
      //       // document.querySelector('.hallo_as').style = 'display: block'
      //    });
      axios.get(`${url}/group`).then(res => {
         this.setState({ group: res.data })
      })

      console.log('dvfnumi');
      axios.get(`${url}/address`).then(res => {
         this.setState({ region: res.data })
      })

   }


   DobavNovs = () => {
      document.querySelector('.SozdatNovs').style = 'display: block'
      document.querySelector('.asdsad').style = 'display: none'
   }


   CloseNovs = () => {
      document.querySelector('.SozdatNovs').style = 'display: none'
      document.querySelector('.asdsad').style = 'display: block'
   }


   render() {
      return (
         <div className="nodir5">
            <div className="redact">

            </div>
            <div className="SozdatNovs">
               <h2>Создать новость</h2>
               <div className="Anket">
                  <h4>Заголовок</h4>
                  <input type="text" />
                  <h4>Текст</h4>
                  <textarea></textarea>
                  <h4>Прикрепить файл</h4>
                  <input type="text" />

                  <h4>Выбрать адресата</h4>
                  <select>
                     {
                        this.state.region.map(item => {
                           return (
                              <option>{item.region}</option>
                           )
                        })
                     }
                  </select>
               </div>
               <div className='btn-group'>
                  <button onClick={() => this.CloseNovs()}>Отменит</button>
                  <button>Сохранит</button>
               </div>
            </div>
            <div className="asdsad">

               <div className="cake">
                  <div className="cake1">
                     <select className='mad' name="" id="">
                        {
                           this.state.group.map(item => {
                              return (
                                 <option value="">{item.groupname}</option>
                              )
                           })
                        }
                     </select>
                     <input className='mad' type="date" placeholder='Дата добавления' />
                     <button className="nodiruca" onClick={() => this.DobavNovs()}>
                        Добавить новость
                     </button>
                  </div>
               </div>

               <div className=" bigbox">
                  <div className="bodyadmpn" >

                     <div className="btnadmp_box1">
                        <table className="btnchil_table">
                           <tr className="btnadmp_tr">

                              <th className="btnadmp_th1">ID</th>

                              <th className="btnadmp_th"> Дата </th>
                              <th className="btnadmp_th">Название</th>
                              <th className="btnadmp_th">Группа</th>
                              <th className="btnadmp_th">Автор</th>
                              <th className="btnadmp_th" id='borDr'>Действие</th>


                           </tr>
                           <tr className="btnadmp_tr1" >
                              <td className="btnadmp_td1">1</td>
                              <td className="btnadmp_td1">2022/12/12</td>
                              <td className="btnadmp_td1"> Экскурсия в музей</td>
                              <td className="btnadmp_td1">  Волшебник 2 уровня </td>
                              <td className="btnadmp_td1"> Маринина В.П.</td>
                              <td className="btnadmp_td1">
                                 <button className="butadmp1"><img src={ico2} alt="" /></button>
                                 <button className="butadmp2"><img src={ico1} alt="" /></button>
                              </td>
                           </tr>

                           <tr className="btnadmp_tr1" id='ad3weasd'>
                              <td className="btnadmp_td1">1</td>
                              <td className="btnadmp_td1">2022/12/12</td>
                              <td className="btnadmp_td1"> Экскурсия в музей</td>
                              <td className="btnadmp_td1">  Волшебник 2 уровня </td>
                              <td className="btnadmp_td1"> Маринина В.П.</td>
                              <td className="btnadmp_td1">
                                 <button className="butadmp1"><img src={ico2} alt="" /></button>
                                 <button className="butadmp2"><img src={ico1} alt="" /></button>
                              </td>
                           </tr>




                        </table>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      )
   }

}