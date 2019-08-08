import * as vscode from 'vscode';

export class Search{
    static async searchByQuery() {
        const result = await vscode.window.showInputBox({
            placeHolder: 'What type of app do you want to search?',
        });

        // Call chatbot api
        const api_call = `Got: ${result}`;
        vscode.window.showInformationMessage(api_call);
    } 

    static async searchByTags() {
        const result = await vscode.window.showInputBox({
            placeHolder: 'Enter @tagName',
        });

        // Call chatbot api
        const api_call = `Got: ${result}`;
        vscode.window.showInformationMessage(api_call);
    } 
    
    
}