function ics_content() {
    /*
     * Loading meeting details
     */
    $program_name = $this->programName();
    $adb_meeting_link = $this->adbMeetingPathUrl();

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
DTSTART;TZID="Greenwich Time":' . $this->dateValue('Ymd', 'Atlantic/Reykjavik') . 'T' . $this->dateValue('His', 'Atlantic/Reykjavik') . 'Z
DTEND;TZID="Greenwich Time":' . $this->endTimeValue('Ymd', 'Atlantic/Reykjavik') . 'T' . $this->endTimeValue('His', 'Atlantic/Reykjavik') . 'Z
SUMMARY;LANGUAGE=en-us:'. $program_name.'
LOCATION: Adobe Connect meeting
DESCRIPTION:Topic: ' . $program_name . '\n\nSpeaker: ' . $this->speakerName() . '\n\nRepresentative: '. $this->repName().'\n\nDate: '. $this->dateValue('Y-m-d H:i:s') . '\n\nMeeting Link: ' . $this->adbMeetingPathUrl() . '\n\nToll Free Number: 1.866.512.0904' . '\n\nPass-Code: 9256573' . '
X-ALT-DESC;FMTTYPE=text/html:<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2//EN"><HTML><HEAD><TITLE>BI - ' . $program_name . '</TITLE></HEAD><BODY>Topic: ' . $program_name . '<br/>Speaker: ' . $this->speakerName() . '<br/>Representative: ' . $this->repName() . '<br/>Date: ' . $this->dateValue('Y-m-d H:i:s') . '<br/>Meeting Link:' . $this->adbMeetingPathUrl() . '<br/>Toll Free Number: 1.866.512.0904' . '<br/>Pass-Code: 9256573</BODY></HTML>
BEGIN:VALARM
TRIGGER:-PT24H0M
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR';

    return $ical;
  }
