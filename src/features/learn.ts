import * as vscode from 'vscode';
import * as msg from '../util/messagetype';
import * as req from '../util/requests';

export class Learn {
    static async getAnswerToQuery(sessionId : Promise<any>) {
        let result : string | undefined  = "What do you want to learn?";
        req.sendMessage(sessionId, "I want to learn");

        while(result !== undefined){
            result = await vscode.window.showInputBox({
             placeHolder: result + ' Press Esc to exit',
         });
         result = await req.createComponents(sessionId,result);
    }
    } 
}