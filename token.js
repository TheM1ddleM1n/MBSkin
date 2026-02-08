(function() {
    const key = "session_v1";
    const token = localStorage.getItem(key);
    
    if (!token) {
        console.error(`%c❌ ERROR: There was no session token found in localStorage under this key "${key}"`, 
                     "color:red;font-weight:bold;font-size:14px;");
        console.log("%cMake sure you're logged into Miniblox first!", 
                   "color:yellow;font-size:12px;");
        return;
    }
    
    console.log("%c⚠️ THIS IS A SECURITY WARNING ⚠️", 
               "color:red;font-weight:bold;font-size:16px;background:yellow;padding:5px;");
    console.log("%c• NEVER share this token with anyone\n• This token gives FULL access to your account\n• Only use this on YOUR OWN account", 
               "color:orange;font-weight:bold;font-size:12px;");
    console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color:gray;");
    console.log("%c✓ Token Was Retrieved Successfully", "color:lime;font-weight:bold;font-size:14px;");
    console.log("%cYour Token:", "color:cyan;font-weight:bold;");
    console.log(token);
    console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color:gray;");
    console.log("%cCopy this token for use in skin.js!", "color:white;");
})();
