var doc = new jsPDF();
var downPdf = document.getElementById("btn");
var xPosition = 14;
var yPosition = 54;
var ySpaceDouble = 10;
var ySpaveSingle = 6;
var ySpaceBetweenEachDiv = 14;
var sideLineXpostion = 142;
var sideTextXpostion = 142 + 4;
var sideTextContent = ['The Multi-disciplinary', 'Interstitial Lung', 'Disease Discussions', 'with Experts Remotely', '(MILDDER) Rounds is', 'a self-approved group', 'learning activity', '(Section 1) as defined', 'by the Maintenance of', 'Certification Program', 'of the Royal College of', 'Physicians and', 'Surgeons of Canada.'];

var titleText = [
[xPosition + 16, 20, 'CONFIRMATION OF ATTENDANCE TO Multi-disciplinary Interstitial Lung Disease ', 'bold', 10],
[xPosition + 40, 24, 'Discussions with Experts Remotely (MILDDER) Rounds', 'bold', 10],
[xPosition + 36, 28,'(Accredited activity under the Maintenance of Certification Program of the RCPSC)','normal', 8]
];

var mainContent = [
[xPosition, yPosition, 'DATE:', 'bold', 8],
[xPosition, yPosition, 'To:', 'bold', 8],
[xPosition, yPosition, 'FROM: ', 'bold', 8],
// [xPosition + 6, yPosition, ' Dr. Shane Shapera:', 'normal', 8],
[xPosition + 10, yPosition, 'Chair of Multi-disciplinary Interstitial Lung Disease Discussions with Experts Remotely Planning Committee', 'normal', 8],
[xPosition, yPosition + ySpaveSingle, 'RE: Attendance at MILDDER Rounds', 'bold', 10],
[xPosition, yPosition + ySpaveSingle, 'Dear Dr. (full name): ', 'normal', 8],
[xPosition, yPosition + ySpaveSingle, 'Our records indicate that you attended ______ hour(s) of MILDDER Rounds from (start date) to (end date)', 'normal', 'normal', 8],
[xPosition, yPosition + ySpaveSingle, 'Please keep a copy of this letter in the event you are selected to participate in the Credit Validation Program as proof of', 'normal', 8],
[xPosition, yPosition + ySpaveSingle, 'attendance.', 'normal', 8],
[xPosition, yPosition + ySpaveSingle, '“The Multi-disciplinary Interstitial Lung Disease Discussions with Experts Remotely Rounds is a self-approved group learning', 'italic', 8],
[xPosition, yPosition + ySpaveSingle, 'Canada”', 'italic', 8],
[xPosition, yPosition + ySpaveSingle, 'Attendance records for MILDDER Rounds are based on sign-in sheets, and completing and submitting an evaluation form. ', 'normal', 8],
[xPosition, yPosition + ySpaveSingle, 'Yours sincerely, ', 'normal', 8],
[xPosition, yPosition + ySpaveSingle * 2, 'Signed: ________________________________ ', 'normal', 8],
[xPosition + 10, yPosition + ySpaveSingle * 2, 'Dr. Shane Shapera', 'normal', 8],
[xPosition + 10, yPosition + ySpaveSingle * 2, 'Chair of the MILDDER Planning Committee ', 'normal', 8],
[xPosition + 10, yPosition + ySpaveSingle * 2, 'Toronto General Hospita', 'normal', 8],
[xPosition + 10, yPosition + ySpaveSingle * 2, 'Department of Respirology', 'normal', 8],
[xPosition + 10, yPosition + ySpaveSingle * 2, 'Tel.: 416-340-4174', 'normal', 8],
[xPosition + 10, yPosition + ySpaveSingle * 2, 'E-mail: shane.shapera@uhn.ca', 'normal', 8]
];


downPdf.onclick = function() {


  doc.setTextColor(0,0,0);
  doc.setDrawColor(0,0,0);
  doc.setFontType("bold");

  for (var i = 0; i < titleText.length; i++) {
      doc.setFontSize(titleText[i][4]);
      doc.setFontType(titleText[i][3]);
    doc.text(titleText[i][0], titleText[i][1], titleText[i][2]);
  }


  for (var i = 0; i < mainContent.length; i++) {
     doc.setFontSize(mainContent[i][4]);
    doc.setFontType(mainContent[i][3]);
    doc.text(mainContent[i][0], mainContent[i][1] + ySpaveSingle * i, mainContent[i][2]);
  }

  doc.setFontSize(8);
  doc.setFontType("normal");
  doc.text(xPosition + 10, yPosition + ySpaveSingle * 2, ' Dr. Shane Shapera:');
  doc.setLineWidth(0.2);
  doc.line(xPosition + 16, 21, xPosition + 152, 21);
  doc.line(xPosition + 40, 25, xPosition + 134, 25);
  doc.line(xPosition, yPosition + ySpaveSingle * 5 + 1, xPosition + 62, yPosition + ySpaveSingle * 5 + 1);

  doc.save('sample-file.pdf');

}