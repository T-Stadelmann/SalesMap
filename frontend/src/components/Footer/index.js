import React from "react";
import {
    Address,
    FollowLabel, FooterDiv, InputBox,
    LabelColor,
    Links,
    LinksColor,
    NewsLetter,
    Para,
    Produkte,
    Seiten, SubmitButton
} from "../../styles/homePageStyles";

const Footer = () => {

    return(

            <FooterDiv style={{marginBottom:20}}>
                <Seiten>
                    <LabelColor type="text">SEITEN</LabelColor>
                    <LinksColor href="https://salesmap.ch/" target="_blank">HOME</LinksColor>
                    <LinksColor href="https://salesmap.ch/leistungen/" target="_blank">LEISTUNGEN</LinksColor>
                    <LinksColor href="https://salesmap.ch/produkte/" target="_blank">PRODUKTE</LinksColor>
                    <LinksColor href="https://salesmap.ch/projekte/" target="_blank">PROJEKTE</LinksColor>
                    <LinksColor href="https://salesmap.ch/ueber-uns/team/" target="_blank">TEAM</LinksColor>
                    <LinksColor href="https://salesmap.ch/ueber-uns/offerte/" target="_blank">OFFERTE</LinksColor>
                    <LinksColor href="https://salesmap.ch/ueber-uns/contact/" target="_blank">contact</LinksColor>

                    <LabelColor type="text" style={{marginTop: 30}}>SPRACHEN</LabelColor>
                    <LinksColor href="https://salesmap.ch/fr/services/" target="_blank">FRANÇAIS</LinksColor>

                </Seiten>

                <Produkte>
                    <LabelColor type="text">PRODUKTE</LabelColor>
                    <LinksColor href="https://salesmap.ch/produkt-category/leuchtmittel" target="_blank">LEUCHTMITTEL</LinksColor>
                    <LinksColor href="https://salesmap.ch/produkt-category/leuchten" target="_blank">LEUCHTEN</LinksColor>
                    <LinksColor href="https://salesmap.ch/produkt-category/zubehoer" target="_blank">ZUBEHÖR</LinksColor>
                </Produkte>

                <Links>
                    <LabelColor type="text">LINKS</LabelColor>
                    <LinksColor href="https://salesmap.ch/news/" target="_blank">NEWS</LinksColor>
                    <LinksColor href="https://salesmap.ch/faqs/" target="_blank">FAQS</LinksColor>
                    <LinksColor href="https://salesmap.ch/ueber-uns/contact/" target="_blank">contact</LinksColor>
                    <LinksColor href="https://salesmap.ch/jobs/" target="_blank">JOBS</LinksColor>
                    <LinksColor href="https://salesmap.ch/impressum/" target="_blank">IMPRESSUM</LinksColor>
                    <LinksColor href="https://salesmap.ch/agbs/" target="_blank">AGBS</LinksColor>
                    <LinksColor href="https://salesmap.ch/datenschutzerklaerung/" target="_blank">DATENSCHUTZERKLÄRUNG</LinksColor>

                    <FollowLabel type="text">Follow Us</FollowLabel>
                </Links>

                <Address>
                    <LabelColor type="text" style={{marginBottom: 20}}>ADDRESS</LabelColor>
                    <Para style={{marginBottom: 8}}>salesmap AG</Para>
                    <Para style={{marginBottom: 8}}>Technoparkstrasse 1</Para>
                    <Para style={{marginBottom: 8}}>CH-8005 Zürich</Para>
                    <Para style={{marginBottom: 8}}>INFO@salesmap.CH</Para>
                    <Para style={{marginBottom: 8}}>+41 44 500 73 85</Para>

                    <NewsLetter>
                        <Para><LabelColor type="text">NEWSLETTER</LabelColor></Para>
                        <Para><InputBox type="text" placeholder="E-Mailaddresse"></InputBox></Para>
                        <Para><SubmitButton>ANMELDEN</SubmitButton></Para>
                    </NewsLetter>
                </Address>

            </FooterDiv>
    )
}
export default Footer;