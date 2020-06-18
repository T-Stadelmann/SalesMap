import React, { Component } from 'react';
import {HeaderContainer, Title} from "../../styles/homePageStyles";
import { ToggleButton,ToggleButtonLine} from "../../styles/toolbar";
import DrawerToggleButton from "../SideDrawer/drawerToggleButton";

class ToolBar extends Component {

    render() {

        return(
            <HeaderContainer>
                <DrawerToggleButton toggle={this.props.drawerClickHandler} />
                <Title>salesmap Sales Map UI</Title>
            </HeaderContainer>
    )

    }
}
export default ToolBar;