var doc = new jsPDF();
var downPdf = document.getElementById("btn");
var xPosition = 14;
var yPosition = 54 + 20;
var ySpaceDouble = 10;
var ySpaveSingle = 6;
var ySpaceBetweenEachDiv = 14;
var sideLineXpostion = 142;
var sideTextXpostion = 142 + 4;
var sideTextContent = ['The Multi-disciplinary', 'Interstitial Lung', 'Disease Discussions', 'with Experts Remotely', '(MILDDER) Rounds is', 'a self-approved group', 'learning activity', '(Section 1) as defined', 'by the Maintenance of', 'Certification Program', 'of the Royal College of', 'Physicians and', 'Surgeons of Canada.'];

var titleText = [
[xPosition + 16, 40, 'CONFIRMATION OF ATTENDANCE TO Multi-disciplinary Interstitial Lung Disease ', 'bold', 10],
[xPosition + 40, 44, 'Discussions with Experts Remotely (MILDDER) Rounds', 'bold', 10],
[xPosition + 36, 48,'(Accredited activity under the Maintenance of Certification Program of the RCPSC)','normal', 8]
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

  var imgData = 'data:image/jpeg;base64,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';
  doc.addImage(imgData, 'JPEG', 8, 8, 84, 18);


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
  doc.line(xPosition + 16, 41, xPosition + 152, 41);
  doc.line(xPosition + 40, 45, xPosition + 134, 45);
  doc.line(xPosition, yPosition + ySpaveSingle * 5 + 1, xPosition + 62, yPosition + ySpaveSingle * 5 + 1);

  doc.save('sample-file.pdf');

}