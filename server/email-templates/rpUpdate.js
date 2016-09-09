'use strict';


function buildTemplate(data) {
	return `
		<div style="max-width:800px;position:relative;margin:20px auto;padding:15px;border:2px solid black;box-shadow:0 0 5px 2px lightgray;letter-spacing:1px;">
			<div style="text-align:center;">
				<h1 style="font-size:40px; font-size:40px; padding-bottom:5px; margin-top:15px;  border-bottom:1px solid #cacaca;">Your Reward Points Have Changed!</h1>
				<h2 style="font-size:28px">Either an admin has added points to your account, or you have made a recent purchase.</h2>

				<b>This information is for ${data.firstName} ${data.lastName} aka ${data.user_handle}</b>
				<h2 style="font-size:28px; text-align:center">Current Total: ${data.user_points} Reward Points</h2>
			</div>

			<div style="text-align:center; border-top:1px solid #cacaca; padding:20px 0 0;">
				<img src="http://www.beta.battle-comm.net/images/BC_Web_Logo.png">
			</div>
		</div>
	`
}

module.exports = buildTemplate;