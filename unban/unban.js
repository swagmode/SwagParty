$('#post').click(async function(e) {
    e.preventDefault();
    
    let name = $('#name').val()
    let discord = $('#discord').val()
    let reason = $('#reason').val()
    let note = $('#note').val()

    if(!name || !discord || !reason) return alert('Fill out all the fields')

    let webhook = 'https://webhook.swagmode.net/corsproxy/?apiurl=https://discord.com/api/webhooks/897147792907182200/CZzLEiL3aIM43ZoBAp1zdJ9pqb592UxXGzLFmn22bkwtEcxzFUikvtdhuqxM_PF1tkJQ'
    fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        "content": null,
        "embeds": [
            {
              "title": "Ban Appeal - " + name,
              "description": `Note: \n\`${note ? note : 'None'}\``,
              "color": 5814783,
              "fields": [
                  {
                  "name": "Name",
                  "value": `\`${name}\``,
                  "inline": true
                  },
                  {
                  "name": "Discord",
                  "value": `\`${discord}\``
                  }
              ]
            }
        ],
        "attachments": []

      }),
    }).then((O) => {
        alert('Sent to the moderators.')
    });

})



