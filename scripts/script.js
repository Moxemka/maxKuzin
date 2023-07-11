$(document).ready(function() {
    $("#menu, #button_call").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1500);
        document.querySelectorAll(".menu_item").forEach(a => a.classList.remove("color_white"));
        if ($(event.target).text() !== "Связаться со мной"){
            event.target.classList.toggle("color_white");
        };
        
    });
});


function color_menu(id) {
    document.querySelectorAll(".menu_item").forEach(a => a.classList.remove("color_white"));
    const item = document.querySelector(`.menu_${id}`);
    item.classList.toggle("color_white");
};

$(window).scroll(function() {

    const window_pos = $(window).scrollTop() + $(window).height();

    if(window_pos > $("#contacts").offset().top + 500) {
        color_menu("contacts")
    }
    else if(window_pos > $("#price").offset().top + 500){
        color_menu("price")
    }
    else if(window_pos > $("#why").offset().top + 500){
        color_menu("why")
    }
    else if(window_pos > $("#folio").offset().top + 500){
        color_menu("folio")
    }
    else if(window_pos > $("#who").offset().top + 500){
        color_menu("who")
    }
    else if(window_pos >= $("#main").offset().top + 500){
        color_menu("main")
    }
    else{
        document.querySelectorAll(".menu_item").forEach(a => a.classList.remove("color_white"));
    }
 });

function checkboxes(){
    const fast_chbox = document.querySelector("#fast");
    const cheap_chbox = document.querySelector("#cheap");
    const quality_chbox = document.querySelector("#quality");
    const output = document.querySelector("#output");

    output.classList.add("shake");
    if (fast_chbox.checked && quality_chbox.checked && cheap_chbox.checked){
        output.textContent = "такое бывает?";
    }
    else if (cheap_chbox.checked && quality_chbox.checked){
        output.textContent = "долго";
    }
    else if (fast_chbox.checked && quality_chbox.checked){
        output.textContent = "дорого";
    }
    else if (fast_chbox.checked && cheap_chbox.checked){
        output.textContent = "криво";
    }else{
        if (fast_chbox.checked){
            output.textContent = "быстро";
        }
        else if (cheap_chbox.checked){
            output.textContent = "дёшево";
        }
        else if (quality_chbox.checked){
            output.textContent = "качественно";
        } else{
            output.textContent = "результат";
        };
    };
    setTimeout(() => {
        
        output.classList.remove("shake");

    }, 200);
    
};

document.querySelector("form").addEventListener('change', () =>{
    checkboxes();
});




