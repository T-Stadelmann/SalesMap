import {fileUploadErrors, fileUploadSuccess, importLoaded, importLoading} from "../types";

const URL = `${process.env.REACT_APP_BASE_URL}import/`;


export const fileUploadSuccessAction = data => ({
    type: fileUploadSuccess,
    payload: data,
});


export const fileUploadErrorsAction = data => ({
    type: fileUploadErrors,
    payload: data,
});

export const importLoadingAction = () => ({
    type: importLoading,
});

export const importLoadedAction = () => ({
    type: importLoaded,
});


export const fileUploadFunction = (formData) => (dispatch) => {
    dispatch(importLoadingAction())
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const config = {
        method: 'PATCH',
        body: formData
    };

    fetch(URL, config)
    .then(res => res.json())
    .then(data => {
     if (data==="Success") {
         dispatch(fileUploadSuccessAction(data));
     }
     if (data==="Error") {
         dispatch(fileUploadErrorsAction(data));
     }
     dispatch(importLoadedAction())
    })
};