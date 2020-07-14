<?php 

    $username = $_POST['username'];
    $email = $_POST['email'];


    if(!empty($username) || !empty($email) ) {
        $host = "qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
        $dbUsername = "obuaewm0590j8zbw";
        $dbPassword = "f0ckhi37dpxqun36";
        $dbname = "meapp";

        // create a connection

        $conn  = new mysqli($host, $dbUsername, $dbPassword, $dbname);

        if (mysqli_connect_error()) {
            die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
        } else {
            $SELECT = "SELECT email From registration Where email = ? Limit 1";
            $INSERT = "INSERT Into registration (email, username) values(?, ?)";

            // prepare statement

            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param('s',  $email);
            $stmt->execute();
            $stmt->bind_result($email);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if($rnum==0) {
                $stmt->close();

                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("ss", $email, $username);
                $stmt->execute();

                echo "New record successfully";
            } else {
                echo "Someone already registered using this email";
            }

            $stmt->close();
            $conn->close();
            
        }
    } else {
        echo "All field are required";
        die();
    }
?>
