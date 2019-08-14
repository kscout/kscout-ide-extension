import * as vscode from 'vscode';
import fetch from 'node-fetch';
import * as msg from '../util/messagetype';
import { window, Terminal, TerminalOptions } from 'vscode';
import { cwd } from 'process';


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

export const sendMessage = async (sessionID : Promise<any>, text :string | undefined) => {
    
    const resp = await sessionID;
    const body = {
        user: resp,
        text: text
    };
    return messageReq(body).catch((e)=>console.log(e));};



export const createComponents = async(sessionID : Promise<any>, result :string | undefined)=>
{ 
    return sendMessage(sessionID,result).then(resp => {
    let message_content : any;
    if(typeof(resp) === "string"){
        message_content = JSON.parse(resp);
    }
    else{
    message_content = JSON.parse(JSON.stringify(resp));
    }

    if("apps" in message_content) {
        if ("title" in message_content){
            return (msg.message(sessionID, message_content)) ;
        }
        return (msg.message(sessionID, message_content)) ;}

    else if("text" in message_content){

        let absc : string = message_content["text"];
         
        if(absc.startsWith("To deploy the")){
            vscode.window.showInformationMessage(absc.split('```')[2]);
            runTerminal(absc.split('```')[1]);
            return undefined;

         }
         else{
      
        vscode.window.showInformationMessage(message_content["text"]);
        return message_content["text"];}

    }
}

   );
};

const runTerminal = async(command : string)=>{
    const term = vscode.window.createTerminal ( 'Terminal' );

        await term.processId;
        await new Promise ( resolve => setTimeout ( resolve, 200 ) );
        term.sendText ( command, true );
    
       term.show ( false );
};