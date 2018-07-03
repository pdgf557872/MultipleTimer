function timer() {
                
                rowCount = $('#tab_logic tr').length - 1;
                // var h = parseInt(document.getElementById("hours1").value);
                // var m = parseInt(document.getElementById("minutes1").value);
                // var s = parseInt(document.getElementById("seconds1").value);
                var h = $(".countHours").eq(1).val()
                var m = $(".countMinutes").eq(1).val()
                var s = $(".countSeconds").eq(1).val()

                

                var current = (h * 3600) + (m * 60) + s; //the current time left in seconds
                if (current > 0 && trigger == true) {
                    //take one second away, and rerender the seconds split into d, h, m, and s in the html, which you will reuse next time timer() runs
                    if (s > 0) {
                        $(".countSeconds").val(s - 1)
                        $(".countMinutes").val(m);
                        $(".countHours").val(h);
                    }
                    else if (m <= 0) {
                        h--;
                        m = 59;
                        s = 5;
                        $(".countSeconds").val(s);
                        $(".countMinutes").val(m);
                        $(".countHours").val(h);
                    }
                    else {
                        m--;
                        s = 5;
                        $(".countSeconds").val(s);
                        $(".countMinutes").val(m);
                    }
                }

                else {
                    //expired
                }
                if ($(".countHours").val(h) == 0) {
                    clearInterval(timer1); //Time's up clearInterval
                }