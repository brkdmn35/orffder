<?php
if (isset($_POST)){
    function mailgonder($kimden,$kime,$konu,$mesaj){
        require "class.phpmailer.php";
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->From     = $kimden;
        $mail->Sender   = $kimden;
        $mail->FromName = "İletişim formu";  //göndericinin adı
        $mail->Host     = "mail.basaranevdeneve.com"; //smtp nin kullanacağı mail sunucusu
        $mail->SMTPAuth = true;
        $mail->Username = "info@basaranevdeneve.com";  //mail hesabı kullanıcı adı
        $mail->Password = "Basaran3435";  //mail hesabına ait şifre
        $mail->Port = "587"; //smtp nin kullanacağı giden mail sunucu portu
        $mail->CharSet = "utf-8";
        $mail->WordWrap = 50;
        $mail->IsHTML(true);
        $mail->Subject  = $konu;

        $body = $mesaj;

        $textBody = strip_tags($mesaj);
        $mail->Body = $body;
        $mail->AltBody = $textBody;
        $mail->AddAddress($kime);  //mailin gönderileceği mail adresi
        //$mail->AddAddress("mail@mail.com");  //maillerin gideceği ek adresler (varsa)
        return ($mail->Send())?true:false;
        $mail->ClearAddresses();
        $mail->ClearAttachments();
    }
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $message = "";
    if(!isset($_POST["message"])){
        $message ="<strong>". $name."</strong> Sizden <strong>".$phone."</strong> Numarası Üzerinden İletişime Geçmenizi Bekliyor";
    }else{
        $message = "<strong>".$name.'</strong> Sizden <strong>--'.$_POST["message"]."-- </strong>Mesajı İle <strong>".$phone."</strong> Numarası Üzerinden İletişim Talebinde Bulundu";
    }

    echo mailgonder("info@basaranevdeneve.com", "info@basaranevdeneve.com", "İletişim Talebi", $message);
}

?>