import * as vscode from 'vscode';
import * as req from '../util/requests';
import open = require("open");

export const message = (sessionID : Promise <any>, message_content : any) => {

    // search query with app info
    if("apps" in message_content) 
    { 
        let app_status ;
    for(let app of message_content["apps"])
    {
         app_status = vscode.window
        .showInformationMessage(app["app_id"], ...['deploy', 'Github', 'Home Page'])
        .then(selection => {
            if(selection === 'deploy'){
            
                req.sendMessage(sessionID, app["app_id"]).then(resp => vscode.window.showInformationMessage(JSON.parse(resp).text));
      
                return app["app_id"];
            }
            else if(selection === 'Github'){
                open(app['github_url']);

            }
            else if(selection === 'Home Page') {
            open(app['site_url']);

        }
  });
  if(app_status === undefined){
      break;
  }

    }
    return app_status;    
     }
     // search query with options 
     else if("title" in message_content)
     {
         let options : string[] = [];
        for(let option of message_content["options"])
        {
            options.push(option["label"]);
        }

         return vscode.window
            .showInformationMessage(message_content["title"], ...options)
            .then(selection => {
                if(selection !== undefined){
                req.sendMessage(sessionID, message_content["options"][options.indexOf(selection)]["value"]["input"]["text"])
                .then(resp => 
                    // console.log(JSON.parse(resp).text)
                    vscode.window.showInformationMessage(JSON.parse(JSON.stringify(resp)).text)
                    );
                    return message_content["options"][options.indexOf(selection)]["value"]["input"]["text"];
                }

                }
                );
            }

};