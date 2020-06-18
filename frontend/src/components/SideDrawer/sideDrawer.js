import React, { Component} from 'react';
import { SideBarDrawer,SideListButton} from "../../styles/sidedrawer";
import {LinksColor} from "../../styles/homePageStyles";

class SideDrawer extends Component {
    render() {
        let drawerClasses = 'side-drawer'
        if(this.props.show) {
            drawerClasses = 'side-drawer open'
        }

        return (
            <SideBarDrawer className={drawerClasses} style={{width: 200}}>
                <ul>
                    <SideListButton>
                        <LinksColor href="">Load Data</LinksColor>
                    </SideListButton>
                    <SideListButton>
                        <LinksColor href="/dashboard">Dashboard</LinksColor>
                    </SideListButton>
                    <SideListButton>
                        <LinksColor href="">Settings</LinksColor>
                    </SideListButton>
                    <SideListButton>
                        <LinksColor href="/homepage">Logout</LinksColor>
                    </SideListButton>
                </ul>
            </SideBarDrawer>
        )
    }
}
export default SideDrawer;