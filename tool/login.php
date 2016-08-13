<?php
@session_start();
?>
<?php
@session_start();
?>
<?php require_once("../webassist/security_assist/wa_md5encryption.php"); ?>
<?php require_once('../Connections/local.php'); ?>
<?php require_once("../webassist/form_validations/wavt_scripts_php.php"); ?>
<?php require_once("../webassist/form_validations/wavt_validatedform_php.php"); ?>
<?php require_once( "../webassist/security_assist/helper_php.php" ); ?>
<?php 
 if ((isset($_POST["LogIn_submit"]) || isset($_POST["LogIn_submit_x"])))  {
   $WAFV_Redirect = "".(htmlentities($_SERVER["PHP_SELF"], ENT_QUOTES))  ."?invalid=true";
   $_SESSION['WAVT_login_Errors'] = "";
   if ($WAFV_Redirect == "")  {
     $WAFV_Redirect = $_SERVER["PHP_SELF"];
   }
   $WAFV_Errors = "";
   $WAFV_Errors .= WAValidateEM((isset($_POST["Log_In_group_email"])?$_POST["Log_In_group_email"]:"") . "",true,1);
  $WAFV_Errors .= WAValidateRQ((isset($_POST["Log_In_group_2_password"])?$_POST["Log_In_group_2_password"]:"") . "",true,2);
  $WAFV_Errors .= WAValidateEL((isset($_POST["Log_In_group_2_password"])?$_POST["Log_In_group_2_password"]:"") . "",6,"",true,3);

   if ($WAFV_Errors != "")  {
     PostResult($WAFV_Redirect,$WAFV_Errors,"login");
   }
 }
 ?>
