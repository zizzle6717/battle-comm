<?php require_once('../Connections/local.php'); ?>
<?php require_once( "../webassist/security_assist/helper_php.php" ); ?>
<?php
if (!WA_Auth_RulePasses("systemAdmin")){
	WA_Auth_RestrictAccess("../loginA.php");
}
?>
<?php require_once( "../webassist/security_assist/helper_php.php" ); ?>
<?php
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}
?>
?>
<?php
mysql_select_db($database_local, $local);
$query_playersRPList = "SELECT * FROM user_login";
$playersRPList = mysql_query($query_playersRPList, $local) or die(mysql_error());
$row_playersRPList = mysql_fetch_assoc($playersRPList);
$totalRows_playersRPList = mysql_num_rows($playersRPList);

mysql_select_db($database_local, $local);
$query_State = "SELECT * FROM tbl_state";
$State = mysql_query($query_State, $local) or die(mysql_error());
$row_State = mysql_fetch_assoc($State);
$totalRows_State = mysql_num_rows($State);
?>
?><!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BattleComm: Home</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="../Scripts/jquery.magnificant-popup.js"></script>
<script type="text/javascript" src="../Scripts/mobile-toggle.js"></script>
<script type="text/javascript" src="../Scripts/backtotop.js"></script>
<link rel="stylesheet" type="text/css" media="screen, print" href="../Styles/global.css">
<link rel="stylesheet" type="text/css" media="screen, print" href="../Styles/magnificent-popup/magnificent-popup.css">
<style type="text/css">
#pointAdjust {
	width: 100px;
}
</style>
<script type="text/javascript" src="../ScriptLibrary/dmxDataBindings.js"></script>
<script type="text/javascript" src="../ScriptLibrary/dmxDataSet.js"></script>
<script type="text/javascript" src="../ScriptLibrary/dmxServerAction.js"></script>
<script type="text/javascript">
/* dmxDataSet name "LoggedInUser" */
       jQuery.dmxDataSet(
         {"id": "LoggedInUser", "url": "../dmxDatabaseSources/loggedinPlayer.php", "data": {"limit": "25"}, "dataSourceType": "database", "dataType": "jsonp"}
       );
  /* END dmxDataSet name "LoggedInUser" */
  /* dmxDataSet name "playRP" */
       jQuery.dmxDataSet(
         {"id": "playRP", "url": "../dmxDatabaseSources/playerRPList.php", "data": {"listFilter": "{{$FORM.listFilter}}", "limit": ""}, "dataSourceType": "database", "dataType": "jsonp"}
       );
  /* END dmxDataSet name "playRP" */
function dmxDataBindingsAction(action, target) { // v1.72
 var inst, evt = jQuery.event.fix(window.event || arguments.callee.caller.arguments[0]),
  args = Array.prototype.slice.call(arguments, 2);

 switch (action) {
  case 'refresh': inst = 'ds'; action = 'load'; break;
  case 'setPage': inst = 'ds'; break;
  case 'selectCurrent': inst = 'rp'; action = 'select'; break;
 }

 inst = (inst == 'ds')
  ? jQuery.dmxDataSet.dataSets[target]
  : jQuery(evt.target).closest('[data-binding-id="' + target + '"]').data('repeater')
  || jQuery.dmxDataBindings.regions[target];

 if (inst) inst[action].apply(inst, args);

 evt.preventDefault();
}
function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}
</script>
</head>
 <?php $pathToFile = $_SERVER['DOCUMENT_ROOT']; require_once($pathToFile. "/webassist/security_assist/helper_php.php" ); ?>
<body>
    <!-- HEADER -->
    <div class="nav placeholder center" id="returnhome"></div>
    <div class="nav row center">
        <?php if(WA_Auth_RulePasses("verifiedUser")){ // Begin Show Region ?>
            <?php include ($pathToFile. "/Templates/includes/account-nav.php"); ?>
        <?php } // End Show Region ?>
        <div class="mobilenav">
            <?php include ($pathToFile. "/Templates/includes/top-navigation-mobile.php"); ?>
        </div>
        <div class="uppernav">
            <?php include ($pathToFile. "/Templates/includes/top-navigation.php"); ?>
        </div>
        <script type="text/javascript">
            $('.scrollDown').click(function(){
                $('html, body').animate({
                    scrollTop: $( $(this).attr('href') ).offset().top
                }, 800);
                return false;
            });
        </script>
    </div>
    <div class="site_bg"></div>
    <div class="header row center">
        <div class="logo"><a href="/index.php"><img src="/images/BC_Web_Logo.png" alt="BattleComm"></a></div>
        <div class="mobile-logo"><a href="/index.php"><img src="/images/BC_Web_Logo_mobile.png" alt="BattleComm"></a>
            <?php if(WA_Auth_RulePasses("verifiedUser")){ // Begin Show Region ?>
                <?php include ($pathToFile. "/Templates/includes/mobile-buttons.php"); ?>
            <?php } // End Show Region ?>
        </div>
    </div>     
		        <!-- Middle -->
        <div class="mids">
        	<div class="container_full_width_frames no_shadow no_background no_padding">
            	<div class="full_content col" >
                    <div class="frame_u row">
                        <div class="frame_u_bar_full col"></div>
                        <div class="frame_ul_corner col"></div>
                        <div class="frame_ur_corner col"></div>
                    </div>
                    <div class="frame_content row">
                        <div class="frame_l_bar col"></div>
                        <div class="frame_r_bar col"></div>
                        <div class="frame_center col">
				<!-- Begin User Level Navigation -->
        	<div id="PlayerNav">
                <a href="/players/index.php">Player Home</a> | <a href="/players/mydashboard.php">My Dashboard</a> | 
                <?php if(WA_Auth_RulePasses("tourneyAdmin")){ // Begin Show Region ?>
                <a href="/tool/index.php">Tournament Admin</a> |
                  <?php } // End Show Region ?>
                <a href="/players/editProfileA.php">Edit Profile</a> |
                <?php if(WA_Auth_RulePasses("systemAdmin")){ // Begin Show Region ?>
                  <a href="/admin/index.php"> System Administrator</a>
                  <?php } // End Show Region ?>
                 | 
                <?php if(WA_Auth_RulePasses("ClubAdmin")){ // Begin Show Region ?>
                <a href="/clubsAdmin/index.php">Club Admin</a>
                <?php } // End Show Region ?>
            </div>
