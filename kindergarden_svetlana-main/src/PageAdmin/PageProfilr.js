/* import React, { useState } from 'react'
import Img1 from '../img/free-icon-user-149071 1 (1).png'
import PhoneInput from 'react-phone-input-2'
import './AllPages.css'

export default function Page1() {
  const [phone2, usePhone2] = useState()
  return (
    <div className='The-Big'>
      <div className="Cards-Page1">
        <div className="CardProfil-Page1">
          <img src={Img1} alt="" /><br />
          <button>Сменить фото</button>
          <input type="file" className='inpOpacity' />
        </div>
        <div className="Card-Page1">
          <h4>Должность</h4>
          <p>Воспитатель</p>
          <div className="Input-grup">
            <h4>Фамилия</h4>
            <input type="text" placeholder='Малинина' />
          </div>
          <div className="Input-grup">
            <h4>Имя</h4>
            <input type="text" placeholder='Виктория' />
          </div>
          <div className="Input-grup">
            <h4>Отчество</h4>
            <input type="text" placeholder='Петровна' />
          </div>
          <div className="Input-grup">
            <h4>Дата рождения</h4>
            <input type="date" placeholder='1979/12/20' />
          </div>
          <div className="Input-grup">
            <h4>Улица</h4>
            <input type="text" placeholder='Аткарская' />
          </div>
          <div className="Input-grup">
            <h4>Дом</h4>
            <input type="text" placeholder='50' />
          </div>
          <div className="Input-grup">
            <h4>Квартира</h4>
            <input type="text" placeholder='60' />
          </div>
          <div className="Input-grup">
            <h4>Номер телефона</h4>
            <PhoneInput
             id="userNumber2"
             className='userNumber2'
             country={'ru'}
             value={phone2}
             onChange={phone2 => usePhone2}
             />
          </div>
          <div className="Input-grup">
            <h4>E-mail</h4>
            <input type="gmail" placeholder='rew@mail.ru' />
          </div>
        </div>
      </div>
    </div>
  )
} */
import React, { Component, setUpdatedAt } from 'react'
import Img1 from '../img/free-icon-user-149071 1 (1).png'
import PhoneInput from 'react-phone-input-2'
import url from '../host'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import './css/PageProfil.css'

export default class PageProfil extends Component {
  // state = {
  //   phone2: '',
  //   person1: [],

  // }
  // getPerson = () => {
  //   axios
  //     .get(`${url}/person`)
  //     .then(res => {
  //       var abu = res.data.filter(
  //         item => item.email === localStorage.getItem('name')
  //       )

  //       axios.get(`${url}/address`).then(res1 => {
  //         res1.data.map(item => {
  //           if (item.addressid === abu[0].addressid) {
  //             abu[0].address = item.region
  //             abu[0].address1 = item.city
  //             abu[0].house = item.house
  //             abu[0].building = item.building
  //           }
  //         })
  //         this.setState({ person1: abu })

  //       })

  //       /* console.log(this.state.person1[0].personlastname, 'hellohello'); */
  //       /* console.log(res.data) */
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // componentDidMount() {
  //   this.getPerson()
  // }

  // putPerson = id => {
  //   /* id qaysi biri put bolayapgani */
  //   /* formdata post */

  //   var post = new FormData()
  //   post.append('personlastname', document.querySelector('.prsnlastName').value)
  //   post.append('personfirstname', document.querySelector('.prsnFirstNamr').value)
  //   post.append('personmiddlename', document.querySelector('.prsnMiddle').value)
  //   post.append('passportdate', this.state.person1[0].passportdate)
  //   post.append('passportseries', this.state.person1[0].passportseries)
  //   post.append('passportnumber', this.state.person1[0].passportnumber)
  //   post.append('addressid', this.state.person1[0].addressid)
  //   post.append('dateofbirth', this.state.person1[0].dateofbirth)
  //   post.append('gender', this.state.person1[0].gender)
  //   var hlo = document.querySelector('.form-control').value
  //   post.append('phone', hlo)
  //   post.append('email', document.querySelector('.emailInput').value)

  //   axios.put(`${url}/person/${id}`, post).then(res => alert('ozgardi'))


