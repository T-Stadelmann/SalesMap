import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Marker, Popup } from "react-map-gl";
import { fetchContactsFunction } from "../../store/actions/fetchContactsAction";
import { PinButton } from "../../styles/buttons";
import { ReactComponent as PinIcon } from "../../assets/pin-4.svg";
import SideDrawer from "./SideDrawer"
import { toggleInfoDrawerFunction } from "../../store/actions/toggleInfoDrawerAction";
import { toggleFilterDrawerFunction } from "../../store/actions/toggleFilterDrawerAction";
import { toggleUploadDrawerFunction } from "../../store/actions/toggleUploadDrawerAction";
import { setClickedPinIndexFunction } from "../../store/actions/setClickedPinIndexAction";
import { toggleMenuFunction } from "../../store/actions/toggleMenuAction";
import { toggleShowChartFunction } from "../../store/actions/toggleShowChartAction";
import styled from "styled-components";
import Chart from 'react-apexcharts';
import { faChartBar, faFilter, faBars, faTruck, faFileInvoice, faUser, faTasks, faBriefcase, faBuilding, faCalendarAlt, faMapMarkerAlt, faDollarSign, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DonutSpinner } from "../../styles/fileUploadStyles";


const chartOptions= {
  chart: {
      id: 'Invoices'
  },
  title: {
      text: "Invoice: Sales Volume",
      align: "center",
      style: {
          color: '#212c56',
          fontSize: '30px',
      }
  },
  fill: {
       colors: ['#9abfe2']
    },
  style: {
      width: '10px',
      border: null
    },

  plotOptions: {
      dataLabels: {
          enabled: true,
          position: 'top'
      }
  },
  legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      label:{
          color: 'black'
      }
  },
  xaxis: {
      categories: [],
      title: {
          text: "Year-Months",
          style: {
              fontSize: '30px',
              color: '#212c56',
              fontWeight: 'bold'
          }
      },

  },
  yaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      title: {
          text: "CHF",
          style: {
              fontSize: '30px',
              color: '#212c56',
              fontWeight: 'bold'
          }
      },

  }
}

const PopupText = styled.h2`
font-size: 16px;
font-weight: 100;
letter-spacing: 1px;
padding-bottom: 2.5px;
padding-top: 2.5px;
color: rgb(80,80,80);
`;

const DropDown = styled.select`
  border: none;
  background-color: transparent;
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
  padding: 0.3rem;
  padding-right: 1.2rem;
  color: rgb(80,80,80);
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
`;

 const FilterDrawer = styled.div`
  width: 250px;
  position: fixed;
  height: 100%;
  top:6%;
  right: 0; 
  z-index: 1;
  transform: translateX(92.5%);
  transition: transform 0.3s ease-out;
  background-color: transparent;
  display: flex;
  align-items:center;
  &.open {
    transform: translateX(0);
  }
  :hover {
    cursor: default
  }
  overflow-y: scroll;
  `;


const FilterContainer = styled.div`
  height: 130%;
  bottom: -120px;
  width: 100%;
  padding: 30px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: flex-start; */
  background-color: rgb(247,247,247);
  border-top-left-radius: 12px;
  position:relative;
`;


const FileUploadDrawer = styled.div`
  height: 15%;
  width: 100%;
  top:0;
  left:50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  z-index:9999999;
  transform: translateY(-85%);
  transition: transform 0.4s ease-out;
  &.open {
    transform: translateY(0);
  }
  `;

const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255,255,255,0.8);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 10px;
  `;

  const DrawerButton = styled.button` 
  background-color: rgba(188,189,220,0.8);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  height:160px;
  width: 20px;
  border: none;
  padding-left:2px;
  padding-right:2px;
  z-index: 3 !important;
  display:flex;
  justify-content:center;
  align-items: center;
  :hover {
    cursor: pointer
  }
  `;

const FilterHeading = styled.h2`
  font-weight: 600;
  width: 100%;
  text-align: left;
  letter-spacing: 2px;
  color: rgb(35,35,35);
  width: 100%;
  `;

const FilterSubHeading = styled.h2`
  font-size:18px;
  letter-spacing: 1.2px;
  padding-bottom: 7px;
  margin-bottom: 10px;
  border-bottom: solid 0.1px rgb(200,200,200);
  text-align:left;
  color: rgb(35,35,35);
  width: 100%;
  margin-top: 10px;
  `;

const Backdrop = styled.div`
background-color: transparent;
position:fixed;
top:15%;
width: 100%;
height: 100%;
`;

const ChartDrawer = styled.div` 
  display:flex;
  flex-direction: column;
  align-items:center;
  position:absolute;
  bottom:0;
  height:380px;
  width:100%;
  /* align-self:center; */
  padding: 0;
  background-color:transparent;
  transform: translateY(94.8%);
  transition: transform 0.3s ease-out;
  &.visible {
    transform: translateY(22%);
  }
