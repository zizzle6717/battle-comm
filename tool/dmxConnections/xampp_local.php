<?php
// Database Type : "MySQL"
// Database Adapter : "mysql"
$dmxConnectionString = "mysql:host=localhost;port=;dbname=hyberion_battlecomm;charset=utf8;user=hyberion_dbadmin;password=opensesame1234";
$dmxConnectionLimit = 1000;
$dmxConnectionDebug = false;

$dmxConnectionMeta = <<<JSON
{"allTables": ["BinaryMenuChoice", "bc_news", "club", "club_user_membership", "club_user_types", "clubs_games_affiliation", "event_request", "factions", "game_categories", "game_system", "matched_tiebreakers", "news_categories", "notification_request", "pages", "players", "randomPlayerInfo", "tbl_state", "tournament", "tournament_game", "tournament_game_player", "tournament_game_tiebreaker_lookup", "tournament_match", "tournament_players", "tournament_rounds", "tournament_tiebreaker", "tourney_admin", "user_account_status", "user_icons", "user_login", "user_profile", "usergroups", "users_assigned_permissions", "venue"], "allViews": [], "tables": {"tournament": {"columns": {"tournament_id": {"type": "int", "primary": true}, "tournament_name": {"type": "varchar", "size": 255}, "tournament_startDate": {"type": "date"}, "tournament_startTime": {"type": "time"}, "Tournament_endDate": {"type": "date"}, "Tournament_endTime": {"type": "time"}, "tournament_store_location": {"type": "varchar", "size": 255}, "tournament_add_new_location": {"type": "enum", "size": 3}, "tournament_location _name": {"type": "varchar", "size": 255}, "tournament_logo_icon": {"type": "varchar", "size": 255}, "tournament_address": {"type": "varchar", "size": 100}, "tournament_city": {"type": "varchar", "size": 50}, "tournament_state": {"type": "varchar", "size": 4}, "tournament_zip": {"type": "varchar", "size": 12}, "tournament_phone": {"type": "varchar", "size": 24}, "tournament_email": {"type": "varchar", "size": 50}, "tournament_URL": {"type": "varchar", "size": 255}, "tournament_admin_id": {"type": "varchar", "size": 175}, "tournament_admin_name": {"type": "varchar", "size": 100}, "tournament_info": {"type": "longtext", "size": 4294967295}, "tournament_notes": {"type": "mediumtext", "size": 16777215}, "tournament_rounds": {"type": "int"}, "factions_cap": {"type": "int", "nullable": true}, "No_of_Games": {"type": "int", "nullable": true}, "game_id": {"type": "int", "nullable": true}, "game_title": {"type": "varchar", "size": 100, "nullable": true}}}, "tournament_rounds": {"columns": {"rounds_id": {"type": "int", "primary": true}, "tournament_id": {"type": "int", "nullable": true}, "adminName": {"type": "varchar", "size": 100}, "Round_Title": {"type": "varchar", "size": 244, "nullable": true}, "startTime": {"type": "time", "nullable": true}, "endTime": {"type": "time", "nullable": true}, "num_participants": {"type": "int", "nullable": true}, "games_id": {"type": "int", "nullable": true}, "games_title": {"type": "varchar", "size": 100, "nullable": true}, "notes_rules_changes": {"type": "mediumtext", "size": 16777215, "nullable": true}}}, "tournament_players": {"columns": {"tournament_players_id": {"type": "int", "primary": true}, "tournament_id": {"type": "int"}, "user_login_id": {"type": "varchar", "size": 175}, "userHandle": {"type": "varchar", "size": 75, "nullable": true}, "firstName": {"type": "varchar", "size": 100}, "lastName": {"type": "varchar", "size": 100}, "email_Address": {"type": "varchar", "size": 100}, "user_confirmed": {"type": "enum", "size": 3, "defaultValue": "no"}, "dateRegistered": {"type": "timestamp", "defaultValue": "CURRENT_TIMESTAMP"}, "playerAssigned": {"type": "enum", "size": 3, "defaultValue": "no"}}}, "tournament_players2": {"columns": []}, "venue": {"columns": {"venue_id": {"type": "int", "primary": true}, "venue_Name": {"type": "varchar", "size": 255, "nullable": true}, "venue_logo_icon": {"type": "varchar", "size": 255}, "venue_Street_Address": {"type": "varchar", "size": 255}, "venue_city": {"type": "varchar", "size": 75}, "venue_state": {"type": "varchar", "size": 3}, "venue_zip_cc_code": {"type": "varchar", "size": 18}, "venue_phone": {"type": "varchar", "size": 24}, "venue_fax": {"type": "varchar", "size": 24}, "venue_email": {"type": "varchar", "size": 255}, "venue_website": {"type": "varchar", "size": 255}, "venue_facebook": {"type": "varchar", "size": 150}, "venue_about": {"type": "mediumtext", "size": 16777215}, "venue_contact_name": {"type": "varchar", "size": 255}, "venue_hours": {"type": "text", "size": 65535}, "venue_notes": {"type": "mediumtext", "size": 16777215}, "venue_outriders": {"type": "varchar", "size": 50}, "venue_player_capacity": {"type": "varchar", "size": 100}, "venue_map_URL": {"type": "varchar", "size": 255}}}, "game_system": {"columns": {"game_system_id": {"type": "int"}, "game_system_Title": {"type": "varchar", "size": 255}, "game_system_Title_version": {"type": "varchar", "size": 50}, "game_system_publisher": {"type": "varchar", "size": 200}, "game_system_official_url": {"type": "varchar", "size": 255}, "game_logo": {"type": "varchar", "size": 255}, "games_category": {"type": "varchar", "size": 80}, "games_time": {"type": "varchar", "size": 10}, "noOfPlayers": {"type": "int"}}}, "tournament_tiebreaker": {"columns": {"tourney_tiebreaker_id": {"type": "int", "primary": true}, "match_id": {"type": "int"}, "Game Title": {"type": "varchar", "size": 100}, "tiebreaker_name": {"type": "varchar", "size": 200}, "tiebreaker_conditions": {"type": "mediumtext", "size": 16777215}, "point_value": {"type": "int"}}}, "matched_tiebreakers": {"columns": {"matched_tiebreakers": {"type": "int", "primary": true}, "match_id": {"type": "int"}, "match_name": {"type": "varchar", "size": 100}, "tournament_ID": {"type": "int"}, "mission_id": {"type": "int"}, "mission_name": {"type": "varchar", "size": 100}, "tiebreaker_points": {"type": "int"}}}, "tournament_game_player": {"columns": {"tourney_game_player_id": {"type": "int", "primary": true}, "player_id": {"type": "int"}, "player_handle": {"type": "varchar", "size": 100}, "tourney_round_id": {"type": "int"}, "tourney_round_title": {"type": "varchar", "size": 100}, "tournament_id": {"type": "int"}, "game_id": {"type": "int"}, "game_title": {"type": "varchar", "size": 100}, "Game_session": {"type": "varchar", "size": 40}, "table_id": {"type": "varchar", "size": 40}, "game_result": {"type": "varchar", "size": 10}, "Game_info": {"type": "mediumtext", "size": 16777215}, "game_points": {"type": "int"}, "mission_points": {"type": "int"}, "total_points": {"type": "int"}, "Notes_comments": {"type": "mediumtext", "size": 16777215, "nullable": true}, "results_approved": {"type": "enum", "size": 3, "defaultValue": "no"}}}, "players": {"columns": {"playerId": {"type": "int", "primary": true}, "playerHandle": {"type": "varchar", "size": 200}, "playerFirstName": {"type": "varchar", "size": 80}, "playerLastName": {"type": "varchar", "size": 80}, "playerEmail": {"type": "varchar", "size": 200}, "PlayerWinCount": {"type": "int", "nullable": true}, "PlayerDrawCount": {"type": "int", "nullable": true}, "PlayerLossCount": {"type": "int", "nullable": true}, "totalPoints": {"type": "int", "nullable": true}, "active": {"type": "enum", "size": 3, "defaultValue": "no"}, "testingAdmin": {"type": "varchar", "size": 140, "nullable": true}}}, "game_categories": {"columns": {"game_cat_id": {"type": "int", "primary": true}, "game_category": {"type": "varchar", "size": 140}, "WinPointValue": {"type": "int"}, "lossPointValue": {"type": "int"}, "drawPointValue": {"type": "int"}}}, "users_assigned_permissions": {"columns": {"assigned_id": {"type": "int", "primary": true}, "user_login_id": {"type": "int"}, "permissions_id": {"type": "int"}}}, "tourney_admin": {"columns": {"UserID": {"type": "int", "primary": true}, "UserEmail": {"type": "varchar", "size": 500, "nullable": true}, "UserPassword": {"type": "varchar", "size": 500, "nullable": true}, "UserFirstName": {"type": "varchar", "size": 50, "nullable": true}, "UserLastName": {"type": "varchar", "size": 50, "nullable": true}, "UserCity": {"type": "varchar", "size": 90, "nullable": true}, "UserState": {"type": "varchar", "size": 50, "nullable": true}, "UserZip": {"type": "varchar", "size": 12, "nullable": true}, "UserEmailVerified": {"type": "tinyint", "nullable": true, "defaultValue": "0"}, "UserRegistrationDate": {"type": "timestamp", "nullable": true, "defaultValue": "CURRENT_TIMESTAMP"}, "UserVerificationCode": {"type": "varchar", "size": 20, "nullable": true}, "UserIP": {"type": "varchar", "size": 50, "nullable": true}, "UserPhone": {"type": "varchar", "size": 20, "nullable": true}, "UserFax": {"type": "varchar", "size": 20, "nullable": true}, "UserCountry": {"type": "varchar", "size": 20, "nullable": true}, "UserAddress": {"type": "varchar", "size": 100, "nullable": true}, "UserAddress2": {"type": "varchar", "size": 50, "nullable": true}, "UserGroupID": {"type": "int", "defaultValue": "1"}}}, "user_profile": {"columns": {"iduser_profile": {"type": "int", "primary": true}, "userID": {"type": "int"}, "user_handle": {"type": "varchar", "size": 150}, "user_main_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_mobile_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_work_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_street_address": {"type": "varchar", "size": 45, "nullable": true}, "user_apt_suite": {"type": "varchar", "size": 10, "nullable": true}, "user_city": {"type": "varchar", "size": 45, "nullable": true}, "user_zip": {"type": "varchar", "size": 12, "nullable": true}, "user_dateJoined": {"type": "date", "nullable": true}, "user_birthday": {"type": "date", "nullable": true}, "user_bio": {"type": "mediumtext", "size": 16777215, "nullable": true}, "user_facebook": {"type": "varchar", "size": 45, "nullable": true}, "user_twitter": {"type": "varchar", "size": 45, "nullable": true}, "user_instagram": {"type": "varchar", "size": 45, "nullable": true}, "user_google_plus": {"type": "varchar", "size": 45, "nullable": true}, "user_youtube": {"type": "varchar", "size": 45, "nullable": true}, "user_twitch": {"type": "varchar", "size": 45, "nullable": true}, "user_website": {"type": "varchar", "size": 45, "nullable": true}, "user_internal_notes": {"type": "mediumtext", "size": 16777215, "nullable": true}, "user_security_level": {"type": "int", "nullable": true}, "user_points": {"type": "int", "nullable": true}, "user_cash_value": {"type": "float", "nullable": true}, "user_visibility": {"type": "int", "nullable": true}, "user_share_contact": {"type": "tinyint", "nullable": true}, "user_share_social": {"type": "tinyint", "nullable": true}, "user_share_name": {"type": "tinyint", "nullable": true}, "user_share_status": {"type": "tinyint", "nullable": true}, "user_newsletter": {"type": "tinyint", "nullable": true}, "user_marketing": {"type": "tinyint", "nullable": true}, "user_allow_sms": {"type": "tinyint", "nullable": true}, "user_mobile_carrier": {"type": "tinyint", "nullable": true}, "user_allow_play_requests": {"type": "tinyint", "nullable": true}, "user_icon": {"type": "varchar", "size": 175}, "totalWins": {"type": "int", "defaultValue": "0"}, "totalLoss": {"type": "int", "defaultValue": "0"}, "totalDraw": {"type": "int", "defaultValue": "0"}, "accountActive": {"type": "enum", "size": 3, "nullable": true, "defaultValue": "yes"}}}, "randomPlayerInfo": {"columns": {"randomPlayerKey": {"type": "int", "primary": true}, "player_handle": {"type": "varchar", "size": 75}, "playerFirstName": {"type": "varchar", "size": 75}, "playerLastName": {"type": "varchar", "size": 75}, "playerEmail": {"type": "varchar", "size": 100}}}, "user_login": {"columns": {"id": {"type": "int", "primary": true}, "email": {"type": "varchar", "size": 50}, "password": {"type": "varchar", "size": 50}, "activation_key": {"type": "varchar", "size": 50}, "activation_state": {"type": "tinyint", "defaultValue": "1"}, "firstName": {"type": "varchar", "size": 50}, "lastName": {"type": "varchar", "size": 75}, "join_date": {"type": "timestamp", "defaultValue": "CURRENT_TIMESTAMP"}, "tourneyAdmin": {"type": "enum", "size": 3, "defaultValue": "no"}, "EventAdmin": {"type": "enum", "size": 3, "defaultValue": "no"}, "NewsContributor": {"type": "enum", "size": 3, "defaultValue": "no"}, "venueAdmin": {"type": "enum", "size": 3, "defaultValue": "no"}, "user_handle": {"type": "varchar", "size": 150, "nullable": true}, "user_main_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_mobile_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_work_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_street_address": {"type": "varchar", "size": 45, "nullable": true}, "user_apt_suite": {"type": "varchar", "size": 45, "nullable": true}, "user_city": {"type": "varchar", "size": 45, "nullable": true}, "user_state": {"type": "varchar", "size": 4, "nullable": true}, "user_zip": {"type": "varchar", "size": 12, "nullable": true}, "user_Date_of_Birth": {"type": "date", "nullable": true}, "user_bio": {"type": "mediumtext", "size": 16777215, "nullable": true}, "user_facebook": {"type": "varchar", "size": 45, "nullable": true}, "user_twitter": {"type": "varchar", "size": 45, "nullable": true}, "user_instagram": {"type": "varchar", "size": 45, "nullable": true}, "user_google_plus": {"type": "varchar", "size": 45, "nullable": true}, "user_youtube": {"type": "varchar", "size": 45, "nullable": true}, "user_twitch": {"type": "varchar", "size": 45, "nullable": true}, "user_website": {"type": "varchar", "size": 45, "nullable": true}, "user_points": {"type": "int", "nullable": true}, "user_visibility": {"type": "enum", "size": 3, "nullable": true}, "user_share_contact": {"type": "enum", "size": 3, "nullable": true}, "user_share_name": {"type": "enum", "size": 3, "nullable": true}, "user_share_status": {"type": "enum", "size": 3, "nullable": true}, "user_newsletter": {"type": "enum", "size": 3, "nullable": true}, "user_marketing": {"type": "enum", "size": 3, "nullable": true}, "user_sms": {"type": "enum", "size": 3, "nullable": true}, "user_allow_play": {"type": "enum", "size": 3, "nullable": true}, "user_icon": {"type": "varchar", "size": 200, "nullable": true, "defaultValue": "http://www.testbattlecomm.com/images/profile_image_default.png"}, "totalWins": {"type": "int", "nullable": true, "defaultValue": "0"}, "totalLoss": {"type": "int", "nullable": true, "defaultValue": "0"}, "totalDraw": {"type": "int", "nullable": true, "defaultValue": "0"}, "accountActive": {"type": "enum", "size": 3}}}}}
JSON;
?>