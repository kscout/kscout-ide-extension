import * as vscode from 'vscode';
import * as req from '../util/requests';
import * as msg from '../util/messagetype';

export class Search{
    static async searchByQuery(sessionId : Promise<any>) {
        let result : string|undefined  = "init";
        req.sendMessage(sessionId, "I want to search");

        while(result !== undefined){
        let result = await vscode.window.showInputBox({
            placeHolder: 'What type of app do you want to search? Press Esc to exit',
        });
        
        req.sendMessage(sessionId,result).then(resp => 
            msg.message(sessionId, resp) 
           );

    }
    vscode.window.showInformationMessage("Thanks");
    } 

    static async searchByTags(sessionId: Promise<any>) {
        let result : string|undefined  = "init";
        while(result !== undefined){
        let result = await vscode.window.showInputBox({
            placeHolder: 'Enter @tagName. Press Esc to exit',
        });

        // Call chatbot api
        let api_call = `Got: ${result}`;
        vscode.window.showInformationMessage(api_call);
    } 
    vscode.window.showInformationMessage("Thanks");

}


}