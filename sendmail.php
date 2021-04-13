<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exeption.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // від кого лист
    $mail->setForm('info@fls.guru', 'Hello world');
    // кому відправити
    $mail->addAddress('nutter4you.goodslow@gmail.com');
    // тема листа
    $mail->Subject = 'Hello, its world!';

    // тіло листа
    $body = '<h1>This is first letter</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>'
    }

    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>Telephone:</strong> '.$_POST['tel'].'</p>'
    }

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>'
    }
    
    // додаємо файл
    if(!empty($_POST['image']['tmp_name'])){
        // шлях завантаження файлу
        $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
        // завантажуємо файл
        if(copy($_FILES['image']['tmp_name'], $filePath)) {
            $fileAttach = $filePath;
            $body.='<p><strong>Photo:</strong></p>';
            $mail->addAttachment($fileAttach);
        }
    }
    $mail->Body = $body;

    //відправляємо
    if($mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Data sent!';
    }

    $responce = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($responce);
    ?>



    

    // nutter4you.goodslow@gmail.com 

