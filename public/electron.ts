const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const isDev = require('electron-is-dev');
const child_process = require('child_process');
const dialog = electron.dialog;
const colors = require('colors');
const currentPath = app.getAppPath();

function createWindow() {
	const mainWindow = new BrowserWindow({ width: 900, height: 680 });
	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`,
	);

	// This function will output the lines from the script
	// and will return the full combined output
	// as well as exit code when it's done (using the callback).
	function run_script(command, args, callback) {
		var child = child_process.spawn(command, args, {
			encoding: 'utf8',
			shell: true,
		});

		// You can also use a variable to save the output for when the script closes later
		child.on('error', (error) => {
			dialog.showMessageBox({
				title: 'Title',
				type: 'warning',
				message: 'Error occured.\r\n' + error,
			});
		});

		child.stdout.setEncoding('utf8');
		child.stdout.on('data', (data) => {
			//Here is the output
			data = data.toString();
			if (
				data.includes('Method Not Allowed') |
				data.includes('Unprocessable Entity') |
				data.includes('Internal Server Error')
			) {
				console.log(data.red);
			} else {
				console.log(data.green);
			}
		});

		child.stderr.setEncoding('utf8');
		child.stderr.on('data', (data) => {
			// Return some data to the renderer process with the mainprocess-response ID
			mainWindow.webContents.send('mainprocess-response', data);
			//Here is the output from the command
			console.log(data.yellow);
		});

		child.on('close', (code) => {
			//Here you can get the exit code of the script
			switch (code) {
				case 0:
					dialog.showMessageBox({
						title: 'Title',
						type: 'info',
						message: 'End process.\r\n',
					});
					break;
			}
		});
		if (typeof callback === 'function') callback();
	}

	run_script(`cd ${currentPath}/api && python`, [`./router.py`], null);
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
