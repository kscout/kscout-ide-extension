import * as vscode from 'vscode';

export class Deploy{
    static async getAppsDeployed() {
        let result : string|undefined  = "init";
        while(result !== undefined){
         result = await vscode.window.showInputBox({
            placeHolder: 'What type of app do you want to deploy? Press Esc to exit',
        });
    

        // Call chatbot api 
        const api_call = `Got: ${result}`;
        vscode.window.showInformationMessage(api_call);
    } 
    vscode.window.showInformationMessage("Thanks");
}
}
