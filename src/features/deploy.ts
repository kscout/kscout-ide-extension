import * as vscode from 'vscode';

export class Deploy{
    static async getAppsDeployed() {
        const result = await vscode.window.showInputBox({
            placeHolder: 'What type of app do you want to deploy?',
        });

        // Call chatbot api 
        const api_call = `Got: ${result}`;
        vscode.window.showInformationMessage(api_call);
    } 
}
