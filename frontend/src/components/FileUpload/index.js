import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import FileUploadButton, {
    DonutSpinner,
    FileUploadContainer,
    FileUploadContainerClose,
    UploadContainer, UploadSuccess
} from "../../styles/fileUploadStyles";
import FileUploadInput from "./FileUploadInput";
import {toggleFileUploadFunction} from "../../store/actions/toggleFileUploadAction";
import {toggleUploadPopUpFunction} from "../../store/actions/toggleUploadPopUpAction";

const FileUpload = (props) => {
        const [toggleShow, setToggleShow] = useState(props.toggleFileUpload)

        const togglePopUpHandler = e => {
            e.preventDefault();
            props.dispatch(toggleUploadPopUpFunction())
        }

        const toggleUploadHandler = e => {
            e.preventDefault()
            props.dispatch(toggleFileUploadFunction())
        }

        if (props.fileUpload.fileUploadSuccess === null && props.fileUpload.fileUploadErrors === null) {
        return (
                        <>
                    <FileUploadContainerClose>
                    <p onClick={(e) => togglePopUpHandler(e)}>X</p>
                    <FileUploadContainer>

             { props.importReducer.importLoading ?
             <DonutSpinner></DonutSpinner> :
             <FileUploadInput props={props}/>
            }
                    </FileUploadContainer>
                    </FileUploadContainerClose>
                        </>
)
            }
        else {
        return (
                        <>
                    <FileUploadContainerClose>
                     <p onClick={(e) => togglePopUpHandler(e)}>X</p>
                    <FileUploadContainer>

            { props.fileUpload.fileUploadSuccess === true ?

                     <UploadSuccess>
                      <p>Success! Upload Again?</p>
                        <FileUploadButton onClick={ (e) => toggleUploadHandler(e) }>GO BACK</FileUploadButton>
                    </UploadSuccess>
                :
                     <div>
                      <p>Something went wrong.. Upload again?</p>
                        <br></br>
                        <FileUploadButton onClick={ (e) => toggleUploadHandler(e) }>GO BACK</FileUploadButton>
            </div>
                }
                    </FileUploadContainer>
                    </FileUploadContainerClose>
                        </>

)

    }
}


const mapStateToProps = state => {
    return {
 ...state,
      };
    };

export default connect(mapStateToProps)(FileUpload);
