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
import './AllPages.css'

export default class PageProfil extends Component {
  state = {
    phone2: [],
    usePhone2: []
  }
  render () {
    return (
      <div className='only_you' onload={phone2 => this.state.usePhone2}>
        <div className='Cards-Page1'>
          <div className='CardProfil-Page1'>
            <img src={Img1} alt='' />
            <br />
            <button>Сменить фото</button>
            <input type='file' className='inpOpacity' />
          </div>
          <div className='Card-Page1'>
            <div className='Input-grup'>
              <h4>Фамилия</h4>
                  <input
                    className='prsnMiddle'
                    type='text'
                    placeholder='{personmiddlename}'
                  />
            </div>
            <div className='Input-grup'>
              <h4>Имя</h4>
                  <input
                    className='prsnlastName'
                    type='text'
                    placeholder='personlastname'
                  />
            </div>
            <div className='Input-grup'>
              <h4>Отчество</h4>
                  <input
                    className='prsnFirstNamr'
                    type='text'
                    placeholder='personfirstname'
                  />
            </div>
            <div className='Input-grup'>
              <h4>Дата рождения</h4>
                  <input
                    type='date'
                    className='passportdaTE'
                    placeholder='passportdate'
                  />
            </div>
            <div className='Input-grup'>
              <h4>Улица</h4>
              <input type='title' className='addressPt' placeholder='address1' />
            </div>
            <div className='Input-grup'>
              <h4>Passport Number</h4>
                <input type='number' className='housePt' placeholder='passNum' />
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
            </div>
            <div
              className='btn-groups
            '
            >
              <button>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}









