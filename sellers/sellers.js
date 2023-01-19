window.addEventListener("load", async () => {

    let users = ["895731872531886161", "966474078871515176", "869608607421960222", "791267712768540713", "709924249011224689", "543436116049657867",
                "420993988967792642", "977212872285376522", "448854915553427457", "891744633460232222", "275423508463616002"]

    users.forEach(async user => {

        try {
            let response = await fetch(`https://api.lanyard.rest/v1/users/${user}`)
            let json = await response.json()

            let status = json?.data?.discord_status

            console.log(json)

            let text = '• offline'
            if(status) text = '• online'
            if(!status) status = 'offline'
            

            $(`#${user}`).text(text)
            $(`#${user}`).addClass(status);

            let activity = json?.data?.activities?.filter(a => a.id == 'custom')
            if(activity.length > 0) {
                activity = activity[0]
                $(`#${user}-status`).text(`Status: ${activity?.state}`)
            }

        } catch(err) {
            console.log(err)
        }


    })
    
})