<?php
if ((isset($_POST["LogIn_submit"])&&(!isset($_POST["Log_In_group_3_Remember_my_information"])) && $_POST["LogIn_submit"] != "")) {
	setcookie("RememberMePWD", "", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if ((isset($_POST["LogIn_submit"])&&(!isset($_POST["Log_In_group_3_Remember_my_information"])) && $_POST["LogIn_submit"] != "")) {
	setcookie("RememberMeUN", "", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if ((isset($_POST["LogIn_submit"])&&(isset($_POST["Log_In_group_3_Remember_my_information"])) && $_POST["Log_In_group_3_Remember_my_information"] != "")) {
	setcookie("RememberMePWD", "".((isset($_POST["Log_In_group_2_password"]))?$_POST["Log_In_group_2_password"]:"")  ."", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if ((isset($_POST["LogIn_submit"])&&(isset($_POST["Log_In_group_3_Remember_my_information"])) && $_POST["Log_In_group_3_Remember_my_information"] != "")) {
	setcookie("RememberMeUN", "".((isset($_POST["Log_In_group_email"]))?$_POST["Log_In_group_email"]:"")  ."", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if ((isset($_POST["LogIn_submit"])&&(!isset($_POST["Log_In_group_4_Log_me_in_automatically"])) && $_POST["LogIn_submit"] != "")) {
	setcookie("AutoLoginPWD", "", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if ((isset($_POST["LogIn_submit"])&&(!isset($_POST["Log_In_group_4_Log_me_in_automatically"])) && $_POST["LogIn_submit"] != "")) {
	setcookie("AutoLoginUN", "", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if ((isset($_POST["LogIn_submit"])&&(isset($_POST["Log_In_group_4_Log_me_in_automatically"])) && $_POST["Log_In_group_4_Log_me_in_automatically"] != "")) {
	setcookie("AutoLoginPWD", "".((isset($_POST["Log_In_group_2_password"]))?$_POST["Log_In_group_2_password"]:"")  ."", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if ((isset($_POST["LogIn_submit"])&&(isset($_POST["Log_In_group_4_Log_me_in_automatically"])) && $_POST["Log_In_group_4_Log_me_in_automatically"] != "")) {
	setcookie("AutoLoginUN", "".((isset($_POST["Log_In_group_email"]))?$_POST["Log_In_group_email"]:"")  ."", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
	$WA_Auth_Parameter = array(
	"connection" => $local,
	"database" => $database_local,
	"tableName" => "user_login",
	"columns" => explode($WA_Auth_Separator,"email".$WA_Auth_Separator."password"),
	"columnValues" => explode($WA_Auth_Separator,"".((isset($_POST["Log_In_group_email"]))?$_POST["Log_In_group_email"]:"")  ."".$WA_Auth_Separator."".(WA_MD5Encryption((isset($_POST["Log_In_group_2_password"]))?$_POST["Log_In_group_2_password"]:""))  .""),
	"columnTypes" => explode($WA_Auth_Separator,"text".$WA_Auth_Separator."text"),
	"sessionColumns" => explode($WA_Auth_Separator,"id"),
	"sessionNames" => explode($WA_Auth_Separator,"SecurityAssist_id"),
	"successRedirect" => "login.php?loggedIn=1",
	"failRedirect" => "login.php?failedLogin=1",
	"gotoPreviousURL" => TRUE,
	"keepQueryString" => TRUE
	);
	
	WA_AuthenticateUser($WA_Auth_Parameter);
}
?>
<?php
if((((isset($_SESSION["SecurityAssist_id"]) && $_SESSION["SecurityAssist_id"] != "")?"LoggedIn":"") == "")&&(((isset($_COOKIE["AutoLoginUN"]))?$_COOKIE["AutoLoginUN"]:"") != "")&&(((isset($_COOKIE["AutoLoginPWD"]))?$_COOKIE["AutoLoginPWD"]:"") != "")){
	$WA_Auth_Parameter = array(
	"connection" => $local,
	"database" => $database_local,
	"tableName" => "user_login",
	"columns" => explode($WA_Auth_Separator,"email".$WA_Auth_Separator."password"),
	"columnValues" => explode($WA_Auth_Separator,"".((isset($_COOKIE["AutoLoginUN"]))?$_COOKIE["AutoLoginUN"]:"")  ."".$WA_Auth_Separator."".(WA_MD5Encryption((isset($_COOKIE["AutoLoginPWD"]))?$_COOKIE["AutoLoginPWD"]:""))  .""),
	"columnTypes" => explode($WA_Auth_Separator,"text".$WA_Auth_Separator."text"),
	"sessionColumns" => explode($WA_Auth_Separator,"id"),
	"sessionNames" => explode($WA_Auth_Separator,"SecurityAssist_id"),
	"successRedirect" => "",
	"failRedirect" => "",
	"gotoPreviousURL" => TRUE,
	"keepQueryString" => TRUE
	);
	
	WA_AuthenticateUser($WA_Auth_Parameter);
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
	$WA_Auth_Parameter = array(
	"connection" => $local,
	"database" => $database_local,
	"tableName" => "user_login",
	"columns" => explode($WA_Auth_Separator,"email".$WA_Auth_Separator."password"),
	"columnValues" => explode($WA_Auth_Separator,"".((isset($_POST["Log_In_group_email"]))?$_POST["Log_In_group_email"]:"")  ."".$WA_Auth_Separator."".WA_MD5Encryption(((isset($_POST["Log_In_group_2_password"]))?$_POST["Log_In_group_2_password"]:""))  .""),
	"columnTypes" => explode($WA_Auth_Separator,"text".$WA_Auth_Separator."text"),
	"sessionColumns" => explode($WA_Auth_Separator,"id".$WA_Auth_Separator."tourneyAdmin"),
	"sessionNames" => explode($WA_Auth_Separator,"SecurityAssist_id".$WA_Auth_Separator."tourneyAdmin"),
	"successRedirect" => "index.php",
	"failRedirect" => "login.php",
	"gotoPreviousURL" => TRUE,
	"keepQueryString" => TRUE
	);
	
	WA_AuthenticateUser($WA_Auth_Parameter);
}
?>
<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<title>Untitled Document</title>
<link href="admin_temp.css" rel="stylesheet" type="text/css" media="screen">
<link rel="stylesheet" type="text/css" href="bootstrap/3/css/bootstrap.css" />
<script type="text/javascript" src="../ScriptLibrary/jquery-latest.pack.js"></script>
<script type="text/javascript" src="ScriptLibrary/dmxDataBindings.js"></script>
<script type="text/javascript" src="ScriptLibrary/dmxDataSet.js"></script>
<script type="text/javascript" src="../ScriptLibrary/dmxSecurityProvider.js"></script>
<script type="text/javascript">
/* dmxSecurityProvider name "dmxSecurityProvider" */
       jQuery.dmxSecurityProvider(
         {"url": "dmxSecurityProviders/dmxSiteSecurity.php", "form": {"username": "", "password": "", "remember": ""}, "events": {"onLogin": "MM_goToURL('parent','index.php');"}}
       );
  /* END dmxSecurityProvider name "dmxSecurityProvider" */
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
function dmxSecurityProviderControl(action) { // v1.0
  if (jQuery.dmxSecurityProvider) {
    var args = Array.prototype.slice.call(arguments, 2);
    jQuery.dmxSecurityProvider[action].apply(args);
  }
}
</script>
<script src="../webassist/progress_bar/jquery-blockui-formprocessing.js" type="text/javascript"></script>
<link href="../webassist/forms/fd_basic_default.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="../webassist/jq_validation/Bloom.css">
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script><script type="text/javascript" src="../bootstrap/3/js/bootstrap.js"></script>
</head>

<body>
<div class="container">
  <div class="row">
    <?php if(WA_Auth_RulePasses("Validated form")){ // Begin Show Region ?>
    <p>Invalid username or password</p>
    <?php } // End Show Region ?>
    <?php if(WA_Auth_RulePasses("Log in success")){ // Begin Show Region ?>
    <p>You have been logged in</p>
    <?php } // End Show Region ?>
    <?php if(WA_Auth_RulePasses("Failed log in")){ // Begin Show Region ?>
    <p>Invalid username or password</p>
    <?php } // End Show Region ?>
    <?php if(WA_Auth_RulePasses("Emailed password")){ // Begin Show Region ?>
    <p>Password information emailed, please check your inbox</p>
    <?php } // End Show Region ?>
    <?php if(WA_Auth_RulePasses("Successful update")){ // Begin Show Region ?>
    <p>Registration completed successfully, please log in to access the site</p>
    <?php } // End Show Region ?>
    <div id="LogInContainer" class="WAATK">
      <div id="LogIn_Basic_Default_ProgressWrapper">
        <form class="Basic_Default" id="LogIn_Basic_Default" name="LogIn_Basic_Default" method="post" action="<?php echo (htmlentities($_SERVER["PHP_SELF"], ENT_QUOTES)); ?>">
          <fieldset class="Basic_Default" id="Log_In">
            <legend class="groupHeader">Log In</legend>
            <span class="fieldsetDescription"> Required * </span>
            <div class="lineGroup">
              <label for="Log_In_group_email" class="sublabel" > email:<span class="requiredIndicator">&nbsp;*</span></label>
              <input id="Log_In_group_email" name="Log_In_group_email" type="text" value="<?php echo((isset($_GET["invalid"])?ValidatedField("login","Log_In_group_email"):"".((isset($_COOKIE["RememberMeUN"]))?$_COOKIE["RememberMeUN"]:"")  ."")); ?>" class="formTextfield_Medium" tabindex="1" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" title="Please enter a value." required="true">
              <?php
if (ValidatedField('login','login'))  {
  if ((strpos((",".ValidatedField("login","login").","), "," . "1" . ",") !== false || "1" == ""))  {
    if (!(false))  {
?>
                <span class="serverInvalidState" id="Log_In_group_email_ServerError">Please enter a value.</span>
                <?php //WAFV_Conditional login.php login(1:)
    }
  }
}?>
            </div>
            <div class="lineGroup">
              <label for="Log_In_group_2_password" class="sublabel" > password:<span class="requiredIndicator">&nbsp;*</span></label>
              <input id="Log_In_group_2_password" name="Log_In_group_2_password" type="password" value="" class="formPasswordfield_Medium" tabindex="2" title="Please enter a value." confirm="" required="true">
              <a href="forgotpassword2.php">forgot password?</a>
              <?php
if (ValidatedField('login','login'))  {
  if ((strpos((",".ValidatedField("login","login").","), "," . "2" . ",") !== false || "2" == "") || (strpos((",".ValidatedField("login","login").","), "," . "3" . ",") !== false || "3" == ""))  {
    if (!(false))  {
?>
                <span class="serverInvalidState" id="Log_In_group_2_password_ServerError">Please enter a value.</span>
                <?php //WAFV_Conditional login.php login(2,3:)
    }
  }
}?>
            </div>
            <div class="lineGroup">
              <label class="checklabel" for="Log_In_group_3_Remember_my_information">
                <input type="checkbox" name="Log_In_group_3_Remember_my_information" id="Log_In_group_3_Remember_my_information" value="1" class="formCheckboxField_Standard" <?php if (!(strcmp((isset($_GET["invalid"])?ValidatedField("login","Log_In_group_3_Remember_my_information"):""),"1"))) {echo "checked=\"checked\"";} ?> tabindex="3" title="Please enter a value">
                &nbsp;Remember my information</label>
            </div>
            <div class="lineGroup">
              <label class="checklabel" for="Log_In_group_4_Log_me_in_automatically">
                <input type="checkbox" name="Log_In_group_4_Log_me_in_automatically" id="Log_In_group_4_Log_me_in_automatically" value="1" class="formCheckboxField_Standard" <?php if (!(strcmp((isset($_GET["invalid"])?ValidatedField("login","Log_In_group_4_Log_me_in_automatically"):""),"1"))) {echo "checked=\"checked\"";} ?> tabindex="4" title="Please enter a value">
                &nbsp;Log me in automatically</label>
            </div>
            <span class="buttonFieldGroup" >
              <input class="formButton" name="LogIn_submit" type="submit" id="LogIn_submit" value="Log In"  onClick="clearAllServerErrors('LogIn_Basic_Default')" tabindex="5">
            </span>
          </fieldset>
        </form>
      </div>
      <div id="LogIn_Basic_Default_ProgressMessageWrapper" class="blockUIOverlay" style="display:none;">
        <script type="text/javascript">
WADFP_SetProgressToForm('LogIn_Basic_Default', 'LogIn_Basic_Default_ProgressMessageWrapper', WADFP_Theme_Options['BigSpin:Slate']);
      </script>
        <div id="LogIn_Basic_Default_ProgressMessage" >
          <p style="margin:10px; padding:5px;" ><img src="../webassist/progress_bar/images/slate-largespin.gif" alt="" title="" style="vertical-align:middle;" />&nbsp;&nbsp;Please wait</p>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <h2>Login Required</h2>
      <p>A login is required to use this site.
        <input name="Login" type="button" id="Login" onClick="dmxSecurityProviderControl('modal')" value="Login">
      </p>
      <p>Go to<a href="index.php"> Home Page</a></p>
    </div>
  </div>
</div>
<script src="../webassist/forms/wa_servervalidation.js" type="text/javascript"></script>
<script src="../webassist/jq_validation/jquery.h5validate.js"></script>
<script>
var LogIn_Basic_Default_Opts = {
    focusout: true,
    focusin: false,
    change: false,
    keyup: false,
    popupClass: "Bloom",
    pointedAt: "left",
    fieldOffset: 10,
    fieldMargin: 2,
    position: "left",
    direction: "left",
    border: 1,
    offset: 25,
    closeText: "✖",
    percentWidth: 100,
    orientation: "bottom"
  };
function LogIn_Basic_Default_Validate() {
    $("#LogIn_Basic_Default").h5Validate(LogIn_Basic_Default_Opts);
  }
$(document).ready(function () {
  LogIn_Basic_Default_Validate()
  ConvertServerErrors(LogIn_Basic_Default_Opts);
});
</script>
</body>
</html>