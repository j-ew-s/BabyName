<?php
# Index
$app->get("/", "BaseController:autenticate");
# LIST ALL NAMES
$app->get("/Names", "NameController:getNames");
$app->get("/NameChart","NameController:getChartData");
# ADD VOTE  FOR A NAME
$app->post("/addVote/:id", "nameController:addVote");
# ADD NEW NAME
$app->post("/Name", "nameController:addName");

