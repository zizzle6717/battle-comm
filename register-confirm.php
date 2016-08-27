<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BattleComm: Shop</title>
    <link rel="stylesheet" type="text/css" media="screen, print" href="Styles/global.css">
    <link rel="stylesheet" type="text/css" media="screen, print" href="Styles/magnificent-popup/magnificent-popup.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="Scripts/jquery.magnificant-popup.js"></script>
	<script type="text/javascript" src="Scripts/mobile-toggle.js"></script>
    <script type="text/javascript" src="Scripts/backtotop.js"></script>
</head>

    <body>
    	<!-- HEADER -->
        <div class="nav placeholder center" id="returnhome">
        </div>
        <div class="nav row center">
        	<?php include 'includes/account-nav.php'; ?>
            <div class="mobilenav">
                <?php include 'includes/top-navigation.php'; ?>
            </div>
            <div class="uppernav">
                <?php include 'includes/top-navigation.php'; ?>
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
            <div class="logo"><a href="index.php"><img src="images/BC_Web_Logo.png" alt="BattleComm"></a></div>
            <div class="mobile-logo"><a href="index.php"><img src="images/BC_Web_Logo_mobile.png" alt="BattleComm"></a>
                <div class="mobile-buttons">
                    <div class="my-profile-button"><a href="admin/user/profile-edit.php"><img src="images/BC_App_MyProfile.png" alt="BattleComm"></a></div><div class="create-match-button"><a href="match.php"><img src="images/BC_App_CreateMatch.png" alt="BattleComm"></a></div>
                </div>
            </div>
        </div>
        
  
        <!-- Middle -->
        <div class="mids">
        	<div class="container_full_width_table no_shadow no_background no_padding">
        		<div class="full_content col" >
                    <div class="frame_u row">
                        <div class="frame_u_bar_full col">
                        	<div class="title_large"><h1>Please Confirm Your Registration</h1></div>
                        </div>
                        <div class="frame_ul_corner col"></div>
                        <div class="frame_ur_corner col"></div>
                    </div>
                    <div class="frame_content row">
                        <div class="frame_l_bar col"></div>
                        <div class="frame_r_bar col"></div>
                        <div class="frame_center_panel col">
                        	<div class="full_width">
                            <p>Please check the email account you registered with.  You will need to verify your email address by following the instructions in the verification email we have sent.<br>
<br>
Once you have verified your email, you will be able to <a href="loginA.php" title="Player Login">log in</a> and complete your player profile.</p>
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
              
        
        <!-- FOOTER -->
        <div class="footer">
            <div class="sub-footer center" id="contact">
                <div class="three_column_1 subfooter_filler">
                </div>
                <div class="three_column_1 subfooter no_margin">
                    <img src="images/Titles/Contact_Us.png" alt=""/>
    <h4 class="left">By Phone: (909) 343-5454</h4>
                    <h4 class="left">By E-mail: Contact@Battle-Comm.com</h4>
                    <h4 class="left">Address: 555 Boutel Dr.</h4>
                    <h4 class="indent left">Someplace, CA</h4>
                </div>
                <div class="three_column_1 subfooter">
                    <img src="images/Titles/Follow_Us.png" alt=""/>
                    <?php include 'includes/social-links.php'; ?>
                </div>
    
            </div>
            <?php include 'includes/footer.php'; ?>
            <a href="#" id="backtotop" style="display: block;">
                <span class="fa fa-angle-up"></span>
                <span class="back-to-top">Top</span>
            </a>
        </div>
    </body>
</html>