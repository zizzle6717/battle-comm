<?php
$base = realpath(dirname(__FILE__)) . '/';
require($base.'../dmxConnections/local localhost.php');
require_once($base.'../ScriptLibrary/dmxDatabaseConnector/sqlBuilder.php');
require_once($base.'../ScriptLibrary/dmxDatabaseConnector/adapters/mysql/sqlBuilder.php');
require_once($base.'../ScriptLibrary/dmxDatabaseConnector/sqlBuilderEx.php');

$cfg = <<<JSON
{"type": "insert", "table": "tournament", "values": [{"table": "tournament", "column": "tournament_name", "value": {"from": "form", "value": "tournament_name", "required": true, "default": ""}}, {"table": "tournament", "column": "tournament_startDate", "value": {"from": "form", "value": "tournament_startDate", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_startTime", "value": {"from": "form", "value": "tournament_startTime", "required": false, "default": ""}}, {"table": "tournament", "column": "Tournament_endDate", "value": {"from": "form", "value": "Tournament_endDate", "required": false, "default": ""}}, {"table": "tournament", "column": "Tournament_endTime", "value": {"from": "form", "value": "Tournament_endTime", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_store_location", "value": {"from": "form", "value": "tournament_store_location", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_add_new_location", "value": {"from": "form", "value": "tournament_add_new_location", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_location _name", "value": {"from": "form", "value": "tournament_location _name", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_logo_icon", "value": {"from": "form", "value": "tournament_logo_icon", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_address", "value": {"from": "form", "value": "tournament_address", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_city", "value": {"from": "form", "value": "tournament_city", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_state", "value": {"from": "form", "value": "tournament_state", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_zip", "value": {"from": "form", "value": "tournament_zip", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_phone", "value": {"from": "form", "value": "tournament_phone", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_email", "value": {"from": "form", "value": "tournament_email", "required": true, "default": ""}}, {"table": "tournament", "column": "tournament_URL", "value": {"from": "form", "value": "tournament_URL", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_admin_id", "value": {"from": "form", "value": "tournament_admin_id", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_info", "value": {"from": "form", "value": "tournament_info", "required": false, "default": ""}}, {"table": "tournament", "column": "tournament_rounds", "value": {"from": "form", "value": "tournament_rounds", "required": false, "default": ""}}], "wheres": []}
JSON;

$isAjax = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');

$conn = new SqlConnectionEx();
$conn->execute(SqlBuilderEx($cfg), $isAjax);

if (!$isAjax) {
	header('Location: ' . (isset($_GET['redirectUrl']) ? $_GET['redirectUrl'] : $_SERVER['HTTP_REFERER']));
}
?>