<!DOCTYPE html>
<html>
<body>
<h1> Welcome to Search </h1>
<?php
$servername = "tethys.cse.buffalo.edu";
$username = "rakshitd";
$password = "50214053";
$database = "cse442_542_2020_fall_teama_db";
$pdo = new PDO('mysql:host=$servername;port=3306;dbname=$database',
                $username, $password);
            $stmt = $pdo->query("SELECT name, address, phone_number FROM restaurant_info");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo '<table border="1">'."\n";
            foreach ( $rows as $row ) {
                echo "<tr><td>";
                echo($row['name']);
                echo("</td><td>");
                echo($row['address']);
                echo("</td><td>");
                echo($row['phone_number']);
                echo("</td></tr>\n");

            }

            echo "</table>\n";
            echo("Connection successful");
?>
</body>
</html>
