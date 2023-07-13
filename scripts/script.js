$(document).ready(function() {
    // document.querySelector('#phone_bar').hidden = true;  
    $("#menu, #button_call, #phone_bar").on("click","a", function (event) {
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
    const item = document.querySelectorAll(`.menu_${id}`).forEach(a => a.classList.add("color_white"));
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
    
    if(window_pos > $("#work").offset().top + 500){
        document.querySelector("#work").classList.add("fade_in");
        setTimeout(() => {document.querySelector("#work").classList.add("opacity");});
    }
    if(window_pos > $("#planes").offset().top + 500){
        document.querySelector("#planes").classList.add("fade_in");
        setTimeout(() => {document.querySelector("#planes").classList.add("opacity");});

    }
    if(window_pos > $("#web").offset().top + 500){
        document.querySelector("#web").classList.add("shake");
        document.querySelector("#web").classList.add("fade_in");
        setTimeout(() => {document.querySelector("#web").classList.add("opacity");});
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


let x = true;


function mob_menu_close(hider, menu_block){
    hider.style.animation = "rotation_out 0.4s";
        hider.style.backgroundImage = "url('pic/slice_open.png')";
            menu_block.style.animation = "close 0.4s";
        setTimeout(() => {
            menu_block.hidden = true;
        }, 400);
}

document.querySelector("#hider").addEventListener('click', () => {
    hider = document.querySelector("#hider");
    menu_block = document.querySelector("#phone_bar");

    if(x){
        menu_block.hidden = false;
        hider.style.animation = "rotation_in 0.4s";
        hider.style.backgroundImage = "url('pic/slice_close.png')";
        menu_block.style.animation = "open 0.4s";
        x = false;
    } else{
        mob_menu_close(hider, menu_block)
        
        x = true;
    }

});

document.querySelector("#phone_bar").addEventListener('click', () => {
    hider = document.querySelector("#hider");
    menu_block = document.querySelector("#phone_bar");
    mob_menu_close(hider, menu_block);
});

document.querySelector("form").addEventListener('change', () =>{
    checkboxes();
});

function onReady(callback) {
    var intervalId = window.setInterval(() => {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('#loading', false);
  });