import * as vscode from 'vscode';
import * as msg from '../util/messagetype';
import * as req from '../util/requests';

export class Learn {
    static async getAnswerToQuery(sessionId : Promise<any>) {
        let result : string|undefined  = "init";
        req.sendMessage(sessionId, "I want to learn");

        while(result !== undefined){
         result = await vscode.window.showInputBox({
            placeHolder: 'What do you want to learn? Press Esc to exit',
        });

        // Call chatbot api
        req.sendMessage(sessionId,result).then(resp => 
            msg.message(sessionId, resp) 
           );
    }
    vscode.window.showInformationMessage("Thanks");
    } 
}