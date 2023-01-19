
window.addEventListener("load", async () => {

    let response = await fetch('https://discord.com/api/guilds/869610269209411614/widget.json')
    let json = await response.json()

    console.log(json)

    $('#invite').attr('href', json.instant_invite)

    let members = json.members
    let roblox = members.filter(m => m.game?.name == "Roblox")
    let voice = members.filter(m => m.channel_id)

    mmemcount = 0

    members.forEach(member => {

        if(mmemcount == 35) {
            let user = $(`<div class="user" id="offline">
            <img src="https://media.istockphoto.com/id/688550958/sv/vektor/svart-plustecken-positiv-symbol.jpg?s=612x612&w=0&k=20&c=MIncoKsDiH3_rqcyhbU0MDb4chOb53f0pY-Crfqs6c4=" alt="" srcset="" height="35px" width="35px">
            <i style="color: lightgreen">And +${json.presence_count}</i>
            </div>`)

            $(`#users`).append(user)
            mmemcount = mmemcount+1
        }

        if(mmemcount > 35) return
        let user = $(`<div class="user" id="${member.status}">
        <img src="${member.avatar_url}" alt="" srcset="" height="35px" width="35px">
        <i>${member.username.substring(0, 9)}</i>
        </div>`)

        $(`#users`).append(user)
        mmemcount = mmemcount+1
    });

    roblox.forEach(member => {
        let user = $(`<div class="user" id="${member.status}">
        <img src="${member.avatar_url}" alt="" srcset="" height="35px" width="35px">
        <i>${member.username.substring(0, 9)}</i>
        </div>`)

        $(`#roblox`).append(user)
    });

    if(voice.length < 1) {
        $(`#voice`).append($(`<i>No one is talking right now!</i>`))
    }

    voice.forEach(member => {
        let user = $(`<div class="user" id="${member.status}">
        <img src="${member.avatar_url}" alt="" srcset="" height="35px" width="35px">
        <i style="margin-left: 30px;">${member.username.substring(0, 9)}</i>
        </div>`)

        $(`#voice`).append(user)
    });


})