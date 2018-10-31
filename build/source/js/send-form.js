$(function(){
          $('#modal-form').submit(function(e){
                e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
                var formdata='name='+$('#name').val()+'&phone='+$('#phone').val()+'&message='+$('#message').val();
                //запишем все данные формы в переменную data
                $.ajax({
                  url: 'formdark.php',
                  data: formdata,
                  type: 'post',
                  success: function(respond){
                    $(".modal-content").css('display', 'none') &&
                    $(".modal-background").css('display', 'block') && 
                    $(".success-message").css('display', 'block') && $("#name").val("") && $("#phone").val("") && $("#message").val("");
                  }, 
                  error: function(){
                    alert('Произошла ошибка. Повторите попытку позже.');
                  }
                });
              });
            });


 $('.btn').mouseup(function() {
         $(".success-message").css('display', 'block') && $(".modal-background").css('display', 'block');
     });