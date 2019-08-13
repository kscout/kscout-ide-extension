import * as vscode from 'vscode';
import * as req from '../util/requests';
import * as msg from '../util/messagetype';

export class Search{
    static async searchByQuery(sessionId : Promise<any>) {
        let result : string|undefined  = "Tell me about the app you want to search";
        req.sendMessage(sessionId, "I want to search");

        while(result !== undefined){
           result = await vscode.window.showInputBox({
            placeHolder: result + ' Press Esc to exit',
        });
        result = await req.createComponents(sessionId,result);

    }
  
    } 

    static async searchByTags(sessionId: Promise<any>) {
        let result : string|undefined  = "Enter tag names";
        req.sendMessage(sessionId, "I want to search");
        while(result !== undefined){
        let result = await vscode.window.showInputBox({
            placeHolder: 'Enter @tagName. Press Esc to exit',
        });

        result = await req.createComponents(sessionId,result);

    } 

}


}