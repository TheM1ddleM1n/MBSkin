(async () => {
    const TOKEN = "your_token_goes_here"; // ONLY replace this
    const SKIN_ID = "duck";              // ONLY replace this

    if (TOKEN === "your_token_goes_here") {
        console.error("Token not set. Run token.js first.");
        return;
    }

    try {
        const res = await fetch(
            "https://session.coolmathblox.ca/accounts/set_cosmetic",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": TOKEN
                },
                body: JSON.stringify({
                    type: "skin",
                    id: SKIN_ID
                })
            }
        );

        if (!res.ok) throw new Error(res.status);

        console.log("Skin applied.");
        await res.json();

        if (confirm("Skin applied successfully.\nReload page to apply changes?")) {
            location.reload();
        }
    } catch (e) {
        console.error("Failed to apply skin:", e);
    }
})();
