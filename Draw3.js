/*///////////////////////////////////////////////////////////  
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3() {

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0, 1, 2, 12, 13, 23, 33, 34, 35, 40, 47];
	/*Show and run the progressBar*/
	runProgressBar(time = 550 * (arcDelay[(arcDelay.length - 1)] + 1));

	/*Fill in the other arcs*/
	svg.selectAll("g.group").select("path")
		.transition().delay(function (d, i) {
			return 700 * arcDelay[i];
		}).duration(800)
		.attrTween("d", function (d) {
			if (d.index != 0) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function (t) {
					d.endAngle = i(t);
					return arc(d);
				}
			}
		});

	/*Make the other strokes black as well*/
	svg.selectAll("g.group")
		.transition().delay(function (d, i) {
			return 700 * arcDelay[i];
		}).duration(700)
		.selectAll("g").selectAll("line").style("stroke", "#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().delay(function (d, i) {
			return 700 * arcDelay[i];
		}).duration(700)
		.selectAll("g").selectAll("text").style("opacity", 1);
	/*And the Names of each Arc*/
	svg.selectAll("g.group")
		.transition().delay(function (d, i) {
			return 700 * arcDelay[i];
		}).duration(700)
		.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	/*HTC*/
	changeTopText(newText = "Stationary and Books is th first thing that peolpe where addicate on.",
		loc = 6 / 2, delayDisappear = 0, delayAppear = arcDelay[2]);
	/*LG*/
	changeTopText(newText = "Electronic has 40% od male.",
		loc = 6 / 2, delayDisappear = arcDelay[3], delayAppear = arcDelay[4]);
	/*100%*/
	changeTopText(newText = "Together that sums up to 100%",
		loc = 1 / 2, delayDisappear = (arcDelay[9] - 1), delayAppear = arcDelay[9]);
	/*Chord intro*/
	changeTopText(newText = "This circle shows how the male and female assing to each category. ",
		loc = 8 / 2, delayDisappear = (arcDelay[10] - 1), delayAppear = arcDelay[10], finalText = true);

	/*Change the text of the bottom section inside the circle accordingly*/
	/*Huawei
	changeBottomText(newText = "Books take 30%",
		loc = -2 / 2, delayDisappear = 0, delayAppear = arcDelay[2]);
	*//*Nokia*/
	changeBottomText(newText = "clothes are 30% most of them female",
		loc = -1 / 2, delayDisappear = arcDelay[3], delayAppear = arcDelay[4]);

	/*Chord intro*/
	changeBottomText(newText = "Now we're going to look at how these respondents flowed from their category",
		loc = 1 / 2, delayDisappear = (arcDelay[9] - 1), delayAppear = arcDelay[10]);

}; /*Draw3*/