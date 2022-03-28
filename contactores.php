<?php
$nombre = $_POST["first_name"];
$lastname = $_POST["last_name"];
$telefono = $_POST["telefono"];
$ticket = $_POST["ticket"];
$headers = "From: Resvera Ojo de Agua" . "\r\n" .
    "CC: formulariosftk@gmail.com";
$body =
    "Nombre: ".$nombre."
    Apellido: ".$lastname."
    Telefono: ".$telefono."
    Ticket: ".$ticket;

    try {
        
    mail("formulariosftk@gmail.com", "Resvera Ojo de Agua", $body, $headers);

    echo '<script>
    alert("¡Gracias! Tu registro esta confirmado. Te contactaremos para agendar tu cita en Resvera.");
    window.history.go(-1);
    </script>';
    
    } catch (Exception $e) {
        echo '<script>
        alert("Ocurrió un error al enviar los datos");
        window.history.go(-1);
        </script>';
    }

?> 