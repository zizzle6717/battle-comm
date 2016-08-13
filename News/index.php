<!doctype html>
<html ng-app="newsApplication" >
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>BattleComm: News</title>
    <link rel="stylesheet" type="text/css" media="screen, print" href="../Styles/global.css">
    <link rel="stylesheet" type="text/css" media="screen, print" href="../Styles/magnificent-popup/magnificent-popup.css">
    <script src="../ScriptLibrary/AngularJS/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="../Scripts/jquery.magnificant-popup.js"></script>
    <script src="../ScriptLibrary/AngularJS/angular/angular.min.js"></script>
    <script src="../ScriptLibrary/AngularJS/angular-route/angular-route.min.js"></script>
    <script src="../ScriptLibrary/AngularJS/angular-sanitize/angular-sanitize.min.js"></script>
    <script type="text/javascript" src="../Scripts/news/dirPagination.js"></script>
    <script src="../ScriptLibrary/AngularJS/angular-animate/angular-animate.min.js"></script>
    <script src="../Scripts/news/news_controllers.js"></script>
    <script src="../Scripts/news/animations.js"></script>
    <script src="../Scripts/news/app.js"></script>
    <script type="text/javascript" src="../ScriptLibrary/dmxDataBindings.js"></script>
    <script type="text/javascript" src="../ScriptLibrary/dmxDataSet.js"></script>
<script type="text/javascript">
  /* dmxDataSet name "logged_in_player_full" */
       jQuery.dmxDataSet(
         {"id": "logged_in_player_full", "url": "/dmxDatabaseSources/logged_in_player_full.php", "data": {"limit": "25"}, "dataSourceType": "database", "dataType": "jsonp"}
       );
  /* END dmxDataSet name "logged_in_player_full" */
  </script>
</head>
	<?php $pathToFile = $_SERVER['DOCUMENT_ROOT'];
    include ($pathToFile. "/Templates/parts/header.php"); ?>
        <?php include ($pathToFile. "/Templates/parts/container-top.php"); ?>
        	<div class="view-container">
            	<div ng-view class="view-frame"></div>
            </div>
		<?php include ($pathToFile. "/Templates/parts/container-bottom.php"); ?>
<?php include ($pathToFile. "/Templates/parts/footer.php"); ?>