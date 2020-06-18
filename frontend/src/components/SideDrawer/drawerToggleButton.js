import {ToggleButton, ToggleButtonLine} from "../../styles/toolbar";
import React from "react";

class DrawerToggleButton extends React.Component {
    render() {

    return(
               <ToggleButton onMouseOver={this.props.toggle} onMouseLeave={this.props.toggle}>
                    <ToggleButtonLine />
                    <ToggleButtonLine />
                    <ToggleButtonLine />
               </ToggleButton>
    )

    }
}
export default DrawerToggleButton;