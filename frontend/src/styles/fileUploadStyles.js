import styled from "styled-components";

const FileUploadButton = styled.button`
  background-color: rgb(188,189,220);
  cursor: pointer;
  font-size: 16px;
  height: 30px;
  width: 100px;
  color: black;
  border-radius: 12px;
  /* margin-left: 40%;
  margin-top: 5%; */
  border: none;
`;

export default FileUploadButton

export const FileUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;    
    height: 100%;
    /* width: 90%; */
    z-index: 2;
    /* padding: 0; */
    /* margin: 0; */
    /* border-radius: 12px; */
     /* background-color: #f8f8f8; */
     background-color: yellow;
    input {
    /* margin-left: 5%; */
    /* margin-top: 2% */
    display: flex;
    justify-content: space-around;
    }
    `;


export const FileUploadContainerClose = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 20px;
    height: 20%;
    width: 20%; 
    z-index: 2;
    padding: 10px;
     margin: 0;
     top: 35%;
     left: 35%;
     right: 0; 
     bottom: 0; 
     position: absolute; 
     border-radius: 12px; 
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    p {
    padding: 10px;
    }
    `;


export const UploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 80%;
    z-index: 2;
    margin: 0;
    /* border-radius: 12px; */
    background-color: transparent;
   
    `;

export const Form = styled.form`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `;


export const DonutSpinner = styled.div`
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: rgb(188,189,220);
  border-radius: 50%;
  width: 80px;
  height: 80px;
   margin-left: 135px;
   margin-right: 135px;    
  animation: donut-spin 1.2s linear infinite;

`
export const UploadSuccess = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
     margin-left: 90px;
    margin-right: 90px;    
  
    `;