<!-- End User Level Navigation -->
			<h2>Adjust RP by Player</h2>
            <div class="playerDetail" id="playerDetail" data-binding-detail="repeat1" data-binding-id="playerDetail">
            <form id="pointSubmit" name="pointSubmit" class="pointSubmit" method="post">
            <input type="hidden" name="userID" value="{{id}}">
              <p>Player Name:<br>
<strong>{{firstName}} {{lastName}}</strong></p>
              <p>Current Balance: <br>
                <strong>{{user_points}}</strong> </p>
              <p>New Balance:<br>
               <span style="width:100px;"> <input name="pointAdjust" type="text" id="pointAdjust" title="pointAdust" class="pointAdjust"></span>
              </p>
              <p>
                <input type="submit" name="submit2" id="submit2" value="Submit">
              </p></form>
            </div>
            <div class="dataGrid" id="dataGrid">
            <div class="dataFilter" id="dataFilter">
            	<p>To filter the list type in the box below.  List filters on Last Name, First Name, and email.</p>
            	<p><input name="listFilter" type="text" id="listFilter" onKeyUp="MM_callJS('$.dmxDataBindings.globalScope.update(\'$FORM\');')"></p>
            </div>
              <p><table width="95%" border="1">
  <tbody>
    <tr>
      <th scope="col">Last Name</th>
      <th scope="col">First Name</th>
      <th scope="col">Email</th>
      <th scope="col">Current RP Balance</th>
      <th scope="col">&nbsp;</th>
      <th scope="col">&nbsp;</th>
    </tr>
    <tr data-binding-repeat="{{playRP.data}}" data-binding-id="repeat1">
      <td>{{lastName}}</td>
      <td>{{firstName}}</td>
      <td>{{email}}</td>
      <td>{{user_points}}</td>
      <td><input name="submit" type="submit" id="submit" formmethod="POST" title="Edit Player" onClick="dmxDataBindingsAction('selectCurrent','repeat1',this)" value="Edit Player"></td>
      <td>&nbsp;</td>
    </tr>
    
  </tbody>
</table>
</p>
            </div>
            
 		                    </div>
                </div>
                <div class="frame_b row">
                    <div class="frame_b_bar_full col"></div>
                    <div class="frame_bl_corner col"></div>
                    <div class="frame_br_corner col"></div>
                </div>
            </div>
        </div>
    </div>
</div>
        <!-- FOOTER -->
        <div class="footer">
            <div class="sub-footer center" id="contact">
                <div class="three_column_1 subfooter_filler">
                </div>
                <div class="three_column_1 subfooter no_margin">
                    <img src="/images/Titles/Contact_Us.png" alt=""/>
    <h4 class="left">By Phone: (909) 343-5454</h4>
                    <h4 class="left">By E-mail: Contact@Battle-Comm.com</h4>
                    <h4 class="left">Address: 555 Boutel Dr.</h4>
                    <h4 class="indent left">Someplace, CA</h4>
                </div>
                <div class="three_column_1 subfooter">
                    <img src="/images/Titles/Follow_Us.png" alt=""/>
                    <?php $pathToFile = $_SERVER['DOCUMENT_ROOT'];
					include ($pathToFile. "/Templates/includes/social-links.php"); ?>
                </div>
            </div>
            <?php include ($pathToFile. "/Templates/includes/footer.php"); ?>
            <a href="#" id="backtotop" style="display: block;">
                <span class="fa fa-angle-up"></span>
                <span class="back-to-top">Top</span>
            </a>
        </div>
    <script type="text/javascript">
/* dmxServerAction name "AdjustRP" */
       jQuery.dmxServerAction(
         {"id": "AdjustRP", "url": "../dmxConnect/api/RPAdjustment.php", "form": "#pointSubmit", "data": {}, "onSuccess": "dmxDataBindingsAction('refresh','playRP',{});"}
       );
  /* END dmxServerAction name "AdjustRP" */
        </script>
</body>
	<script><?php include ($pathToFile. "/Scripts/prefixfree.min.js"); ?></script>
    <script><?php include ($pathToFile. "/Scripts/mobile-toggle.js"); ?></script>
    <script><?php include ($pathToFile. "/Scripts/backtotop.js"); ?></script>
</html>
<?php
mysql_free_result($playersRPList);

mysql_free_result($State);
?>
