import * as vscode from 'vscode';
import fetch from 'node-fetch';

export const session = async ()=>{
        return await fetch("https://bot.kscout.io/session")
                .then( response =>
                    response.json()
                        .then( data => {
                              return (data.session_id);
                        }
                        ));
};


export const messageReq = async (body: any)=>{
    return await  fetch("https://bot.kscout.io/messages",{
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type': 'application/json'
          }
    }).then(response =>  response.json()
    .then( data => {
          return (data);}));
};

export const sendMessage = (sessionID : Promise<any>, text :string | undefined) => {
    
    return sessionID.then(resp=> {
        const body = {
            user : resp,
            text : text
        };

       
    return messageReq(body);
});};

