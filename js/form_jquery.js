$(function(){
 
$("#contact_form").submit(function() {

    var name = $("#fname").val();
    var email = $("#femail").val();
    var title = $("#ftitle").val();
    var text = $("#ftext").val();
    var check = $("#fcheck").val();
    var output = '';

    
    if (name == '' || email == '' || title == '' || text == '' || check == '') {
        output += 'Wypełnij wszystkie pola';
    }
    else if(check!=61) {
       output += 'Niepoprawny wynik działania';
    } 
    else if(!(email.indexOf('@') > 0)) {
        output += 'Adres e-mail nie jest poprawny';
    }
    else {
         $("#msg").html("<span class='ok'>Wiadomość została wysłana </span>");
         return false;
    }

    $("#msg").html("<span class='error'>"+ output +"</span>");
    return false;
});

$("#signup_form").submit(function() {

    var email = $("#femail").val();
    var pass = $("#fpassword").val();
    var pass2 = $("#fpassword2").val();
    var output = '';
    
    if (email == '' || pass == '' || pass2 == '') {
        output += 'Wypełnij wszystkie pola';
    }
    else if(pass.length < 8) {
        output += 'Hasło powinno mieć minimum 8 znaków';
    }
    else if(pass!=pass2) {
       output += 'Hasła się różnią';
    }
    else if(!(email.indexOf('@') > 0)) {
        output += 'Adres e-mail nie jest poprawny';
    }
    else {
         $("#msg").html("<span class='ok'>Konto zostało utworzone</span>");
         return false;
    }

    $("#msg").html("<span class='error'>"+ output +"</span>");
    return false;
});

}); 