import {API} from "../../backend";
//Create file and save original 3D files

export const checkFile = (files) => {
    return fetch(`${API}/file/checkFile`,{
        method: "POST",
        headers:{
            Accept: "application/json",
        },
        body: files,
    }).then( (response) =>{
        console.log("From checkFile , response : " + response.statusText);
        return response;
    })
    .catch( (err) => console.log("(from checkFile) Error :" + err));
};
export const makeDir = (files) => {
    return fetch(`${API}/file/makeDir`,{
        method: "POST",
        headers:{
            Accept: "application/json",
        },
        body: files,
    }).then( (response) =>{
        console.log("From makeDir , response : " + response.statusText);
        return response;
    })
    .catch( (err) => console.log("(from makeDir) Error :" + err));
};

export const convertFile = (files) => {
    return fetch(`${API}/file/convertFile`,{
        method: "POST",
        headers:{
            Accept: "application/json",
        },
        body: files,
    })
    .then((response)=>{
        console.log("From files helper convertFile, response : " + response.statusText);
        return response;
    })
    .catch( (err) => console.log("(from convertFile) Error :" + err));
    
};
//Save glb to Frontend
export const saveFile = () => {
    return fetch(`${API}/file/saveFile`,{
        method: "GET",
    })
    .then( (response) => {
        console.log("From saveFile, response: " + response);
            return response;
    })
    .catch( (err) => console.log("Error from saveFile: " + err));
};

//Gives filename of the 3D file
export const getFilename = () => {
    return fetch(`${API}/file/filename`,{
        method: "GET",
    })
    .then( (response) => {
        console.log("From getFilename, response: " + response.statusText);
        if(response.statusText === "OK"){
            return response.json();   
        }else{
            return response.statusText;
        }
    })
    .catch( (err) => console.log("Error from filename: " + err));
};


//Saving the .glbFile to frontend
export const saveToSRC = () => {
    return fetch(`${API}/file/saveToSRC`,{
        method: "GET",
    })
    .then( (response) => {
        console.log("From saveToSRC, response: " + response);
        if(response.statusText === "OK"){
            return response.json();   
        }else{
            return response.statusText;
        }
    })
    .catch( (err) => console.log("Error from saveToSRC: " + err));
};

//Saving .usdzFile to frontend
export const saveUSDZToSRC = () => {
    return fetch(`${API}/file/saveUSDZToSRC`,{
        method: "GET",
    })
    .then( (response) => {
        console.log("From saveUSDZToSRC, response: " + response);
        if(response.statusText === "OK"){
            return response.json();   
        }else{
            return response.statusText;
        }
    })
    .catch( (err) => console.log("Error from saveUSDZToSRC: " + err));
};

//Converting .glb to .usdz
export const convertToUSDZ = () => {
    return fetch(`${API}/file/convertToUSDZ`,{
        method: "GET",
    })
    .then( (response) => {
        console.log("From convertToUSDZ, response: " + response);
        if(response.statusText === "OK"){
            return response.json();   
        }else{
            return response.statusText;
        }
    })
    .catch( (err) => console.log("Error from convertToUSDZ: " + err));
};


export const delSRCFiles = () =>{
    return fetch(`${API}/file/delfiles`,{
        method: "GET",
    })
    .then( (response) => {
        console.log("From delfiles, response: " + response);
        if(response.statusText === "OK"){
            return response.json();   
        }else{
            return response.statusText;
        }
    })
    .catch( (err) => console.log("Error from delfiles: " + err));
};  
