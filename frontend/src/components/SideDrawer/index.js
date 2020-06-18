import React, { Component } from 'react';
import SideDrawer from "./sideDrawer";
import Backdrop from "./backdrop";
import DrawerToggleButton from "./drawerToggleButton";

class SideBar extends Component {
   state = {
       drawerOpen: false
   }
   drawerToggleClickHandler = () => {
       this.setState( {
           drawerOpen: !this.state.drawerOpen
       })
   }
   backdropClickHandler = () => {
       this.setState({
           drawerOpen: false
       })
   }
   render() {
       let backdrop;
       if(this.props.isOpen) {
           backdrop = <Backdrop close = {this.props.toggle} />;
       }
       return (
           <div>
               <SideDrawer show ={this.props.isOpen} />

            </div>
       )
   }
}
export default SideBar;