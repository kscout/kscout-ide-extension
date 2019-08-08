import * as vscode from 'vscode';

export class Learn {
    static async getAnswerToQuery() {
        const result = await vscode.window.showInputBox({
            placeHolder: 'What do you want to learn?',
        });

        // Call chatbot api
        const api_call = `Got: ${result}`;
        vscode.window.showInformationMessage(api_call);
    } 
}