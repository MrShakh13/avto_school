import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Img002 from "../img/image 34.png";
import Img001 from "../img/free-icon-daughter-8229500 (1).png";
import axios from "axios";
import url from "../host";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ImgAcc from "../img/free-icon-calendar-1258262 1.png";
import Imgcca from "../img/free-icon-file-968545 1.png";
import "./AllPages.css";

export default function Page1() {
  const [up, setup] = useState([]);
  const [child, setChild] = useState([]);
  const [selectedKid, setSelectedKid] = useState([]);
  const [oo, setOo] = useState([]);
  const [oo22, setOo22] = useState("18");

  const handleKidClick = (chilid) => {
    setSelectedKid(chilid);
    var nn = document.querySelector(".Cards-Page1-1");
    var ff = document.querySelector(".Cards-Page1");
    ff.style = "display: flex;";
    nn.style = "display: none;";
  };
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${url}/group_emp`)
        .then((res) => {
          const filteredGroup = res.data.filter(
            (group) =>
              group.employeeid === parseInt(localStorage.getItem("employ"))
          );
          axios.get(`${url}/group`).then((res2) => {
            for (let i = 0; i < res2.data.length; i++) {
              for (let j = 0; j < filteredGroup.length; j++) {
                if (res2.data[i].groupid === filteredGroup[j].groupid) {
                  filteredGroup[j].groupname = res2.data[i].groupname;
                }
              }
            }
            setup(filteredGroup);
          });
          axios.get(`${url}/child`).then((res3) => {
            setChild(res3.data);
          });
          axios.get(`${url}/excuse`).then((res4) => {
            setOo(res4.data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  useEffect(() => {}, [child, up]);

  const handlePageChange = (event, value) => {
    console.log(value);
    console.log(oo22);
    const oo = [];
    oo.push(value);
    setOo22(oo[0]); // Вывод выбранной страницы в консоль
  };
  return (
    <div className="The-Big" id="useirud">
      <h1> МАЙ 2023 </h1>
      <div className="Stackk">
        <div className="divv">
          <Pagination
            className="promry"
            onChange={handlePageChange}
            count={31}
          />
        </div>
        <div className="divv">
          <img src={ImgAcc} alt="" />
          <input className="dateee" type="date" />
        </div>
      </div>
      <div className="Cards-Page1-1">
        {up.map((element) => (
          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="ush">
                <img src={Img002} alt="" />
                <h1>{element.groupname} </h1>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="typogRaf">
                {child.map((item) => {
                  if (element.groupid === item.groupid) {
                    return (
                      <div
                        onClick={() => handleKidClick(item)}
                        className="kids-baby"
                      >
                        {child.map((thing) => {
                          if (element.groupid === thing.groupid) {
                            const filteredThings2 = oo.filter(
                              (thing2) => thing.childid === thing2.childid
                            );
                            const data =
                              filteredThings2.length > 0
                                ? filteredThings2[0].datestart.slice(8, 10)
                                : null;
                            return (
                              <>
                                {filteredThings2.length > 0 && (
                                  <p className="oooo">
                                    {filteredThings2.length} отсутствует
                                  </p>
                                )}
                              </>
                            );
                          }
                        })}
                        <div className="baby">
                          <img src={Img001} alt="" />
                          <h2>{item.childfirstname}</h2>
                        </div>
                      </div>
                    );
                  }
                })}
              </Typography>
              <a href='/page6'>
                <button className="groppas"><img src={Imgcca} /> ЗАПИСИ О ПРОПУСКАХ</button>
              </a>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      {selectedKid && (
        <div className="Cards-Page1">
          <div className="CardProfil-Page1">
            <img src={selectedKid.photo} alt="" />
            <br />
            <h4>{selectedKid.name}</h4>
          </div>
          <div className="Card-Page1">
            <div className="Input-grup">
              <h4>Фамилия</h4>
              <p>{selectedKid.childlastname}</p>
            </div>
            <div className="Input-grup">
              <h4>Имя</h4>
              <p>{selectedKid.childfirstname}</p>
            </div>
            <div className="Input-grup">
              <h4>Группа</h4>
              <p>{selectedKid.groupid}</p>
            </div>
            <div className="Input-grup">
              <h4>Дата рождения</h4>
              <p>{selectedKid.dateofbirth}</p>
            </div>
            <div className="Input-grup">
              <h4>Представители</h4>
              <ul>
                {/* {selectedKid.representatives.map((rep, index) => (
                  <li key={index}>
                    {rep.name} {rep.phone}
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
