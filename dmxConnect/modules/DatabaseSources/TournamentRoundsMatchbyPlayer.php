<?php
$exports = <<<'JSON'
{
    "name": "TournamentRoundsMatchbyPlayer",
    "module": "dbconnector",
    "action": "select",
    "options": {
    		"connection" : "xampp_local",
        "sql": {"type": "select", "table": "tournament", "columns": [{"table": "tournament", "column": "*"}, {"table": "tournament", "column": "tournament_id"}, {"table": "tournament", "column": "tournament_name"}, {"table": "tournament", "column": "tournament_startDate"}, {"table": "tournament", "column": "tournament_startTime"}, {"table": "tournament", "column": "Tournament_endDate"}, {"table": "tournament", "column": "Tournament_endTime"}, {"table": "tournament", "column": "tournament_store_location"}, {"table": "tournament", "column": "tournament_add_new_location"}, {"table": "tournament", "column": "tournament_location _name"}, {"table": "tournament", "column": "tournament_logo_icon"}, {"table": "tournament", "column": "tournament_address"}, {"table": "tournament", "column": "tournament_city"}, {"table": "tournament", "column": "tournament_state"}, {"table": "tournament", "column": "tournament_zip"}, {"table": "tournament", "column": "tournament_phone"}, {"table": "tournament", "column": "tournament_email"}, {"table": "tournament", "column": "tournament_URL"}, {"table": "tournament", "column": "tournament_admin_id"}, {"table": "tournament", "column": "tournament_admin_name"}, {"table": "tournament", "column": "tournament_info"}, {"table": "tournament", "column": "tournament_notes"}, {"table": "tournament", "column": "tournament_rounds"}, {"table": "tournament", "column": "factions_cap"}, {"table": "tournament", "column": "No_of_Games"}, {"table": "tournament", "column": "game_id"}, {"table": "tournament", "column": "game_title"}, {"table": "tournament", "column": "WinPointValue"}, {"table": "tournament", "column": "DrawPointValue"}, {"table": "tournament", "column": "LossPointValue"}, {"table": "tournament", "column": "tournament_owner"}, {"table": "tournament_rounds", "column": "*"}, {"table": "tournament_rounds", "column": "rounds_id"}, {"table": "tournament_rounds", "column": "tournament_id"}, {"table": "tournament_rounds", "column": "adminName"}, {"table": "tournament_rounds", "column": "Round_Title"}, {"table": "tournament_rounds", "column": "startTime"}, {"table": "tournament_rounds", "column": "endTime"}, {"table": "tournament_rounds", "column": "num_participants"}, {"table": "tournament_rounds", "column": "games_id"}, {"table": "tournament_rounds", "column": "games_title"}, {"table": "tournament_rounds", "column": "notes_rules_changes"}, {"table": "tournament_game_player", "column": "*"}, {"table": "tournament_players", "column": "*"}], "wheres": [{"table": "tournament_players", "column": "user_login_id", "bool": "and", "operator": "=", "value": {"from": "form", "value": "SecurityAssist_id", "required": true, "default": ""}}], "orders": [], "joins": [{"type": "inner", "table": "tournament_rounds", "clauses": [{"table": "tournament_rounds", "column": "tournament_id", "bool": "and", "operator": "=", "value": {"table": "tournament", "column": "tournament_id"}}]}, {"type": "inner", "table": "tournament_game_player", "clauses": [{"table": "tournament_game_player", "column": "tourney_round_id", "bool": "and", "operator": "=", "value": {"table": "tournament_rounds", "column": "rounds_id"}}]}, {"type": "inner", "table": "tournament_players", "clauses": [{"table": "tournament_players", "column": "tournament_id", "bool": "and", "operator": "=", "value": {"table": "tournament", "column": "tournament_id"}}]}]}
    }
}
JSON;
?>