  //   /*  var hlo = document.querySelector('.form-control').value
  //    console.log(hlo) */
  //   var data2 = new FormData()
  //   data2.append('city', document.querySelector('.addressPt').value)
  //   data2.append('house', document.querySelector('.housePt').value)
  //   data2.append('building', document.querySelector('.buildPt').value)
  //   data2.append('region', document.querySelector('.buildPt').value)
  //   data2.append('flat', document.querySelector('.buildPt').value)
  //   data2.append('street', document.querySelector('.buildPt').value)
  //   axios.put(`${url}/address/1`, data2)
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  render() {
    return (
      <div className="helo_you">
        <div className='only_you' onload={phone2 => this.state.usePhone2}>
          <div className='Cards-Page1'>
            <div className='CardProfil-Page1'>
              <img src={Img1} alt='' />
              <br />
              <button>Сменить фото</button>
              <input type='file' className='inpOpacity' />
            </div>
            <div className='Card-Page1'>
              <h4 id='dolj'>Должность</h4>
              <p>Воспитатель</p>
              <div className='Input-grup'>
                <h4>Фамилия</h4>
                <input
                      className='prsnMiddle'
                      type='text'
                      placeholder='helo'
                    />
                {/* {this.state.person1.map(item => {
                  return (
                    <input
                      className='prsnMiddle'
                      type='text'
                      placeholder={item.personmiddlename}
                    />
                  )
                })} */}
              </div>
              <div className='Input-grup'>
                <h4>Имя</h4>
                <input
                      className='prsnlastName'
                      type='text'
                      placeholder='helo2'
                    />
                {/* {this.state.person1.map(item => {
                  return (
                    <input
                      className='prsnlastName'
                      type='text'
                      placeholder={item.personlastname}
                    />
                  )
                })} */}
              </div>
              <div className='Input-grup'>
                <h4>Отчество</h4>
                <input
                      className='prsnFirstNamr'
                      type='text'
                      placeholder='helo3'
                    />
                {/* {this.state.person1.map(item => {
                  return (
                    <input
                      className='prsnFirstNamr'
                      type='text'
                      placeholder={item.personfirstname}
                    />
                  )
                })} */}
              </div>
              <div className='Input-grup'>
                <h4>Дата рождения</h4>
                <input
                      type='date'
                      className='passportdaTE'
                      placeholder='date1'
                    />
                {/* {this.state.person1.map(item => {
                  return (
                    <input
                      type='date'
                      className='passportdaTE'
                      placeholder={item.passportdate.slice(0, 10)}
                    />
                  )
                })} */}
              </div>
              <div className='Input-grup'>
                <h4>Улица</h4>
                <input type='title' className='addressPt' placeholder='hello5' />
                {/* {this.state.person1.map(item => {
                  return <input type='title' className='addressPt' placeholder={item.address1} />
                })} */}
              </div>
              <div className='Input-grup'>
                <h4>Дом</h4>
                <input type='title' className='housePt' placeholder='house' />
                {/* {this.state.person1.map(item => {
                  return <input type='title' className='housePt' placeholder={item.house} />
                })} */}
              </div>
              <div className='Input-grup'>
                <h4>Квартира</h4>
                <input type='title' className='buildPt' placeholder='building' />
                {/* {this.state.person1.map(item => {
                  return <input type='title' className='buildPt' placeholder={item.building} />
                })} */}
              </div>
              <div className='Input-grup'>
                <h4>Номер телефона</h4>
                <PhoneInput
                  id='userNumber2'
                  className='userNumber2'
                  country={'ru'}
                /* placeholder={this.state.person1[0].phone} */
                />
              </div>
              <div className='Input-grup'>
                <h4>E-mail</h4>
                <input
                      className='emailInput'
                      type='title'
                      placeholder='email'
                    />
                {/* {this.state.person1.map(item => {
                  return (
                    <input
                      className='emailInput'
                      type='title'
                      placeholder={item.email}
                    />
                  )
                })} */}
              </div>
              <div
                className='btn-groups
            '
              >
                <button
                  onClick={() => this.putPerson(this.state.person1[0].personid,)}
                >
                  Сохранит
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}









