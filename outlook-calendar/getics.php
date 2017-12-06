<?php

// $DTSTART = '20171225T050000Z';
// $DTEND = '20171225T090000Z';
// $SUMMARY = 'hellcnew5ss5 world';
// $DTSTAMP = '20171206T164709Z';

header("Content-Type: text/Calendar");
header("Content-Disposition: inline; filename=\"myevents.ics\"");
// echo "BEGIN:VCALENDAR
// VERSION:2.0
// PRODID:-//hacksw/handcal//NONSGML v1.0//EN
// BEGIN:VEVENT
// DTSTART:$DTSTART
// DTEND:$DTEND
// SUMMARY:$SUMMARY
// DTSTAMP:$DTSTAMP
// END:VEVENT
// END:VCALENDAR";




function ics_content() {
    /*
     * Loading meeting details
     */
    $program_name = 'programNameeee';
    $DTSTART = '20171223T050000Z';
    $DTEND = '20171223T090000Z';

/**
 * ical element
 * it can not indent space from left
 */
$ical = 'BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Microsoft Corporation//EN
CALSCALE:GREGORIAN
X-WR-TIMEZONE;VALUE=TEXT:US/Pacific
BEGIN:VEVENT
CLASS:PUBLIC
DTSTART;TZID="Greenwich Time":' . $DTSTART .'
DTEND;TZID="Greenwich Time":' . $DTEND .'
SUMMARY;LANGUAGE=en-us:' . $program_name.'
LOCATION: Adobe Connect meeting
DESCRIPTION:""
BEGIN:VALARM
TRIGGER:-PT24H0M
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR';

    return $ical;
  }

$cc = ics_content();
echo $cc;



