<?php

$UID = 'http://www.icalmaker.com/event/85709fce-2655-40bc-b90f-29efe88cb8f9';
$DTSTART = '20171216T050000Z';
$DTEND = '20171220T090000Z';
$SUMMARY = 'hello world';

header("Content-Type: text/Calendar");
header("Content-Disposition: inline");
echo "BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
BEGIN:VEVENT
UID:$UID
DTSTAMP:20171206T164709Z
DTSTART:$DTSTART
DTEND:$DTEND
SUMMARY:$SUMMARY
END:VEVENT
END:VCALENDAR";
?>