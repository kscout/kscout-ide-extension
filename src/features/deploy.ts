import * as vscode from 'vscode';
import * as msg from '../util/messagetype';
import * as req from '../util/requests';

export class Deploy{
    static async getAppsDeployed(sessionId : Promise<any>) {
        let result : string|undefined  = "What app do you want to deploy?";
        req.sendMessage(sessionId, "I want to deploy");

        while(result !== undefined){
            result = await vscode.window.showInputBox({
             placeHolder: result + ' Press Esc to exit',
         });
         result = await req.createComponents(sessionId,result);
        }
}
}
