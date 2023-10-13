
(function ($) {
	"use strict";
    
/*-------------------------------------------
    Home 3, Home 4 Page Graph
--------------------------------------------- */  
    window.onload = function () {
        var chart2 = new CanvasJS.Chart("chartContainer",
        {
            animationEnabled: true,   
            axisY:{
            gridThickness: 1,
                gridDashType: "solid"
            }, 
            axisX:{
            gridThickness: 0,
                gridDashType: "dash"
            },            
            data: [{   
                fillOpacity: .85,   
                type: "splineArea",
                color: "#707070",
                labelFontSize:0,
                markerSize: 7,
                markerColor: "#292828",
                markerBorderColor : "#ccc", //change color here
                markerBorderThickness: 1,
                showInLegend: false,
                risingColor: "#DD7E86",
                dataPoints: [
				{ x: 0, y: 0},
				{ x: 10, y: 10 },
				{ x: 20, y: 8},
				{ x: 30, y: 20 },
				{ x: 40, y: 15 },
				{ x: 50, y: 25 },
				{ x: 60, y: 35 },
				{ x: 70, y: 0 },
			]
            },
            {   
                fillOpacity: .85,      
                type: "splineArea",
                color: "#4f4f4f",
                labelFontSize:0,
                markerSize: 7,
                markerColor: "#292828",
                markerBorderColor : "#ccc", //change color here
                markerBorderThickness: 1,
                showInLegend: false,
                dataPoints: [
                { x: 0, y: 0},
				{ x: 10, y: 7 },
				{ x: 20, y: 15},
				{ x: 30, y: 10 },
				{ x: 40, y: 20 },
				{ x: 50, y: 12 },
				{ x: 60, y: 30 },
				{ x: 70, y: 0 },    
                ]
            }]
        });
        chart2.render();
    };
 
})(jQuery);  