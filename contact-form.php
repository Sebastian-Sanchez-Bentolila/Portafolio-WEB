<?php

if (isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['mensaje'])) {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $para = "sebastiansb3004@gmail.com";
    $asunto = "Mensaje desde el portafolio web de contacto de Sebastian Sanchez Bentolila";
    $cuerpo = "Nombre: " . $nombre . "\n\nCorreo Electrónico: " . $email . "\n\nMensaje:\n" . $mensaje;

    mail($para, $asunto, $cuerpo);

    echo "<script>alert('Mensaje enviado correctamente');</script>";
} else {
    echo "<script>alert('Error al enviar el mensaje. Intente nuevamente más tarde.');</script>";
}