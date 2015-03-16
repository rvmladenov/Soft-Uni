var PollApp = (function(){

    // Caches the correct answers
    var correctAnswers = {};
    var totalTimeInSeconds = 121;
    var timer;

    var outputData = function(dataToProcess) {
        var output = '<div class="row">';
        for(var i = 0; i < dataToProcess.length; i++) {
            var dataRow = dataToProcess[i];
            var dataRowID = dataRow.id;

            correctAnswers[dataRowID] = dataRow.correctAnswers;

            output += '<div class="col-md-6 col-sm-6"><div class="panel panel-info" data-id="' + dataRowID + '">';
            output += '<h4 class="panel-heading">' + dataRow.question + '</h4><div class="panel-body"><ul class="btn-group list-unstyled">';

            for(var k in dataRow.answers) {

                var answerRow = dataRow.answers[k];
                var objectKey = Object.keys(answerRow);
                var objectValue = answerRow[Object.keys(answerRow)]
                output += '<li class="radio"><label><input type="radio" name="group_' + dataRowID + ' value="' + objectKey + '"">' + objectValue + '</label></li>';

            }
            output += '</ul></div></div></div>';

            if(i != 0 && (i-1) % 2 == 0) {
                output += '</div><div class="row">';
            }
        }
        output += '</div>';

        $("#wrapper").html(output);
    }

    var submitRresults = function() {
        alert('submitRresults');
    }

    var stopTimer = function () {
        clearInterval(timer);
    };

    var __self = function PollApp(dataToProcess) {

        // Will create and output the questions and answers
        outputData(dataToProcess);
    }

    __self.prototype.startTimer = function() {
        var minutes = $("#timerMinutes");
        minutes.html(Math.round(totalTimeInSeconds / 60));
        var seconds = $("#timerSeconds");
        seconds.html(totalTimeInSeconds % 60);

        timer = setInterval(function () {

            if (totalTimeInSeconds == 0) {
                stopTimer();
            } else {
                --totalTimeInSeconds;

                var minutesLeft = Math.floor(totalTimeInSeconds / 60);
                var secondLeft = totalTimeInSeconds % 60;
                minutes.html(minutesLeft);
                seconds.html(secondLeft);
            }
        }, 1000);
    };

    __self.prototype.collectDataAndStopTimer = function() {
        stopTimer();

        // TODO: finish this code

    };

    return __self;
})();























