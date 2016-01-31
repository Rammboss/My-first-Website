$(document).ready(function(){
	getStats();
});


setInterval(function(){ 
	getStats();
}, 30000);

function getStats(){
	var xhr = null;
	try {
		xhr = new XMLHttpRequest();
	} catch(e) {
		alert("Statistik Server nicht erreichbar");
	}
	if (xhr) {
		xhr.open('GET', 'https://arsnova.eu/api/statistics/', true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				var result = JSON.parse(xhr.responseText); 
                window.onload(result);
			}
		};
		xhr.send(null);
	}
}
    
window.onload = function(result){
      var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Arsnova.eu Stats",
                fontFamily: "Verdana",
                fontColor: "Peru",
                fontSize: 28

            },
            animationEnabled: true,
            axisY: {
                tickThickness: 0,
                lineThickness: 0,
                valueFormatString: " ",
                gridThickness: 0                    
            },
            axisX: {
                tickThickness: 0,
                lineThickness: 0,
                labelFontSize: 16,
                labelFontColor: "Peru"

            },
            data: [
            {
                indexLabelFontSize: 20,
                toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                indexLabelPlacement: "outside",
                indexLabelFontColor: "black",
                indexLabelFontWeight: 600,
                indexLabelFontFamily: "Verdana",
                color: "#62C9C3",
                type: "bar",
                dataPoints: [
                    { y: result.closedSessions, label: "Closed Sessions", indexLabel: result.closedSessions + ""},
                    { y: result.answers, label: "Answers", indexLabel: result.answers + ""},
                    { y: result.lectureQuestions, label: "lectureQuestions", indexLabel:result.lectureQuestions + "" },
                    { y: result.preparationQuestions, label: "preparationQuestions", indexLabel: result.preparationQuestions + "" },
                    { y: result.openSessions, label: "openSessions", indexLabel: result.openSessions + "" },
                    { y: result.creators, label: "creators", indexLabel: result.creators + "" },
                    { y: result.activeUsers, label: "activeUsers", indexLabel: result.activeUsers + "" },
                    { y: result.activeStudents, label: "active Students", indexLabel: result.activeStudents + ""},
                    { y: result.loggedinUsers, label: "logged in Users", indexLabel: result.loggedinUsers + "" },
                    { y: result.interposedQuestions, label: "interposed Questions", indexLabel: result.interposedQuestions + ""},
                    { y: result.conceptQuestions, label: "concept Questions", indexLabel: result.conceptQuestions + ""},
                    { y: result.questions, label: "Questions", indexLabel: result.questions + ""}, { y: result.sessions, label: "Sessions", indexLabel: result.sessions + ""}
                   
                ]
            }
            ]
        });

        chart.render();  
  }
  