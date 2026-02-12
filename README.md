# MBSkin
This is a step by step on how to get the secret miniblox skins 🤫

A simple console-based tool to change your Miniblox skin in game!
**Please use responsibly and only on your own account.**

---

## ⚠️ Important Warnings

- **NEVER share your token with anyone** – your token gives full access to your miniblox account.
- **Use only on your own account** – using this on accounts you don’t own is against Miniblox Terms of Service.
- **Treat your token like your password** – please keep it safe and secure. I will not be responsible for your ban.

---

## 🛠️ Prerequisites

- A supported web browser (Chrome is RECOMMENDED)
- A Miniblox account that you are logged into.

---

## Getting Started

### Step 1: Get Your Token

1. Open Miniblox in your web browser.
2. Press <kbd>F12</kbd> to open the Console.
3. Paste the contents of `token.js` into the console and press Enter.
4. Copy and securely store the token that appears.

### Step 2: Change Your Skin

1. Open `skin.js` in a text editor.
2. Replace `"your_token_goes_here"` in the code with the token from Step 1.
3. Change the `SKIN_ID` to your chosen skin (see the list below).
4. Paste the updated code into your browser console, press Enter.
5. Refresh the page to see your new skin :)

---

## 🎨 Available Skin IDs

| Skin Name | Skin ID   |
|-----------|-----------|
| Remlin    | `"remlin"`   |
| Cat       | `"cat"`      |
| Ethan     | `"ethan"`    |
| Sushi     | `"sushi"`    |
| Slime     | `"slime"`    |
| Duck      | `"duck"`     |
| Tester    | `"tester"`   |
| Banana    | `"banana"`   |
| Qhyun     | `"qhyun"`    |

Change any of the 9 `SKIN_ID` variables in code to one of the above

---

## ❓ Troubleshooting

<details>
<summary><strong>"No session token found"</strong></summary>

- Make sure you are logged into Miniblox.
- If so, refresh the page and run `token.js` again.
</details>

<details>
<summary><strong>"Token not set"</strong></summary>

- Double-check that you replaced `"your_token_goes_here"` in `skin.js` with your actual token.
</details>

<details>
<summary><strong>"HTTP Error" or fetch fails</strong></summary>

- Confirm your internet connection is working.
- The servers might be down - please try again later.
- Your token may have expired. Re-run `token.js` to get a brand new token.
</details>

<details>
<summary><strong>Skin doesn't appear</strong></summary>

- Refresh the page after running `skin.js`.
- Make sure you have used a valid Skin ID from the table above.
</details>

---

<sub>This Code was originally made by [MOD] MineTrumps. Thank you very much!</sub>
