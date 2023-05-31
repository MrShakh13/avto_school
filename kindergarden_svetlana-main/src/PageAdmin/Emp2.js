import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import icon1 from '../img/free-icon-edit-6488637 (2).png'
import icon2 from '../img/free-icon-delete-5396993.png'

import './css/Emp2.css'
// import './People.js'/


export default class Employees extends Component {
    render() {
        return (
            <div className='body' id='bodyEmp'>
                <h1 className='bigah1'>Список сотрудников</h1>
                <div className="biga-pages">
                    <Dropdown id="drop">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Должность
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Добавите</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Добавите</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Добавите</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown id="drop">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Группа
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Добавите</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Добавите</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Добавите</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown id="drop">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Занятие
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Добавите</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Добавите</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Добавите</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <a href='/people'><button id="btnlar1">  Добавить сотрудника </button></a>
                </div>
                <div id='tables'>
                    <div id='names'>
                        <p>ID</p>
                        <p>Фамилия</p>
                        <p>Имя</p>
                        <p>Отчество</p>
                        <p>Дата <br /> рождения</p>
                        <p>Должность</p>
                        <p>Дата <br /> добавления</p>
                        <p>Действие</p>
                    </div>
                    <div id='inform1'>
                        <div id='inform-p'>
                            <p>1</p>
                            <p>Марина</p>
                            <p>Вероника</p>
                            <p>Петровна</p>
                            <p>20/03/1986</p>
                            <p>Воспитатель</p>
                            <p>15/07/2020</p>
                            <div id='iconci'>
                                <img src={icon1} alt='' />
                                <img src={icon2} alt='' />
                            </div>
                        </div>
                    </div>

                    <div id='inform2'>
                        <div id='inform-p'>
                            <p>2</p>
                            <p>Носова</p>
                            <p>Вероника</p>
                            <p>Петровна</p>
                            <p>20/03/1986</p>
                            <p>Воспитатель</p>
                            <p>15/07/2020</p>
                            <div id='iconci'>
                                <img src={icon1} alt='' />
                                <img src={icon2} alt='' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
