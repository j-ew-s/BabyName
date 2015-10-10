<?php
# Index
$app->get("/", "BaseController:autenticate");
# LIST ALL NAMES
$app->get("/Names/", "NameController:getNames");
# ADD VOTE  FOR A NAME
$app->post("/addVote/:id", "NameController:addVote");
# ADD NEW NAME
$app->post("/Name", "NameController:addName");

