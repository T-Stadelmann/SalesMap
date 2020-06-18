import React, { Component } from 'react';
import {DashboardGraph} from '../../styles/dashboard';
import {BodyContainer, FirstContainer, MainContainer, MiddleContainer} from "../../styles/homePageStyles";
import Chart from "../DashboardGraph";
import SideDrawer from "../SideDrawer/sideDrawer";
import ColorPicker from '../ColorPicker';

class Dashboard extends Component {

    render() {
        return(
            <MainContainer style={{backgroundColor: 'white'}}>
                <BodyContainer>
                    <FirstContainer>
                        <MiddleContainer style={{backgroundColor:'white'}}>
                            <SideDrawer />
                            <DashboardGraph>
                                <Chart />
                            </DashboardGraph>
                        </MiddleContainer>
                    </FirstContainer>
                </BodyContainer>
                <ColorPicker/>
            </MainContainer>
        )
    }
}
export default Dashboard;