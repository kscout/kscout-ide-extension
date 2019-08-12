import * as vscode from 'vscode';
import * as req from '../util/requests';
import open = require("open");

export const message = (sessionID : Promise <any>, response : string) => {

 
     let message_content  = JSON.parse(response);

    // search query with app info
    if("apps" in message_content) 
    { 

    for(let app of message_content["apps"])
    {
        vscode.window
        .showInformationMessage(app["app_id"], ...['deploy', 'Github', 'Home Page'])
        .then(selection => {
            if(selection === 'deploy'){
                req.sendMessage(sessionID, app["app_id"]).then(resp => vscode.window.showInformationMessage(JSON.parse(resp).text));
                return;
            }
            else if(selection === 'Github'){
                open(app['github_url']);

            }
            else {
            open(app['homepage_url']);

        }
  });
    }

     }
     // search query with options 
     else if("title" in message_content)
     {
         let options : string[] = [];
        for(let option of message_content["options"])
        {
            options.push(option["label"]);
        }

            vscode.window
            .showInformationMessage(message_content["title"], ...options)
            .then(selection => {
                if(selection !== undefined){
                req.sendMessage(sessionID, message_content["options"][options.indexOf(selection)]["value"]["input"]["text"])
                .then(resp => 
                    // console.log(JSON.parse(resp).text)
                    vscode.window.showInformationMessage(JSON.parse(resp).text)
                    );
                }

                return;});
            }
    // search query with only text
     else{
         vscode.window.showInformationMessage(message_content["text"]);
        return;
         }



};