<?php

header("Content-Type: text/Calendar");
header("Content-Disposition: inline; filename=\"myevents.ics\"");

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



