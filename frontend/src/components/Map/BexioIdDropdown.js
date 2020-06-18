import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DropDown = styled.select`
  /* border: none; */
  /* background-color: transparent; */
  /* margin-top: -2px; */
  font-size: 16px;
  font-weight: 100;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  margin-right: 2rem;
  margin-top: -0.3rem;
  padding: 0.3rem;
  padding-right: 1.2rem;
  color: rgb(80,80,80);
`;

const Ul = styled.ul`
  height: 80%;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
`;

const Li = styled.ul`
  padding-bottom: 5px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 100;
  color: rgb(80,80,80);
`;

const DocContainer = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 100;
  width: 100%;
`;

const ListHeader = styled.h2`
  font-weight: 100;
  font-size:18px;
  letter-spacing: 1.2px;
  padding-bottom: 7px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: solid 0.1px rgb(200,200,200);
  color: rgb(35,35,35);
`;

const BexioId = styled.span`
  margin-right: 5px;
  font-size: 16px;
  font-weight: 100;
  color: rgb(80,80,80);
`;

const BexioIdDropdown = (props) => {
  const [item, setItem] = useState(null);


  return (
    <DocContainer>
      <ListHeader><FontAwesomeIcon color={'rgb(153,142,195)'} icon={props.icon} style={{'marginRight':'12px'}}/>{props.heading}</ListHeader>
      <Ul>
        <Li>
          <BexioId>Bexio id:</BexioId>
          {props.data.length ? (
            props.data.length > 1 ? (
              <DropDown onChange={(e) => setItem(props.data[e.target.value]) }>
                {props.data.map((data_item, index) => (
                  <option key={index} value={index}>
                    {data_item.application_id}
                  </option>
                ))}
              </DropDown>
            ) : item ? item.application_id : "N/A"
          ) : (
            "N/A"
          )
          }
        </Li>
        <Li>Status: {item===null ? (props.data.length ? props.data[0].status : "N/A") : item.status}</Li>
        {props.heading !== "Delivery" ? (
          <>
            <Li>Gross sales: {item===null ? (props.data.length ? `CHF ${props.data[0].gross_amount}` : "N/A") : `CHF ${item.gross_amount}`}</Li>
            <Li>Net sales: {item===null ? (props.data.length ? `CHF ${props.data[0].net_amount}` : "N/A") : `CHF ${item.net_amount}`}</Li>
          </>
        ) : null}
        <Li>Date: {item===null ? (props.data.length ? props.data[0].date : "N/A") : item.date}</Li>
      </Ul>
    </DocContainer>
  );
};

export default BexioIdDropdown;
