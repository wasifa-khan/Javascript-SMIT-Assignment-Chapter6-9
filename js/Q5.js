
    // Take input from the user
    const subject1 = prompt("Enter Subject 1 Name:");
    const subject2 = prompt("Enter Subject 2 Name:");
    const subject3 = prompt("Enter Subject 3 Name:");
    const totalMarks = 100;

    const obtainedMarks1 = parseInt(prompt("Enter Obtained Marks for Subject 1:"));
    const obtainedMarks2 = parseInt(prompt("Enter Obtained Marks for Subject 2:"));
    const obtainedMarks3 = parseInt(prompt("Enter Obtained Marks for Subject 3:"));

    // Calculate the total marks and percentage
    const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    const percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

    document.write("<h2>Result</h2>");
    document.write("<table>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
    document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
    document.write("<tr><th colspan='3'>Percentage: " + percentage + "%</th></tr>");
    document.write("</table>");

