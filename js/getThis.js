                var selectID
                var nowRow
                var ii
                

$(this).click(function() {
                    $('#tab_logic tr').click(function(e) {
                        selectID = $("#debug").text(this.id)
                        nowRow = parseInt(selectID.text().substring(4));
                        
                        return(nowRow)

                    })
                })
console.log(nowRow)









$(this).click(function() {
          $('#tab_logic tr').unbind('click').one("click", function() {
            selectID = $("#debug").text(this.id)
            nowRow = parseInt(selectID.text().substring(4));

            function timerStart() {
              var h = $(".countHours").eq(nowRow).val()
              var m = $(".countMinutes").eq(nowRow).val()
              var s = $(".countSeconds").eq(nowRow).val()

              if ($(".countSeconds").eq(nowRow).val() == 0) {
                console.log("123")
              }

              current = (h * 3600) + (m * 60) + s; //the current time left in seconds
              if (current > 0 && trigger == true) {
                //take one second away, and rerender the seconds split into d, h, m, and s in the html, which you will reuse next time timer() runs
                if (s > 0) {
                  $(".countSeconds").eq(nowRow).val(s - 1)
                  $(".countMinutes").eq(nowRow).val(m);
                  $(".countHours").eq(nowRow).val(h);
                }
                else if (m <= 0) {
                  h--;
                  m = 59;
                  s = 5;
                  $(".countSeconds").eq(nowRow).val(s);
                  $(".countMinutes").eq(nowRow).val(m);
                  $(".countHours").eq(nowRow).val(h);
                }
                else {
                  m--;
                  s = 5;
                  $(".countSeconds").eq(nowRow).val(s);
                  $(".countMinutes").eq(nowRow).val(m);

                }

              }


              if ($(".countHours").eq(nowRow).val(h) == 0) {
                clearInterval(timer); //Time's up clearInterval
              }
            }
            $(".StartTrigger").unbind('click').one("click", function() {
              myVar = setInterval(timerStart, 1000);
              $('.form-control').prop('readonly', true);

            })
            console.log(nowRow)

          })
        })