import * as vscode from 'vscode';
import * as req from '../util/requests';

export class Search{
    static async searchByQuery(sessionId : Promise<any>) {
        let result : string|undefined  = "init";
        while(result !== undefined){
        let result = await vscode.window.showInputBox({
            placeHolder: 'What type of app do you want to search? Press Esc to exit',
        });
        req.sendMessage(sessionId,result).then(resp => vscode.window.showInformationMessage(resp));

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