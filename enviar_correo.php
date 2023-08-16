<?php //PHP para enviar correos a mi casilla de mail
if (isset($_POST['enviar'])) {
    $email_to = "sebastiansb3004@gmail.com"; 
    $email_subject = "Nuevo mensaje";

    $email_from = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $email_message = "Detalles del formulario de contacto:\n\n";
    $email_message .= "Correo electrónico: " . $email_from . "\n";
    $email_message .= "Mensaje:\n" . $mensaje;

    // Envía el correo electrónico
    $headers = "From: $email_from\r\n";
    mail($email_to, $email_subject, $email_message, $headers);

    $mensaje_respuesta = "¡Gracias por tu mensaje! Te responderé pronto.";
} else {
    $mensaje_respuesta = "";
}
?>