    /*//////////////////////////////////////////////////////////	
    //Introduction
    ///////////////////////////////////////////////////////////*/
    function Draw1() {

    	/*First disable click event on clicker button*/
    	stopClicker();

    	/*Show and run the progressBar*/
    	runProgressBar(time = 100 * 11);

    	changeTopText(newText = "Here are some data about Black Friday " +
    		"and we will see the relashtion between these category.",
    		loc = 4 / 2, delayDisappear = 0, delayAppear = 1);

    	changeTopText(newText = "In the next few steps we would like to introduce you to the flows of people between the category ",
    		loc = 8 / 2, delayDisappear = 9, delayAppear = 10, finalText = true);

    	changeBottomText(newText = "Let's start by drawing out the division of the 300 respondents, that have had at least 1 thing to buy, among the biggest 5 category ",
    		loc = 1 / 2, delayDisappear = 0, delayAppear = 10);

    	//Remove arcs again
    	d3.selectAll(".arc")
    		.transition().delay(9 * 700).duration(1000)
    		.style("opacity", 0)
    		.each("end", function () {
    			d3.selectAll(".arc").remove();
    		});

    }; /*Draw1*/