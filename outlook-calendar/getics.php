<?php
header("Content-Type: text/Calendar");
header("Content-Disposition: inline; filename=\"myevents.ics\"");
echo "BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
BEGIN:VEVENT
UID:" . md5(uniqid(mt_rand(), true)) . "@yourhost.test
DTSTAMP:" . gmdate('Ymd').'T'. gmdate('His') . "Z
DTSTART:20110925T170000Z
DTEND:20110928T035959Z
SUMMARY:Bastille Day Party
END:VEVENT
BEGIN:VEVENT
UID:" . md5(uniqid(mt_rand(), true)) . "@yourhost.test
DTSTAMP:" . gmdate('Ymd').'T'. gmdate('His') . "Z
DTSTART:20110929T170000Z
DTEND:20110930T035959Z
SUMMARY:Camping Trip
END:VEVENT
BEGIN:VEVENT
UID:" . md5(uniqid(mt_rand(), true)) . "@yourhost.test
DTSTAMP:" . gmdate('Ymd').'T'. gmdate('His') . "Z
DTSTART:20110914T170000Z
DTEND:20110915T035959Z
SUMMARY:Testing new Event
END:VEVENT
END:VCALENDAR";
?>