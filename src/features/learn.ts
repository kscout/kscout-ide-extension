import * as vscode from 'vscode';

export class Learn {
    static async getAnswerToQuery() {
        let result : string|undefined  = "init";
        while(result !== undefined){
         result = await vscode.window.showInputBox({
            placeHolder: 'What do you want to learn? Press Esc to exit',
        });

        // Call chatbot api
        let api_call = `Got: ${result}`;
        vscode.window.showInformationMessage(api_call);
    }
    vscode.window.showInformationMessage("Thanks");
    } 
}