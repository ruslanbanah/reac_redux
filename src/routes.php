<?php
require 'db.php';

// Routes

$app->get('/index/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->get('/boards','getBoards');
$app->get('/boards/[{id}]','getBoard');
$app->post('/boards','insertBoard');

function getBoards($request, $response, $args) {
    $sql = "SELECT * FROM board ORDER BY createAt DESC";
    try {
        $db = getDB();
        $stmt = $db->query($sql);
        $boards = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo '{"data": ' . json_encode($boards) . '}';
    } catch(PDOException $e) {

        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function getBoard($request, $response, $args) {
    $sql = "SELECT * FROM board WHERE id=:id";
    try {
        $db = getDB();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("id",  $args['id']);
        $stmt->execute();
        $board = $stmt->fetch(PDO::FETCH_OBJ);
        $db = null;
        echo '{"data": ' . json_encode($board) . '}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function insertBoard($request, $response, $args) {

}