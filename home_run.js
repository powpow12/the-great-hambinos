
	//homerun
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData1 = {
	labels : ["G0","G54","G108","G162"],
	datasets : [
	{
		label: "Last Three Years",
		fillColor : "rgba(220,220,220,0)",
		strokeColor : "rgba(9,116,135,1)",
		pointColor : "rgba(9,116,135,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(9,116,135,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0, 12, 26, 35]
	},
	{
		label: "Year to date",
		fillColor : "rgba(227,14,31, 0)",
		strokeColor : "rgba(227,14,31,1)",
		pointColor : "rgba(227,14,31,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0,10,10]
	},
	{
		label: "Projected",
		fillColor : " rgba(220,200,139,0.2)",
		strokeColor : "rgba(220,200,139, 1)",
		pointColor : "rgba(220,200,139, 1)",
		pointStrokeColor : "#fff",
		// pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,200,139, 1)",
		data : [0,6,13,23]
	}
	]
}

	// }
	// Chart.defaults.global.responsive = true;
	window.onload = function(){
		var ctx = document.getElementById("chart1").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
		});
	
	}

	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData2 = {
	labels : ["G0","G54","G108","G162"],
	datasets : [
	{
		label: "Last Three Years",
		fillColor : "rgba(220,220,220,0)",
		strokeColor : "rgba(9,116,135,1)",
		pointColor : "rgba(9,116,135,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(9,116,135,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0, 12, 26, 35]
	},
	{
		label: "Year to date",
		fillColor : "rgba(227,14,31, 0)",
		strokeColor : "rgba(227,14,31,1)",
		pointColor : "rgba(227,14,31,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0,10,10]
	},
	{
		label: "Projected",
		fillColor : " rgba(220,200,139,0.2)",
		strokeColor : "rgba(220,200,139, 1)",
		pointColor : "rgba(220,200,139, 1)",
		pointStrokeColor : "#fff",
		// pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,200,139, 1)",
		data : [0,6,13,23]
	}
	]

	}

	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData3 = {
	labels : ["G0","G54","G108","G162"],
	datasets : [
	{
		label: "Last Three Years",
		fillColor : "rgba(220,220,220,0)",
		strokeColor : "rgba(9,116,135,1)",
		pointColor : "rgba(9,116,135,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(9,116,135,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0, 2, 9, 16],
	},
	{
		label: "Year to date",
		fillColor : "rgba(227,14,31, 0)",
		strokeColor : "rgba(227,14,31,1)",
		pointColor : "rgba(227,14,31,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0,10,10]
	},
	{
		label: "Projected",
		fillColor : " rgba(220,200,139,0.2)",
		strokeColor : "rgba(220,200,139, 1)",
		pointColor : "rgba(220,200,139, 1)",
		pointStrokeColor : "#fff",
		// pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,200,139, 1)",
		data : [0,3,7,15]
	}
	]

	}

	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData3 = {
	labels : ["G0","G54","G108","G162"],
	datasets : [
	{
		label: "Last Three Years",
		fillColor : "rgba(220,220,220,0)",
		strokeColor : "rgba(9,116,135,1)",
		pointColor : "rgba(9,116,135,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(9,116,135,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0, 3, 15, 17],
	},
	{
		label: "Year to date",
		fillColor : "rgba(227,14,31, 0)",
		strokeColor : "rgba(227,14,31,1)",
		pointColor : "rgba(227,14,31,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0,10,10]
	},
	{
		label: "Projected",
		fillColor : " rgba(220,200,139,0.2)",
		strokeColor : "rgba(220,200,139, 1)",
		pointColor : "rgba(220,200,139, 1)",
		pointStrokeColor : "#fff",
		// pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,200,139, 1)",
		data : [0,5,9,19]
	}
	]

	}
		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData4 = {
	labels : ["G0","G54","G108","G162"],
	datasets : [
	{
		label: "Last Three Years",
		fillColor : "rgba(220,220,220,0)",
		strokeColor : "rgba(9,116,135,1)",
		pointColor : "rgba(9,116,135,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(9,116,135,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0, 3, 15, 17],
	},
	{
		label: "Year to date",
		fillColor : "rgba(227,14,31, 0)",
		strokeColor : "rgba(227,14,31,1)",
		pointColor : "rgba(227,14,31,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0,10,10]
	},
	{
		label: "Projected",
		fillColor : " rgba(220,200,139,0.2)",
		strokeColor : "rgba(220,200,139, 1)",
		pointColor : "rgba(220,200,139, 1)",
		pointStrokeColor : "#fff",
		// pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,200,139, 1)",
		data : [0,5,9,19]
	}
	]
}

	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData5 = {
	labels : ["G0","G54","G108","G162"],
	datasets : [
	{
		label: "Last Three Years",
		fillColor : "rgba(220,220,220,0)",
		strokeColor : "rgba(9,116,135,1)",
		pointColor : "rgba(9,116,135,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(9,116,135,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0, 3, 15, 17],
	},
	{
		label: "Year to date",
		fillColor : "rgba(227,14,31, 0)",
		strokeColor : "rgba(227,14,31,1)",
		pointColor : "rgba(227,14,31,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0,10,10]
	},
	{
		label: "Projected",
		fillColor : " rgba(220,200,139,0.2)",
		strokeColor : "rgba(220,200,139, 1)",
		pointColor : "rgba(220,200,139, 1)",
		pointStrokeColor : "#fff",
		// pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,200,139, 1)",
		data : [0,5,9,19]
	}
	]
}
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData6 = {
	labels : ["G0","G54","G108","G162"],
	datasets : [
	{
		label: "Last Three Years",
		fillColor : "rgba(220,220,220,0)",
		strokeColor : "rgba(9,116,135,1)",
		pointColor : "rgba(9,116,135,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(9,116,135,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0, 3, 15, 17],
	},
	{
		label: "Year to date",
		fillColor : "rgba(227,14,31, 0)",
		strokeColor : "rgba(227,14,31,1)",
		pointColor : "rgba(227,14,31,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		// data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		data : [0,10,10]
	},
	{
		label: "Projected",
		fillColor : " rgba(220,200,139,0.2)",
		strokeColor : "rgba(220,200,139, 1)",
		pointColor : "rgba(220,200,139, 1)",
		pointStrokeColor : "#fff",
		// pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,200,139, 1)",
		data : [0,5,9,19]
	}
	]
	}

	// Chart.defaults.global.responsive = true;
	window.onload = function(){
		var ctx = document.getElementById("chart1").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData1, {
		responsive: true
		});
		var ctx2 = document.getElementById("chart2").getContext("2d");
		window.myLine = new Chart(ctx2).Line(lineChartData2, {
		responsive: true
		});
		var ctx3 = document.getElementById("chart3").getContext("2d");
		window.myLine = new Chart(ctx3).Line(lineChartData3, {
		responsive: true
		});
		var ctx4 = document.getElementById("chart4").getContext("2d");
		window.myLine = new Chart(ctx4).Line(lineChartData3, {
		responsive: true
		});
		var ctx4 = document.getElementById("chart4").getContext("2d");
		window.myLine = new Chart(ctx4).Line(lineChartData3, {
		responsive: true
		});
		var ctx5 = document.getElementById("chart5").getContext("2d");
		window.myLine = new Chart(ctx5).Line(lineChartData3, {
		responsive: true
		});
		var ctx6 = document.getElementById("chart6").getContext("2d");
		window.myLine = new Chart(ctx6).Line(lineChartData3, {
		responsive: true
		});
	
	}
