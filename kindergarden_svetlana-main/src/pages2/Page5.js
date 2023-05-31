import React, { useState, useEffect } from "react";
import axios from "axios";
import Img1 from "../img/free-icon-daughter-8229500.png";
import Img12 from "../img/free-icon-child-5238428.png";
import Img11 from "../img/Group 133.png";
import Img2 from "../img/free-icon-kindergarden-5235725 1.png";
import './AllPages2.css'
import url from "../host";

export default function Page5() {
  const [child22, useChild2] = useState([]);
  const [bolas22, useBola2] = useState([]);
  const [group2, useGroup22] = useState([]);
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
  return (
    <div className='Page5niki'>

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
                    </div>
                  ); 
                }
              }
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
