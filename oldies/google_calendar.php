<?php 

$newcss = 'google_calendar.css';
//$f = file_get_contents('https://calendar.google.com/calendar/embed?src=59nv6e2sgh8ohets0c0vca0eac%40group.calendar.google.com&ctz=Europe/Rome');

$f = file_get_contents($_GET["url"]);

$f = str_replace('//calendar.google.com','https://calendar.google.com',$f);
$f = str_replace('/calendar/_','https://calendar.google.com/calendar/_',$f);
$f = str_replace('<script>function _onload()', '<script>function _onload()', $f );

echo $f;

?>