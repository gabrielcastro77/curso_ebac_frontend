$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        const inputText = $("#idtext").val();
        const novoItem = `<li class="item">${inputText}</li>`;
        $(novoItem).appendTo('ul');
        $("#idtext").val('');
        $(".item").click(function() {
            $(".item").addClass('item-concluido')
        })
    })
})