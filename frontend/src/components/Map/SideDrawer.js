import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import BexioIdDropdown from "./BexioIdDropdown"
import { toggleInfoDrawerFunction } from "../../store/actions/toggleInfoDrawerAction";
import { setClickedPinIndexFunction } from "../../store/actions/setClickedPinIndexAction";
import { toggleDragPanFunction } from "../../store/actions/toggleDragPanAction";
import { ReactComponent as DropdownIcon } from "../../assets/dropdown-icon.svg";
import { faInfo, faBars, faTruck, faFileInvoice, faUser, faTasks, faBriefcase, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MainContainer = styled.div`
  width: 320px;
  position: fixed;
  height: 100vh;
  top:6%;
  left: 0; 
  z-index: 1;
  transform: translateX(-94%);
  transition: transform 0.3s ease-out;
  margin-top: 0px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  background-color: transparent;
  display: flex;
  align-items:center;
  z-index: 99999;
  &.open {
    transform: translateX(0);
  }
  :hover {
    cursor: default
  }
  overflow: scroll;
  scroll-padding-bottom: 20%;
  `;

const SubContainer = styled.div`
  height: 130%;
  bottom: -120px;
  width: 100%;
  padding: 30px;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start; */
  background-color: rgb(247,247,247);
  border-top-right-radius: 12px;
  position:relative;
`;

const DrawerButton = styled.button` 
  background-color: rgba(188,189,220,0.8);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  height:160px;
  width: 20px;
  border: none;
  padding-left:2px;
  padding-right:2px;
  display:flex;
  top:20%;
  display:flex;
  justify-content:center;
  align-items: center;
  :hover {
    cursor: pointer
  }
  `;

const Ul = styled.ul`
    height: 80%;
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

const ListItemWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  `;

const ListHeader = styled.h2`
  font-weight: 600;
  font-size:18px;
  letter-spacing: 1.2px;
  padding-bottom: 7px;
  margin-bottom: 10px;
  border-bottom: solid 0.1px rgb(200,200,200);
  color: rgb(35,35,35);
  `;

const Backdrop = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  /* z-index: 999; */
  `;


const SideDrawer = (props) => {

  const backdropButtonHandler = (e) => {
    props.dispatch(toggleInfoDrawerFunction())
    props.dispatch(setClickedPinIndexFunction(null))
  }

  const infoDrawerButtonHandler = (e) => {
    props.dispatch(toggleInfoDrawerFunction())
    // if (props.dragPan) { props.dispatch(toggleDragPanFunction()) }
  }

    return (<>
        <MainContainer className={props.showInfoDrawer ? 'open' : 'closed'} style={{'overflowY':'auto'}}>
          <SubContainer>
          <ListItemWrapper>
            <ListHeader><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faBuilding} style={{'marginRight':'12px'}}/>Client</ListHeader>
            <Ul>
              <Li>Name: {props.clickedPin ? props.clickedPin.name_1 : null}</Li>
              <Li>Address: {props.clickedPin ? props.clickedPin.address : null}</Li>
              <Li>Postalcode: {props.clickedPin ? props.clickedPin.post_code : null}</Li>
              <Li>
                  {
                    props.clickedPin ? 
                    `Contact: ${props.clickedPin.contact_persons[0]}`
                    : null
                  }
              </Li>
            </Ul>
          </ListItemWrapper>
          {props.clickedPin ?
          <>
          <BexioIdDropdown data={props.clickedPin.invoicesTransformed} heading='Invoice' icon={faFileInvoice}/>
          <BexioIdDropdown data={props.clickedPin.deliveryTransformed} heading='Delivery' icon={faTruck}/>
          <BexioIdDropdown data={props.clickedPin.ordersTransformed} heading='Order' icon={faTasks}/>
          <BexioIdDropdown style={{'padding-bottom':'100px'}} data={props.clickedPin.offersTransformed} heading='Offer' icon={faBriefcase}/>
          </>
          : null }
          </SubContainer>
        <DrawerButton onClick={ infoDrawerButtonHandler }>
          {/* <DropdownIcon height='100%' width='15px' fill='rgb(49,130,189)'  transform={props.showInfoDrawer ? 'rotate(90)' : 'rotate(270)'}/> */}
          <FontAwesomeIcon icon={faInfo} style={{'cursor':'pointer'}}/>
        </DrawerButton>
        </MainContainer>
      {
          props.showInfoDrawer ? 
            <Backdrop onDoubleClick={ backdropButtonHandler }/>
          : null
      }
      </>
    )
}


function mapStateToProps(state) {
    return {
      showInfoDrawer: state.toggleDrawer.showInfoDrawer,
      showUploadDrawer: state.toggleDrawer.showUploadDrawer,
      dragPan: state.toggleDrawer.dragPan
    };
  }

export default connect(mapStateToProps)(SideDrawer);