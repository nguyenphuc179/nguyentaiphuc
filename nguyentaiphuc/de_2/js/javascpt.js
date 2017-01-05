

//cau 1
$(document).ready(function(){
    $('#changecolor').click(function(){
   			 $('div').css("background-color", "red");
    });
});



// cau 2
$(document).ready(function(){
    $("h1").click(function(){
       $('p').addClass('myClass');
    });
});



//cau 3
 $().ready(function () {
         
                $("#myform").validate({
                    rules: {
                        number1: {
                            required: true,
                            email: true
                        },
                        number3: {
                            required: true,
                            minlength: 7
                        }
                    },
                    messages: {
                        number1: {
                            required: "mail khong duoc de trong",
                            email: "Your email address must be in the format of name@domain.com"
                        },
                        number3: {
                            required: "A number is required",
                            minlength: jQuery.validator.format("The number should be at least 7 digits")
                        }
                    }, submitHandler: function () {
                        $('#submit').click()
                    }
                });
            })


            $('#submit').click(function () {
                if ($('#number2').val() == '') {
                    $('#error1').show()
                } else {
                    $('#error1').hide()
                }
                if ($('#number2').val() % 10 == 0) {
                    $('#error2').hide()

                } else {
                    $('#error2').show()
                }
            })





//cau 4


   $('#AddValue').click(function () {
                var table = document.getElementById("myTable");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = $('#value1').val();
                cell2.innerHTML = $('#value2').val();
                $('#myTable').show()
            })