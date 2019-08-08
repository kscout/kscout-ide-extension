import * as vscode from 'vscode';

export class Search{
    static async searchByQuery() {
        let result : string|undefined  = "init";
        while(result !== undefined){
        let result = await vscode.window.showInputBox({
            placeHolder: 'What type of app do you want to search? Press Esc to exit',
        });

        // Call chatbot api
        let api_call = `Got: ${result}`;
        vscode.window.showInformationMessage(api_call);
    }
    vscode.window.showInformationMessage("Thanks");
    } 

    static async searchByTags() {
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