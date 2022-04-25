function getBotResponse(){
    var myText = $("#my-text").val();
    var userBubble = '<br><div class="your-container"><div class="your-msg">'+ myText +'&nbsp;<i class="material-icons">account_circle</i></div></div>';
    $("#my-text").val("");
    $(".chat-view").append(userBubble);
    $(".chat-view").stop().animate({scrollTop: $(".chat-view")[0].scrollHeight}, 1000);
    
    $.get("/get", {msg: myText }).done(function(data){
        var botBubble = '<br><div class="bot-container"><div class="bot-msg"><i class="material-icons">smart_toy</i>&nbsp;'+ data +'</div></div>';
        $(".chat-view").append(botBubble);
    }); 
}
$("#my-text").keypress(function(e){
    if (e.which == 13){
        getBotResponse();
    }
});