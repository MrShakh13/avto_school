import React, { useState, axios } from 'react'
import ImgTeacher from '../img/free-icon-teacher-1425402 1.png'
import './AllPages2.css'

export default function Page1() {
  const [state, setState] = useState({ yozu: 'Экскурсия в музей' })

  var yozu1 = 'Экскурсия в музей'
  var yozup1 =
    'На следующей неделе мы планируем выезд в краеведческий музей на выставку “История новогодней игрушки”. Среда 26 декабря 10.00 Стоимость 300 р. Просьба ко всем родителям определиться сегодня до конца дня'
  function openModalNo1() {
    document.querySelector('.Modal-Redat').style =
      'opacity: 0.9;z-index: 9999999999;'
  }
  function closeModalNo1() {
    document.querySelector('.Modal-Redat').style =
      'opacity: 0;z-index: -9999999999;'
  }
  function redakt() {
    document.querySelector('.Modal-Redat2').style = 'display: block;'
    document.querySelector('.Modal-Redat').style = 'display: none;'
  }
  function closse() {
    document.querySelector('.Modal-Redat2').style = 'display: none;'
  }


  const url = 'https://backend-school-0u75.onrender.com'







  return (
    <div>
      <div className='Modal-Redat'>
        <h2>{yozu1}</h2>
        <p>{yozup1}</p>
        <div className='btn-grup'>
        
          <button className='Otmen1' onClick={() => closeModalNo1()}>
            Отмена
          </button>
        </div>
      </div>
      <div className='Modal-Redat2'>
        <h4>Редакторавать</h4>
        <input type='text' className='Input-Text' id='' />
        <br />
        <textarea className='Textarea-1'></textarea>
        <div className='btn-grup'>
          <button>Сохранит</button>
          <button className='Otmen2' onClick={() => closse()}>
            Отмена
          </button>
        </div>
      </div>


      <div className='Card-forPage'>
        <div className='Cards-forPage'>
          <div className='Card-profilfr'>
            <img src={ImgTeacher} alt='' />
            <div className='Hashs'>
              <h4>Малинина Виктория Петровна</h4>
              <span>2023/05/13</span>
            </div>
          </div>
          <h2>{yozu1}</h2>
          <p>{yozup1}</p>
          <button onClick={() => openModalNo1()}>Просмотреть детали</button>
        </div>
        <div className='Cards-forPage'>
          <div className='Card-profilfr'>
            <img src={ImgTeacher} alt='' />
            <div className='Hashs'>
              <h4>Малинина Виктория Петровна</h4>
              <span>2023/12/13</span>
            </div>
          </div>
          <h2>Экскурсия в музей</h2>
          <p>
            На следующей неделе мы планируем выезд в краеведческий музей на История

            выставку “История новогодней игрушки”. Среда 26 декабря 10.00
            Стоимость 300 р. Просьба ко всем родителям определиться сегодня до
            конца дня.
          </p>
          <button>Просмотреть детали</button>
        </div>
        <div className='Cards-forPage'>
          <div className='Card-profilfr'>
            <img src={ImgTeacher} alt='' />
            <div className='Hashs'>
              <h4>Малинина Виктория Петровна</h4>
              <span>2023/12/13</span>
            </div>
          </div>
          <h2>Экскурсия в музей</h2>
          <p>
            На следующей неделе мы планируем выезд в краеведческий музей на
            выставку “История новогодней игрушки”. Среда 26 декабря 10.00
            Стоимость 300 р. Просьба ко всем родителям определиться сегодня до
            конца дня.
          </p>
          <button>Просмотреть детали</button>
        </div>
      </div>
    </div>
  )
}
