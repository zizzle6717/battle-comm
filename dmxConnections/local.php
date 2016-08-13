<?php
// Database Type : "MySQL"
// Database Adapter : "mysql"
$dmxConnectionString = "mysql:host=battle-comm-db-main.c2tm0zmnvkz6.us-west-2.rds.amazonaws.com;port=;dbname=hyberion_battlecomm;charset=utf8;user=bcadmin;password=Xdxn9\zX5s";
$dmxConnectionLimit = 1000;
$dmxConnectionDebug = false;

$dmxConnectionMeta = <<<JSON
{"allTables": ["BinaryMenuChoice", "bc_news", "club", "club_user_membership", "club_user_types", "clubs_games_affiliation", "event_request", "factions", "game_categories", "game_system", "matched_tiebreakers", "news_categories", "notification_request", "pages", "players", "randomPlayerInfo", "tbl_state", "tournament", "tournament_game", "tournament_game_player", "tournament_game_tiebreaker_lookup", "tournament_match", "tournament_players", "tournament_rounds", "tournament_tiebreaker", "tourney_admin", "user_account_status", "user_icons", "user_login", "user_profile", "usergroups", "users_assigned_permissions", "venue"], "allViews": [], "tables": {"venue": {"columns": {"venue_id": {"type": "int", "primary": true}, "venue_Name": {"type": "varchar", "size": 255, "nullable": true}, "venue_logo_icon": {"type": "varchar", "size": 255}, "venue_Street_Address": {"type": "varchar", "size": 255}, "venue_city": {"type": "varchar", "size": 75}, "venue_state": {"type": "varchar", "size": 3}, "venue_zip_cc_code": {"type": "varchar", "size": 18}, "venue_phone": {"type": "varchar", "size": 24}, "venue_fax": {"type": "varchar", "size": 24}, "venue_email": {"type": "varchar", "size": 255}, "venue_website": {"type": "varchar", "size": 255}, "venue_facebook": {"type": "varchar", "size": 150}, "venue_about": {"type": "mediumtext", "size": 16777215}, "venue_contact_name": {"type": "varchar", "size": 255}, "venue_hours": {"type": "text", "size": 65535}, "venue_notes": {"type": "mediumtext", "size": 16777215}, "venue_outriders": {"type": "varchar", "size": 50}, "venue_player_capacity": {"type": "varchar", "size": 100}, "venue_map_URL": {"type": "varchar", "size": 255}}}, "user_login": {"columns": {"id": {"type": "int", "primary": true}, "email": {"type": "varchar", "size": 50}, "password": {"type": "varchar", "size": 50}, "activation_key": {"type": "varchar", "size": 50}, "activation_state": {"type": "tinyint", "defaultValue": "1"}, "firstName": {"type": "varchar", "size": 50}, "lastName": {"type": "varchar", "size": 75}, "join_date": {"type": "timestamp", "defaultValue": "CURRENT_TIMESTAMP"}, "tourneyAdmin": {"type": "enum", "size": 3, "defaultValue": "no"}, "EventAdmin": {"type": "enum", "size": 3, "defaultValue": "no"}, "NewsContributor": {"type": "enum", "size": 3, "defaultValue": "no"}, "venueAdmin": {"type": "enum", "size": 3, "defaultValue": "no"}, "user_handle": {"type": "varchar", "size": 150, "nullable": true}, "user_main_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_mobile_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_work_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_street_address": {"type": "varchar", "size": 45, "nullable": true}, "user_apt_suite": {"type": "varchar", "size": 45, "nullable": true}, "user_city": {"type": "varchar", "size": 45, "nullable": true}, "user_state": {"type": "varchar", "size": 4, "nullable": true}, "user_zip": {"type": "varchar", "size": 12, "nullable": true}, "user_Date_of_Birth": {"type": "date", "nullable": true}, "user_bio": {"type": "mediumtext", "size": 16777215, "nullable": true}, "user_facebook": {"type": "varchar", "size": 45, "nullable": true}, "user_twitter": {"type": "varchar", "size": 45, "nullable": true}, "user_instagram": {"type": "varchar", "size": 45, "nullable": true}, "user_google_plus": {"type": "varchar", "size": 45, "nullable": true}, "user_youtube": {"type": "varchar", "size": 45, "nullable": true}, "user_twitch": {"type": "varchar", "size": 45, "nullable": true}, "user_website": {"type": "varchar", "size": 45, "nullable": true}, "user_points": {"type": "int", "nullable": true}, "user_visibility": {"type": "enum", "size": 3, "nullable": true}, "user_share_contact": {"type": "enum", "size": 3, "nullable": true}, "user_share_name": {"type": "enum", "size": 3, "nullable": true}, "user_share_status": {"type": "enum", "size": 3, "nullable": true}, "user_newsletter": {"type": "enum", "size": 3, "nullable": true}, "user_marketing": {"type": "enum", "size": 3, "nullable": true}, "user_sms": {"type": "enum", "size": 3, "nullable": true}, "user_allow_play": {"type": "enum", "size": 3, "nullable": true}, "user_icon": {"type": "varchar", "size": 200, "nullable": true, "defaultValue": "http://www.testbattlecomm.com/images/profile_image_default.png"}, "totalWins": {"type": "int", "nullable": true, "defaultValue": "0"}, "totalLoss": {"type": "int", "nullable": true, "defaultValue": "0"}, "totalDraw": {"type": "int", "nullable": true, "defaultValue": "0"}, "accountActive": {"type": "enum", "size": 3}}}, "user_profile": {"columns": {"iduser_profile": {"type": "int", "primary": true}, "userID": {"type": "int"}, "user_handle": {"type": "varchar", "size": 150}, "user_main_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_mobile_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_work_phone": {"type": "varchar", "size": 20, "nullable": true}, "user_street_address": {"type": "varchar", "size": 45, "nullable": true}, "user_apt_suite": {"type": "varchar", "size": 10, "nullable": true}, "user_city": {"type": "varchar", "size": 45, "nullable": true}, "user_zip": {"type": "varchar", "size": 12, "nullable": true}, "user_dateJoined": {"type": "date", "nullable": true}, "user_birthday": {"type": "date", "nullable": true}, "user_bio": {"type": "mediumtext", "size": 16777215, "nullable": true}, "user_facebook": {"type": "varchar", "size": 45, "nullable": true}, "user_twitter": {"type": "varchar", "size": 45, "nullable": true}, "user_instagram": {"type": "varchar", "size": 45, "nullable": true}, "user_google_plus": {"type": "varchar", "size": 45, "nullable": true}, "user_youtube": {"type": "varchar", "size": 45, "nullable": true}, "user_twitch": {"type": "varchar", "size": 45, "nullable": true}, "user_website": {"type": "varchar", "size": 45, "nullable": true}, "user_internal_notes": {"type": "mediumtext", "size": 16777215, "nullable": true}, "user_security_level": {"type": "int", "nullable": true}, "user_points": {"type": "int", "nullable": true}, "user_cash_value": {"type": "float", "nullable": true}, "user_visibility": {"type": "int", "nullable": true}, "user_share_contact": {"type": "tinyint", "nullable": true}, "user_share_social": {"type": "tinyint", "nullable": true}, "user_share_name": {"type": "tinyint", "nullable": true}, "user_share_status": {"type": "tinyint", "nullable": true}, "user_newsletter": {"type": "tinyint", "nullable": true}, "user_marketing": {"type": "tinyint", "nullable": true}, "user_allow_sms": {"type": "tinyint", "nullable": true}, "user_mobile_carrier": {"type": "tinyint", "nullable": true}, "user_allow_play_requests": {"type": "tinyint", "nullable": true}, "user_icon": {"type": "varchar", "size": 175}, "totalWins": {"type": "int", "defaultValue": "0"}, "totalLoss": {"type": "int", "defaultValue": "0"}, "totalDraw": {"type": "int", "defaultValue": "0"}, "accountActive": {"type": "enum", "size": 3, "nullable": true, "defaultValue": "yes"}}}, "tbl_state": {"columns": {"state_id": {"type": "smallint", "primary": true}, "state_name": {"type": "varchar", "size": 32}, "state_abbr": {"type": "varchar", "size": 8, "nullable": true}}}, "tournament": {"columns": {"tournament_id": {"type": "int", "primary": true}, "tournament_name": {"type": "varchar", "size": 255}, "tournament_startDate": {"type": "date"}, "tournament_startTime": {"type": "time"}, "Tournament_endDate": {"type": "date"}, "Tournament_endTime": {"type": "time"}, "tournament_store_location": {"type": "varchar", "size": 255}, "tournament_add_new_location": {"type": "enum", "size": 3}, "tournament_location _name": {"type": "varchar", "size": 255}, "tournament_logo_icon": {"type": "varchar", "size": 255}, "tournament_address": {"type": "varchar", "size": 100}, "tournament_city": {"type": "varchar", "size": 50}, "tournament_state": {"type": "varchar", "size": 4}, "tournament_zip": {"type": "varchar", "size": 12}, "tournament_phone": {"type": "varchar", "size": 24}, "tournament_email": {"type": "varchar", "size": 50}, "tournament_URL": {"type": "varchar", "size": 255}, "tournament_admin_id": {"type": "varchar", "size": 175}, "tournament_admin_name": {"type": "varchar", "size": 100}, "tournament_info": {"type": "longtext", "size": 4294967295}, "tournament_notes": {"type": "mediumtext", "size": 16777215}, "tournament_rounds": {"type": "int"}, "factions_cap": {"type": "int", "nullable": true}, "No_of_Games": {"type": "int", "nullable": true}, "game_id": {"type": "int", "nullable": true}, "game_title": {"type": "varchar", "size": 100, "nullable": true}}}, "bc_news": {"columns": {"news_id": {"type": "int", "primary": true}, "news_title": {"type": "varchar", "size": 255}, "featured_image": {"type": "varchar", "size": 400}, "news_callout": {"type": "text", "size": 65535}, "news_body": {"type": "mediumtext", "size": 16777215}, "news_author": {"type": "varchar", "size": 255}, "news_date_submitted": {"type": "date"}, "publish": {"type": "set", "size": 14, "defaultValue": "pending"}, "news_date_published": {"type": "date", "nullable": true}, "news_featured": {"type": "set", "size": 6, "defaultValue": "no"}, "tags": {"type": "text", "size": 65535, "nullable": true}, "parent": {"type": "varchar", "size": 255, "nullable": true}, "game_system": {"type": "text", "size": 65535, "nullable": true}, "news_submitted_IP_number": {"type": "varchar", "size": 50}}}, "game_system": {"columns": {"game_system_id": {"type": "int"}, "game_system_Title": {"type": "varchar", "size": 255}, "game_system_Title_version": {"type": "varchar", "size": 50}, "game_system_publisher": {"type": "varchar", "size": 200}, "game_system_official_url": {"type": "varchar", "size": 255}, "game_logo": {"type": "varchar", "size": 255}, "games_category": {"type": "varchar", "size": 80}, "games_time": {"type": "varchar", "size": 10}, "noOfPlayers": {"type": "int"}}}}}
JSON;
?>