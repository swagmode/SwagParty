<?php

//-- DO NOT EDIT THIS CODE, DM ME IF YOU WANT TO.
    
$username = $_GET['username'];
$userid = $_GET['userid'];
$jobid = $_GET['jobid'];
$gameid = $_GET['gameid'];
        

//-- Public Webhook

$hookObject = [];
$From = $_SERVER['HTTP_USER_AGENT'];

	$hookObject = json_encode([
		"content" => "",
		"embeds" => [[
			"title" => "Swag mode Execution",
			"description" => "**Username:**\n". $username ." (". $userid .")\n\n**Profile Link:**:\nhttps://roblox.com/users/". $userid . "/profile\n\n**Game:**\nhttps://roblox.com/games/". $gameid ."\n\n**JobID:**\n```". $jobid. "```",
			"color" => 15279911,
		
		
'thumbnail' => [
'url'  =>  "http://www.roblox.com/Thumbs/Avatar.ashx?x=480&y=480&Format=Png&username=" . $_GET["username"]
]
	]]	
		
	], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );


$curl = curl_init("https://discord.com/api/webhooks/926887137851371572/dGfJVs4TzJgIH4cc3Azi4mmbwZsCsj322XLyn2PQChiWTeRX_D8h92KupecXwhrly1xf");
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, $hookObject);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_exec($curl);


?>
