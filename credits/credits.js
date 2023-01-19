window.addEventListener("load", async () => {

    let users = ["30759115", "1928021622", "50813900", "552499725", "200547759", "2758727407", "2438792233", "1628761546"]

    users.forEach(async user => {

        try {
            let response = await fetch(`https://roblox.werewolf69.workers.dev/avatar/?user=${user}`)
            let json = await response.json()

            let status = json?.thumbnails[user]?.url
            console.log(json)
            if(!status) return

            $(`#${user}`).attr("src", status)


        } catch(err) {
            console.log(err)
        }


    })
    
})