/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllPages2.css";
import Img1 from "../img/free-icon-daughter-8229500.png";
import Img12 from "../img/free-icon-child-5238428.png";
import Img11 from "../img/Group 133.png";
import Img2 from "../img/free-icon-kindergarden-5235725 1.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import image from "../img/image 45.png";
import url from "../host";
import img from "../img/image 37.png";
import imasd from "../img/image 46.png";
// import imgtest from "/public/img"
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Page2() {
  const [value, setValue] = React.useState(0);
  const [child22, useChild] = useState([]);
  const [bolas, useBola] = useState([]);
  const [group, useGroup] = useState([]);
  const [selectedKid, setSelectedKid] = useState([]);
  const [relation, setRelation] = useState([]);
  const [legalrep, setLegalrep] = useState([]);
  const [person, setPerson] = useState([]);
  const [test, setTest] = useState([]);
  const [question, setQuestion] = useState([]);
  const [skill, setKill] = useState([]);
  const [skillgroup, setKillgroup] = useState([]);
  // const a ="5773268.png"
  // const[gruo,setGruo]=useState()

  useEffect(() => {
    const fetchData3 = async () => {
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
            useBola(tempBolas);
            // useChild(filteredChildren);
          });
        })
        .catch((err) => {
          console.log(err);
        });
      axios.get(`${url}/child`).then((res33) => {
        useChild(res33.data);
      });
      axios.get(`${url}/group`).then((res44) => {
        useGroup(res44.data);
      });
      axios.get(`${url}/relation`).then((res55) => {
        setRelation(res55.data);
      });
      axios.get(`${url}/Legal_Rep`).then((res66) => {
        setLegalrep(res66.data);
      });
      axios.get(`${url}/person`).then((res77) => {
        setPerson(res77.data);
      });
      axios.get(`${url}/test`).then((res88) => {
        setTest(res88.data);
      });
      axios.get(`${url}/question`).then((res99) => {
        setQuestion(res99.data);
      });
    };
    fetchData3();
  }, []);

  useEffect(() => {}, [
    bolas,
    child22,
    group,
    selectedKid,
    relation,
    legalrep,
    person,
    test,
    question,
  ]);

  /////////
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function KidsBlock(childid) {
    setSelectedKid(childid);
    document.querySelector(".box-ss").style = "display: block;";
    document.querySelector(".kids-Page2").style = "display: none;";
  }
  function CHECK(id) {
    const variant = id[0];
    const javob = id[1];
    const test =id[2]
    console.log(variant);
    console.log(javob);
    console.log(test, "test");
    if (variant === javob) {
      console.log("turi");
      document.querySelector(".modall").style.display = "block";
      setTimeout(() => {
        document.querySelector(".modall").style.display = "none";
      }, 2000);
    } else {
      console.log("notori");
      document.querySelector(".modall2").style.display = "block";
      setTimeout(() => {
        document.querySelector(".modall2").style.display = "none";
      }, 2000);
    }
  }

  return (
    <div>
      <div className="modall">

      </div>

      <div className="modall2">
      </div>
      <Box sx={{ width: "100%" }} className="box-ss">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Профиль" {...a11yProps(0)} />
            <Tab label="Задания" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {child22.map((item) => {
            if (selectedKid.childid === item.childid) {
              if (item.gender==="ж") {
                return (
                  <div className="Cards-Page1">
                    <div className="CardProfil-Page1">
                      <img src={Img1} alt="" />
                      <br />
                      <h4>{item.childfirstname} </h4>
                    </div>
                    <div className="Card-Page1">
                      <div className="Input-grup">
                        <h4>Фамилия</h4>
                        <p>{item.childlastname}</p>
                      </div>
  
                      <div className="Input-grup">
                        <h4>Имя</h4>
                        <p>{item.childfirstname}</p>
                      </div>
  
                      <div className="Input-grup">
                        <h4>Группа</h4>
                        {group.map((item2) => {
                          if (item.groupid === item2.groupid) {
                            return <p>{item2.groupname}</p>;
                          }
                        })}
                      </div>
  
                      <div className="Input-grup">
                        <h4>Дата рождения</h4>
                        <p>{item.dateofbirth.slice(0, 10)}</p>
                      </div>
  
                      <div className="Input-grup">
                        <h4>Представители</h4>
                        <ul>
                          {relation.map((item3) => {
                            if (item.childid === item3.childid) {
                              return (
                                <li>
                                  {" "}
                                  {item3.status}
                                  {legalrep.map((item4) => {
                                    if (item3.legalrepid === item4.legalrepid) {
                                      return (
                                        <>
                                          {person.map((item5) => {
                                            if (
                                              item4.personid === item5.personid
                                            ) {
                                              return (
                                                <span>
                                                  {" "}
                                                  {item5.personlastname}{" "}
                                                  {item5.personfirstname}{" "}
                                                  {item5.personmiddlename}{" "}
                                                  {item5.phone}
                                                </span>
                                              );
                                            }
                                          })}
                                        </>
                                      );
                                    }
                                  })}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
  
                      <div className="Input-grup">
                        <h4>Дополнительно</h4>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </div>
                );         
              }else{
                return (
                  <div className="Cards-Page1">
                    <div className="CardProfil-Page1">
                      <img src={Img12} alt="" />
                      <br />
                      <h4>{item.childfirstname} </h4>
                    </div>
                    <div className="Card-Page1">
                      <div className="Input-grup">
                        <h4>Фамилия</h4>
                        <p>{item.childlastname}</p>
                      </div>
  
                      <div className="Input-grup">
                        <h4>Имя</h4>
                        <p>{item.childfirstname}</p>
                      </div>
  
                      <div className="Input-grup">
                        <h4>Группа</h4>
                        {group.map((item2) => {
                          if (item.groupid === item2.groupid) {
                            return <p>{item2.groupname}</p>;
                          }
                        })}
                      </div>
  
                      <div className="Input-grup">
                        <h4>Дата рождения</h4>
                        <p>{item.dateofbirth.slice(0, 10)}</p>
                      </div>
  
                      <div className="Input-grup">
                        <h4>Представители</h4>
                        <ul>
                          {relation.map((item3) => {
                            if (item.childid === item3.childid) {
                              return (
                                <li>
                                  {" "}
                                  {item3.status}
                                  {legalrep.map((item4) => {
                                    if (item3.legalrepid === item4.legalrepid) {
                                      return (
                                        <>
                                          {person.map((item5) => {
                                            if (
                                              item4.personid === item5.personid
                                            ) {
                                              return (
                                                <span>
                                                  {" "}
                                                  {item5.personlastname}{" "}
                                                  {item5.personfirstname}{" "}
                                                  {item5.personmiddlename}{" "}
                                                  {item5.phone}
                                                </span>
                                              );
                                            }
                                          })}
                                        </>
                                      );
                                    }
                                  })}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
  
                      <div className="Input-grup">
                        <h4>Дополнительно</h4>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </div>
                );   
              }
            }
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="divs-tst">
            {test.map((item) => {
              if (selectedKid.childid === item.childid) {
                return (
                  <>
                    {question.map((item2) => {
                      if (item.questionid === item2.questionid && "Какой из этих предметов не относится к живой природе?"===item2.question) {
                        return (
                          <div className="dvasew">
                            <p>{item2.question}</p>
                            <div className="fykjh">
                              {/* <img src={img} alt="" /> */}

                              <img
                                src={"./img/" + item2.question_img}
                                alt={item2.question_img}
                              />
                              <div className="aysdu">
                                <button
                                  onClick={() => CHECK([1, item2.answer,item.testid])}
                                >
                                  1
                                </button>
                                <br />
                                <button
                                  onClick={() => CHECK([2, item2.answer,item.testid])}
                                >
                                  2
                                </button>
                                <br />
                                <button
                                  onClick={() => CHECK([3, item2.answer,item.testid])}
                                >
                                  3
                                </button>
                                <br />
                                <button
                                  onClick={() => CHECK([4, item2.answer,item.testid])}
                                >
                                  4
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      }  if(item.questionid === item2.questionid && "На какую букву начинаются названия этих предметов?"===item2.question){
                        return (
                          <div className="dvasew">
                            <p>{item2.question}</p>
                            <div className="fykjh">
                              {/* <img src={img} alt="" /> */}

                              <img
                                src={"./img/" + item2.question_img}
                                alt={item2.question_img}
                              />
                              <div className="aysdu">
                                <button
                                  onClick={() => CHECK([3, item2.answer,item.testid])}
                                >
                                  Б
                                </button>
                                <br />
                                <button
                                  onClick={() => CHECK([2, item2.answer,item.testid])}
                                >
                                  В
                                </button>
                                <br />
                                <button
                                  onClick={() => CHECK([1, item2.answer,item.testid])}
                                >
                                  Г
                                </button>
                                <br />
                                <button
                                  onClick={() => CHECK([4, item2.answer,item.testid])}
                                >
                                  Д
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      
                  
                    })}
                  </>
                );
              } 
            })}
          </div>
        </TabPanel>
      </Box>

      <div className="kids-Page2">
        {bolas.map((item) => (
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
                        {group.map((item33) => {
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
                      <button className="kkk" onClick={() => KidsBlock(item)}>
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
                        {group.map((item33) => {
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
                      <button className="kkk" onClick={() => KidsBlock(item)}>
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
    </div>
  );
}
