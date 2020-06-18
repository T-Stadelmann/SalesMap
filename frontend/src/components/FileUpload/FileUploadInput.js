import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import {fileUploadFunction} from "../../store/actions/fileUploadAction";
import FileUploadButton from "../../styles/fileUploadStyles";
import { Form } from "../../styles/fileUploadStyles";
import {toggleFileUploadFunction} from "../../store/actions/toggleFileUploadAction";
import { toggleUploadDrawerFunction } from "../../store/actions/toggleUploadDrawerAction";


function FileUploadInput(props) {
    const [selectedFile, setSelectedFile] = useState()

    useEffect( () => {
        if (!selectedFile) {
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        return () => URL.revokeObjectURL(objectUrl)
        }   , [selectedFile]
    )

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
     setSelectedFile(e.target.files[0]);
    }

    const input = document.querySelector('input');
    const myForm = document.querySelector('form');

    if (myForm) {
        myForm.addEventListener("submit", e => {
            e.preventDefault();
              const formData = new FormData(myForm);
              props.dispatch(fileUploadFunction(formData,props));
        });
    }
        return (
            <Form id='myForm' method="post" encType="multipart/form-data">
                    <input
                        type="file"
                        name="file"
                        multiple={true}
                        accept=".xls,.xlsx,.xlsb,.csv,.txt"
                        onChange={onSelectFile}
                        style={{'width':'70%'}}/>
            <FileUploadButton type="submit">SUBMIT</FileUploadButton>
            </Form>

         )
        }

const mapStateToProps = state => {
    return {
 ...state,
      };
    };

export default connect(mapStateToProps)(FileUploadInput);