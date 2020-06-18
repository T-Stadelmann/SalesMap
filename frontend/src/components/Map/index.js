import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReactMapGL,{ NavigationControl } from "react-map-gl";
import MapMarkers from "./MapMarkers";
import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import { SketchPicker } from 'react-color';
import { logoutFunction } from "../../store/actions/logoutAction";
import { toggleMenuFunction } from "../../store/actions/toggleMenuAction";
import { toggleColorPickerFunction } from "../../store/actions/toggleColorPickerAction";
import { faBars, faTint, faMapMarker, faChartLine, faSignOutAlt, faDirections, faUpload, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = styled.div`
  width: 100%;
  height: 6vh;
  padding-left: 20px;
  padding-right: 20px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index:2;
  background-color: rgba(247,247,247,0.3)
  `;


const MenuContainer = styled.div`
  position: fixed;
  top: 51px;
  right: 0px;
  z-index: 999;
  border-bottom-left-radius: 10px;
  visibility: hidden;
  background-color: rgb(247,247,247);
  &.visible {
    visibility: visible
  }
  `;

const Ul = styled.ul`
    height: 80%;
    width:100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: flex-start;
`;

const Li = styled.ul`
  padding-bottom: 5px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 100;
  color: rgb(80,80,80);
  width:100%;
  padding-bottom:10px;
  padding-top:10px;
  padding-left:10px;
  padding-right:10px;
  letter-spacing: 1.5px;
  :hover {
    cursor: pointer;
    font-weight: 600;
    color: black;
    background-color: rgb(235,235,235);
  }
  `;

const ColorPickerContainer = styled.div`
  cursor: default;
  position:fixed;
  z-index: 999999;
  top: 50px;
  right: 10px;
  visibility: hidden;
  &.visible {
  visibility:visible
  }
  `;

const presetColors = [
  "rgb(27,158,119)",
  "rgb(217,95,2)",
  "rgb(117,112,179)",
  "rgb(231,41,138)",
  "rgb(102,166,30)",
  "rgb(230,171,2)",
  "rgb(166,206,227)",
  "rgb(31,120,180)",
  "rgb(178,223,138)",
  "rgb(51,160,44)",
  "rgb(251,154,153)",
  "rgb(227,26,28)"
];

const Backdrop = styled.div`
z-index: 1;
width: 100%;
height: 100%;
background-color: transparent;
position:'absolute';
top: 0;
left: 0;
background-color: transparent;
`;

const Input = styled.input`
width: 35px;
margin-left: 10px;
border: none;
opacity: 1;
background-color:transparent;
::-webkit-inner-spin-button {
  opacity: 1;
}
`;



const Map = (props) => {

  const [markerColor, setMarkerColor] = useState('#7578b3')
  const [markerSize, setMarkerSize] = useState('22')

  const [viewport, setViewport] = useState({
    latitude: 47.375,
    longitude: 8.5417,
    width: '100%',
    height: '100vh',
    zoom: 12.5,
    minZoom: 11,
    maxZoom: 13,
  });

  useEffect( () => { 
    if (props.showMenu) { props.dispatch(toggleMenuFunction()) }
  }, []);


  const menuButtonHandler = () => {
    if(!props.showMenu) {props.dispatch(toggleMenuFunction())}
    /* props.dispatch(toggleColorPickerFunction()) */
  }


  const logoutHandler = () => {
    props.dispatch(logoutFunction())
    props.history.push('/')
    };

  const backdropHandler = () => {
    if (props.showMenu) { props.dispatch(toggleMenuFunction()) }
    if (props.showColorPicker) { props.dispatch(toggleColorPickerFunction()) }
  }

  const [search, setSearch] = useState('')

  return (
    <>
    <NavBar>
    <a style={{'height':'100%','width':'15%','zIndex':'2','display':'flex','alignItems':'center'}} href="https://salesmap.ch"><img src={salesmap_logo} height='30px'/></a>
    <div style={{'margin':'0','height':'40px','width':'280px','backgroundColor':'white','borderRadius':'20px','display':'flex','alignItems':'center','padding':'10px'}}>
    <FontAwesomeIcon color={'rgb(153,142,195)'} icon={faSearch} style={{'marginRight':'10px'}}/><Input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" id="myNumber" placeholder='Search...' style={{'height':'100%','width':'80%'}}/>
    </div>
    <div style={{'height':'100%','width':'15%','zIndex':'1','display':'flex','alignItems':'center','justifyContent':'space-around'}}>
    <FontAwesomeIcon color={'grey'} size='1x' icon={faBars} onMouseOver={ menuButtonHandler } style={{'height':'200px','cursor':'pointer'}}/>
    </div>
    </NavBar>
    {
      props.showMenu ?
        <>
        <MenuContainer className={props.showMenu ? 'visible' : null}>
        <Ul>
          <Li onClick={ (e) => props.dispatch(toggleColorPickerFunction()) }><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faTint} style={{'marginRight':'12px'}}/>Marker Color</Li>
          <Li><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faMapMarker} style={{'marginRight':'10px'}}/>Marker Size:<Input value={markerSize} onChange={ (e) => setMarkerSize(e.target.value) } type="number" id="myNumber"></Input></Li>
          <Li onClick={ (e) => props.history.push('/dashboard') }><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faChartLine} style={{'marginRight':'12px'}}/>Dashboard</Li>
          <Li><a href='https://office.bexio.com/' style={{'textDecoration':'none','fontSize':'18px','color': 'rgb(80,80,80)'}}><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faDirections} style={{'marginRight':'12px'}}/>ERP System</a></Li> 
          <Li onClick={ (e) => props.history.push('/upload') }><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faUpload} style={{'marginRight':'12px'}}/>Upload Data</Li>
          <Li onClick={ logoutHandler } style={{'borderBottomLeftRadius': '10px'}}><FontAwesomeIcon color={'rgb(153,142,195)'} icon={faSignOutAlt} style={{'marginRight':'12px'}}/>Logout</Li>
        </Ul>
        </MenuContainer>
        </>
        : null
    }
    {
      <ColorPickerContainer className={props.showColorPicker ? 'visible' : null}>
      <SketchPicker color={markerColor} presetColors={presetColors} onChange={ (color) => setMarkerColor(color.hex) } />
      </ColorPickerContainer>
    }
   { (props.showMenu || props.showColorPicker) ? <div style={{'zIndex':'1','height':'90%','width':'100%','backgroundColor':'transparent','position':'absolute','bottom':'0','left':'0'}} onClick={ backdropHandler}/> : null}

    <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        dragPan={props.dragPan}
        scrollZoom={props.scrollZoom}
        doubleClickZoom={false}
        mapStyle={props.style}
        style={{'left':'0','top':'0','position':'fixed','width':'100vw','height':'100vh'}}
        onDoubleClick={ (e) => props.dispatch(toggleMenuFunction())}
      >

        <MapMarkers pinColor={markerColor} markerSize={markerSize} search={search}/>

        {/* <div style={{'width':'10%','right':'0px'}}>
        <NavigationControl showCompass={false} visualizePitch={true} style={{'top':'100px','width':'200px','background-color':'transparent'}}/>
        </div> */}
      </ReactMapGL>
    </>
  );
};


function mapStateToProps(state) {
    return {
      dragPan: state.toggleDrawer.dragPan,
      showMenu: state.toggleDrawer.showMenu,
      showColorPicker: state.toggleDrawer.showColorPicker,
      scrollZoom: state.toggleDrawer.scrollZoom
    };
  }

export default connect(mapStateToProps)(Map);
