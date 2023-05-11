// This is the code for the VSCode Server integration app.

// Import the necessary libraries.
const nextcloud = require('@nextcloud/core');

// Create a new Nextcloud app.
const appId = new nextcloud({
  // The app's name.
  name: 'vscode-server',
  // The app's description.
  description: 'An VSCode Server integration app for Nextcloud.',
  // The app's version.
  version: '1.0.0',
  // The app's author.
  author: 'Bard',
  // The app's website.
  website: 'https://bard.ai',
});

// Add a new admin setting for the VSCode Server URL.
appId.addAdminSetting('vscode-server-url', {
  // The setting's name.
  name: 'VSCode Server URL',
  // The setting's description.
  description: 'The URL of the VSCode Server.',
  // The setting's type.
  type: 'string',
  // The setting's default value.
  defaultValue: 'https://vscode.dev',
});

// Add a new event listener for the "file-open" event.
appId.on('file-open', (event) => {
  // Get the file that was opened.
  const file = event.file;

  // Check if the file is a text file.
  if (!file.isTextFile()) {
    // The file is not a text file, so do nothing.
    return;
  }

  // Get the VSCode Server URL from the admin settings.
  const vscodeServerUrl = appId.getAdminSetting('vscode-server-url');

  // Check if the VSCode Server URL is valid.
  if (!vscodeServerUrl) {
    // The VSCode Server URL is not valid, so do nothing.
    return;
  }

  // Get the file extension.
  const extension = file.getExtension();

  // Check if the file extension is related to coding.
  const codingExtensions = [
    '.c',
    '.cpp',
    '.cs',
    '.css',
    '.dart',
    '.html',
    '.java',
    '.js',
    '.json',
    '.php',
    '.py',
    '.rb',
    '.sql',
    '.ts',
    '.vb',
    '.xml',
  ];

  if (!codingExtensions.includes(extension)) {
    // The file extension is not related to coding, so do nothing.
    return;
  }

  // Open the file in VSCode in a webview.
  const webview = appId.createWebview('vscode');
  webview.loadUrl(vscodeServerUrl + '/' + file.getId());
});

// Start the app.
appId.start();