`;




const MapMarkers = (props) => {

  const [selectedPin, setSelectedPin] = useState(null);
  const [hoverPinIndex, setHoverPinIndex] = useState(null)
  /* const [clickedPinIndex, setClickedPinIndex] = useState(null) */
  /* const [pinColor, setPinColor] = useState('#E66101') */
  const [showChart, setShowChart] = useState(null)
  
  const [contactPerson, setContactPerson] = useState('Contact person')

  const [invoiceStatus, setInvoiceStatus] = useState('Status')
  const [invoiceGrossSales, setInvoiceGrossSales] = useState('Acc. Gross Sales')
  const [invoiceNetSales, setInvoiceNetSales] = useState('Acc. Net Sales')
  const [invoiceDate, setInvoiceDate] = useState('Date')

  const [deliveryStatus, setDeliveryStatus] = useState('Status')
  const [deliveryDate, setDeliveryDate] = useState('Date')

  const [orderStatus, setOrderStatus] = useState('Status')
  const [orderGrossSales, setOrderGrossSales] = useState('Acc. Gross Sales')
  const [orderNetSales, setOrderNetSales] = useState('Acc. Net Sales')
  const [orderDate, setOrderDate] = useState('Date')

  const [offerStatus, setOfferStatus] = useState('Status')
  const [offerGrossSales, setOfferGrossSales] = useState('Acc. Gross Sales')
  const [offerNetSales, setOfferNetSales] = useState('Acc. Net Sales')
  const [offerDate, setOfferDate] = useState('Date')

  const backdropButtonHandler = (e) => {
    if (props.showFilterDrawer) { props.dispatch(toggleFilterDrawerFunction()) }
    if (props.showInfoDrawer) { props.dispatch(toggleInfoDrawerFunction()) }
    if (props.showUploadDrawer) { props.dispatch(toggleUploadDrawerFunction()) }
    if (props.showMenu) { props.dispatch(toggleMenuFunction()) }
    if (props.showColorPicker) { props.dispatch(toggleMenuFunction()) }
    if (props.showChart) { props.dispatch(toggleShowChartFunction()) }
    props.dispatch(setClickedPinIndexFunction(null))
  }

  useEffect( () => { 
    props.dispatch(fetchContactsFunction()) 
  }, []);


  const fileUploadDrawerButtonHandler = (e) => {
    props.dispatch(toggleUploadDrawerFunction())
    setShowChart(!showChart)
  }

  const filterDrawerButtonHandler = (e) => {
    props.dispatch(toggleFilterDrawerFunction())
  }




  return (
    <>
    
    {
          (props.showFilterDrawer || props.showUploadDrawer || props.showChart) ? 
            <Backdrop onDoubleClick={ backdropButtonHandler }/>
          : null
      }

    {props.contacts ?
      <SideDrawer clickedPin={props.clickedPinIndex!==null & props.clickedPinIndex!==undefined ? props.contacts[props.clickedPinIndex] : null} />
    : <DonutSpinner/>
    }
  
    <FilterDrawer className={props.showFilterDrawer ? 'open' : 'closed'}>
    <DrawerButton onClick={ filterDrawerButtonHandler }>
      {/* <DropdownIcon height='100%' width='15px' fill='rgb(49,130,189)' transform={props.showFilterDrawer ? 'rotate(270)' : 'rotate(90)'} /> */}
      <FontAwesomeIcon icon={faFilter} style={{'cursor':'pointer'}}/>
      </DrawerButton>
    <FilterContainer>
      {/* <FilterHeading>Client Filter</FilterHeading> */}
      <FilterSubHeading style={{'marginTop':'0'}}><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faUser} style={{'marginRight':'12px'}}/>Contact person</FilterSubHeading>
    <DropDown onChange={(e) => setContactPerson(e.target.value) }>
        {
          props.contacts ?
          ['Contact person'].concat([...new Set([].concat(...props.contacts.map( contact => contact.contact_persons )))]).map( (contact_person,index) =>
            <option key={index} value={contact_person}>{contact_person}</option>
            )
          : null
        }
      </DropDown>
      <FilterSubHeading><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faFileInvoice} style={{'marginRight':'12px'}}/>Invoice</FilterSubHeading>
      <DropDown onChange={(e) => setInvoiceStatus(e.target.value) }>
        {
          props.contacts ?
          ['Status'].concat([...new Set([].concat(...props.contacts.map( contact => contact.invoices.map( invoice => invoice.status ) )))]).map( (status,index) =>
            <option key={index} value={status}>{status}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={ (e) => setInvoiceGrossSales(e.target.value) }>
        {
          props.contacts ?
          ['Acc. Gross Sales'].concat([...new Set([].concat(props.contacts.map( contact => contact.invoices.reduce( (total,invoice) => total+Number(invoice.gross_amount),0 ) ).sort()) )]).map( (amount,index) =>
            <option key={index} value={amount}>{amount !== 'Acc. Gross Sales' ? `CHF ${amount}` : amount}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={ (e) => setInvoiceNetSales(e.target.value) }>
        {
          props.contacts ?
          ['Acc. Net Sales'].concat([...new Set([].concat(props.contacts.map( contact => contact.invoices.reduce( (total,invoice) => total+Number(invoice.net_amount),0 ) ).sort()) )]).map( (amount,index) =>
            <option key={index} value={amount}>{amount !== 'Acc. Net Sales' ? `CHF ${amount}` : amount}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={(e) => setInvoiceDate(e.target.value) }>
        {
          props.contacts ?
          ['Date'].concat([...new Set([].concat(...props.contacts.map( contact => contact.invoicesTransformed.map( invoice => invoice.date ) )))]).map( (date,index) =>
            <option key={index} value={date}>{date}</option>
            )
          : null
        }
      </DropDown>
      <FilterSubHeading><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faTruck} style={{'marginRight':'12px'}}/>Delivery</FilterSubHeading>
      <DropDown onChange={(e) => setDeliveryStatus(e.target.value) }>
        {
          props.contacts ?
          ['Status'].concat([...new Set([].concat(...props.contacts.map( contact => contact.delivery.map( delivery => delivery.status ) )))]).map( (status,index) =>
            <option key={index} value={status}>{status}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={(e) => setDeliveryDate(e.target.value) }>
        {
          props.contacts ?
          ['Date'].concat([...new Set([].concat(...props.contacts.map( contact => contact.deliveryTransformed.map( delivery => delivery.date ) )))]).map( (date,index) =>
            <option key={index} value={date}>{date}</option>
            )
          : null
        }
      </DropDown>
      <FilterSubHeading><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faTasks} style={{'marginRight':'12px'}}/>Order</FilterSubHeading>
      <DropDown onChange={(e) => setOrderStatus(e.target.value) }>
        {
           <option value='all'>Order status</option>,
          props.contacts ?
          ['Status'].concat([...new Set([].concat(...props.contacts.map( contact => contact.orders.map( order => order.status ) )))]).map( (status,index) =>
            <option key={index} value={status}>{status}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={(e) => setOrderGrossSales(e.target.value) }>
        {
          props.contacts ?
          ['Acc. Gross Sales'].concat([...new Set([].concat(props.contacts.map( contact => contact.orders.reduce( (total,order) => total+Number(order.gross_amount),0 ) ).sort()) )]).map( (amount,index) =>
            <option style={{'marginLeft':'40px'}} key={index} value={amount}>{amount !== 'Acc. Gross Sales' ? `CHF ${amount}` : amount}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={(e) => setOrderNetSales(e.target.value) }>
        {
          props.contacts ?
          ['Acc. Net Sales'].concat([...new Set([].concat(props.contacts.map( contact => contact.orders.reduce( (total,order) => total+Number(order.net_amount),0 ) ).sort()) )]).map( (amount,index) =>
            <option key={index} value={amount}>{amount !== 'Acc. Net Sales' ? `CHF ${amount}` : amount}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={(e) => setOrderDate(e.target.value) }>
        {
          props.contacts ?
          ['Date'].concat([...new Set([].concat(...props.contacts.map( contact => contact.ordersTransformed.map( order => order.date ) )))]).map( (date,index) =>
            <option key={index} value={date}>{date}</option>
            )
          : null
        }
      </DropDown>
      <FilterSubHeading><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faBriefcase} style={{'marginRight':'12px'}}/>Offer</FilterSubHeading>
      <DropDown onChange={(e) => setOfferStatus(e.target.value) }>
        {
          props.contacts ?
          ['Status'].concat([...new Set([].concat(...props.contacts.map( contact => contact.offers.map( offer => offer.status ) )))]).map( (status,index) =>
            <option key={index} value={status}>{status}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={(e) => setOfferGrossSales(e.target.value) }>
        {
          props.contacts ?
          ['Acc. Gross Sales'].concat([...new Set([].concat(props.contacts.map( contact => contact.offers.reduce( (total,offer) => total+Number(offer.gross_amount),0 ) ).sort()) )]).map( (amount,index) =>
            <option key={index} value={amount}>{amount !== 'Acc. Gross Sales' ? `CHF ${amount}` : amount}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={(e) => setOfferNetSales(e.target.value) }>
        {
          props.contacts ?
          ['Acc. Net Sales'].concat([...new Set([].concat(props.contacts.map( contact => contact.offers.reduce( (total,offer) => total+Number(offer.net_amount),0 ) ).sort()) )]).map( (amount,index) =>
            <option key={index} value={amount}>{amount !== 'Acc. Net Sales' ? `CHF ${amount}` : amount}</option>
            )
          : null
        }
      </DropDown>
      <DropDown onChange={(e) => setOfferDate(e.target.value)}>
        {
          props.contacts ?
          ['Date'].concat([...new Set([].concat(...props.contacts.map( contact => contact.offersTransformed.map( offer => offer.date ) )))].sort()).map( (date,index) =>
            <option key={index} value={date}>{date}</option>
            )
          : null
        }
      </DropDown>
      </FilterContainer>
      </FilterDrawer>
      {
        props.contacts
          ? props.contacts
              .filter( contact => 
                contact.name_1.toLowerCase().indexOf(props.search.toLowerCase()) !== -1 || contact.contact_persons[0].toLowerCase().indexOf(props.search.toLowerCase()) !== -1 || contact.address.toLowerCase().indexOf(props.search.toLowerCase()) !== -1 )

              .filter( contact => contactPerson!=='Contact person' ? contact.contact_persons[0].includes(contactPerson) : true )

              .filter( contact => invoiceStatus!=='Status' ? contact.invoices.map(invoice => invoice.status).includes(invoiceStatus) : true)
              .filter( contact => invoiceGrossSales!=='Acc. Gross Sales' ? contact.invoices.reduce( (total,invoice) => total+Number(invoice.gross_amount),0 ) >= invoiceGrossSales : true)
              .filter( contact => invoiceNetSales!=='Acc. Net Sales' ? contact.invoices.reduce( (total,invoice) => total+Number(invoice.net_amount),0 ) >= invoiceNetSales : true)
              .filter( contact => invoiceDate!=='Date' ? contact.invoicesTransformed.map( invoice => invoice.date ) >= invoiceDate : true)

              .filter( contact => deliveryStatus!=='Status' ? contact.delivery.map(delivery => delivery.status).includes(deliveryStatus) : true)
              .filter( contact => deliveryDate!=='Date' ? contact.deliveryTransformed.map( delivery => delivery.date ) >= deliveryDate : true)

              .filter( contact => orderStatus!=='Status' ? contact.orders.map(order => order.status).includes(orderStatus) : true)
              .filter( contact => orderGrossSales!=='Acc. Gross Sales' ? contact.orders.reduce( (total,order) => total+Number(order.gross_amount),0 ) >= orderGrossSales : true)
              .filter( contact => orderNetSales!=='Acc. Net Sales' ? contact.orders.reduce( (total,order) => total+Number(order.net_amount),0 ) >= orderNetSales : true)
              .filter( contact => orderDate!=='Date' ? contact.ordersTransformed.map( order => order.date ) >= orderDate : true)

              .filter( contact => offerStatus!=='Status' ? contact.offers.map(offer => offer.status).includes(offerStatus) : true)
              .filter( contact => offerGrossSales!=='Acc. Gross Sales' ? contact.offers.reduce( (total,offer) => total+Number(offer.gross_amount),0 ) >= offerGrossSales : true)
              .filter( contact => offerNetSales!=='Acc. Net Sales' ? contact.offers.reduce( (total,offer) => total+Number(offer.net_amount),0 ) >= offerNetSales : true)
              .filter( contact => offerDate!=='Date' ? contact.offersTransformed.map( offer => offer.date ) >= offerDate : true)

              .map((pin,index) => (
              pin ?
                <Marker
                  key={index}
                  latitude={Number(pin.latitude)}
                  longitude={Number(pin.longitude)}
                >
                  <PinButton 
                    onMouseEnter={(e) => setSelectedPin(pin)}
                    onMouseLeave={(e) => setSelectedPin(null)}
                    onClick={ pinButtonHandler }
                  >
                    <PinIcon 
                      onMouseEnter={(e) => setHoverPinIndex(index)}
                      onMouseLeave={(e) => setHoverPinIndex(null)}
                      /* onClick={(e) => setClickedPinIndex(index)} */
                      onClick={(e) => props.dispatch(setClickedPinIndexFunction(index))}
                      fill={index===hoverPinIndex || (index===props.clickedPinIndex) ? 'rgb(230,97,1)' : props.showInfoDrawer ? props.pinColor : props.pinColor} 
                      height={ index===props.clickedPinIndex  ? '50px' : `${props.markerSize}px` }
                      style={
                        {'transform': index===props.clickedPinIndex ? 'translate(-13.5px,-28px)' : null}
                        // {'transform': index===props.clickedPinIndex ? 'translateY(-20px)' : null}
                      }
                      />
                  </PinButton>
                </Marker>
              : null
            ))
          : null
        }
      {
      selectedPin ? (
        <Popup
          closeButton={false}
          latitude={Number(selectedPin.latitude)}
          longitude={Number(selectedPin.longitude)}
        >
          <div>
            <PopupText><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faBuilding} style={{'marginRight':'10px'}}/>{selectedPin.name_1}</PopupText>
            <PopupText><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faUser} style={{'marginRight':'10px'}}/>{selectedPin.contact_persons[0]}</PopupText>
            <PopupText><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faMapMarkerAlt} style={{'marginRight':'10px'}}/>{selectedPin.address}</PopupText>
            {
              selectedPin.invoices.length ?
              <>
            <PopupText>
            <FontAwesomeIcon color={'rgb(153,142,195)'} icon={faDollarSign} style={{'marginRight':'10px'}}/>
            {
              `CHF ${selectedPin.invoices.reduce( (total,invoice) => 
                total + Number(invoice.gross_amount), 0 )}`
            }
            </PopupText>
            <PopupText><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faCalendarAlt} style={{'marginRight':'10px'}}/>{selectedPin.invoicesTransformed[0].date}</PopupText>
            </>
            : null
          }

          </div>
        </Popup>
      ) : null
      }
      {
      <ChartDrawer className={props.showChart ? 'visible' : null}>
      <DrawerButton onClick={ (e) => props.dispatch(toggleShowChartFunction()) } style={{'height':'20px','width':'160px','borderBottomLeftRadius':'0px','borderTopLeftRadius':'12px','borderTopRightRadius':'12px','display':'flex','justifyContent':'center'}} >
        <FontAwesomeIcon icon={faChartBar} style={{'cursor':'pointer'}}/>
        </DrawerButton>
      { props.contacts ?
      (props.clickedPinIndex!==null && props.clickedPinIndex!==undefined) ? <Chart options={chartOptions} series={[{'type':'bar','name':'Gross Sales Volume','data': props.contacts[props.clickedPinIndex].invoices.map((invoice)=>Number(invoice.gross_amount),0)},{'type':'line','name':'Net Sales valume','data': props.contacts[props.clickedPinIndex].invoices.map((invoice)=>Number(invoice.net_amount),0)}]} style={{'height':'100%','margin':'0','width':'500px','backgroundColor':'rgb(247,247,247)','padding':'10px','borderRadius':'20px'}}/> : null
      : null}
      </ChartDrawer >
}
    </>
  );
};


function mapStateToProps(state) {
    return {
      contacts: state.contacts.contacts,
      filteredContacts: state.contacts.filteredContacts,
      showInfoDrawer: state.toggleDrawer.showInfoDrawer,
      showFilterDrawer: state.toggleDrawer.showFilterDrawer,
      showUploadDrawer: state.toggleDrawer.showUploadDrawer,
      dragPan: state.toggleDrawer.dragPan,
      clickedPinIndex: state.toggleDrawer.clickedPinIndex,
      showChart: state.toggleDrawer.showChart
    };
  }
export default connect(mapStateToProps)(MapMarkers);

