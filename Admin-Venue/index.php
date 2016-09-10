<?php require_once( "../webassist/security_assist/helper_php.php" ); ?>
<?php
if (!WA_Auth_RulePasses("venueAdmin")){
	WA_Auth_RestrictAccess("../accessdenied.php");
}
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>BattleComm: Venue Admin</title>
    <link rel="stylesheet" type="text/css" media="screen, print" href="../Styles/global.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script type="text/javascript" src="../Scripts/jquery.magnificant-popup.js"></script>
    <script type="text/javascript" src="../ScriptLibrary/dmxDataBindings.js"></script>
    <script type="text/javascript" src="../ScriptLibrary/dmxDataSet.js"></script>
    <script type="text/javascript">
        /* dmxDataSet name "logged_in_player_full" */
             jQuery.dmxDataSet(
               {"id": "logged_in_player_full", "url": "../dmxDatabaseSources/logged_in_player_full.php", "data": {"limit": "25"}, "dataSourceType": "database", "dataType": "jsonp"}
             );
        /* END dmxDataSet name "logged_in_player_full" */
		/* dmxDataSet name "loggedInPlayer" */
			 jQuery.dmxDataSet(
			   {"id": "loggedInPlayer", "url": "../dmxDatabaseSources/loggedinPlayer.php", "data": {"limit": "25"}, "dataSourceType": "database", "dataType": "jsonp"}
			 );
		/* END dmxDataSet name "loggedInPlayer" */
    </script>
</head>
<?php $pathToFile = $_SERVER['DOCUMENT_ROOT'];
include ($pathToFile. "/Templates/parts/header.php"); ?>
	<?php include ($pathToFile. "/Templates/parts/container-top.php"); ?>
		<?php include ($pathToFile. "/Templates/includes/user-navigation.php"); ?>
		<div class="full_width">
			<hr>
			<h2 class="push-top-2x">Venue Admin</h2>
		</div>
		<div class="full_width">
			<div class="four_column_1 text-center">
				<button class="btn" ui-sref="assignPoints"><span class="fa fa-credit-card"></span> Assign Points</button>
			</div>
		</div>
		<div class="full_width view-container">
			<hr>
			<br/>
			<div ui-view class="view-frame"></div>
			<div loading></div>
			<div notification></div>

			<!-- /.container -->
		</div>
	<?php include ($pathToFile. "/Templates/parts/container-bottom.php"); ?>
<?php include ($pathToFile. "/Templates/parts/footer.php"); ?>
<script src="js/app.js"></script>
