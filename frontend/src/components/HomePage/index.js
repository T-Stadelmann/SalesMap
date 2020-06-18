import React, {Component} from "react";
import Map from "../Map";


import {MainContainer,BodyContainer,FirstContainer,MiddleContainer,MapContainer} from "../../styles/homePageStyles";
import SideDrawer from '../SideDrawer';
import Footer from "../Footer";
import ToolBar from "../ToolBar";


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggleSideBar = this.toggleSideBar.bind(this)
    }
        toggleSideBar()
        {
            this.setState(
                {isOpen: !this.state.isOpen}
            )
        }

    render() {
        return(
                <MainContainer>
                    <BodyContainer>
                        <FirstContainer>
                            {/* <ToolBar drawerClickHandler={this.toggleSideBar}/> */}
                                <ToolBar />
                                <MiddleContainer>
                                    <SideDrawer isOpen={this.state.isOpen} onToggle={this.toggleSideBar}/>
                                    <MapContainer>
                                        <Map style={"mapbox://styles/ck8owa6rc08zo1jo1e6rwpa23"} />
                                    </MapContainer>
                                </MiddleContainer>
                        <Footer />
                        </FirstContainer>
                    </BodyContainer>
                </MainContainer>
        )
    }
}

export default HomePage;