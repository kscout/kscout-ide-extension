// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {Search} from './features/search';
import {Learn} from './features/learn';
import {Deploy} from './features/deploy';
import * as s from './util/requests';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "kscout" is now active!');
	const sessionID = s.session();


	const disposable = [vscode.commands.registerCommand('extension.nsearch', (context) => Search.searchByQuery(sessionID)),
	vscode.commands.registerCommand('extension.tagSearch', (context) => Search.searchByTags(sessionID)),
	vscode.commands.registerCommand('extension.learn', (context) => Learn.getAnswerToQuery(sessionID)),
	vscode.commands.registerCommand('extension.deploy', (context) => Deploy.getAppsDeployed(sessionID))];

	disposable.forEach((value) => context.subscriptions.push(value));
	// context.subscriptions.push(disposable);
}	


// this method is called when your extension is deactivated
export function deactivate() {}

