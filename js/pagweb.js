$(document).ready(function(){

    $("#btntop").click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    $("#btninicio").click(function() {
        $("#dinicio").attr('class', 'visible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');
    });

    $("#btnpicosita").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'visible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');
    });

    $("#btnmichelada").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'visible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');
    });

    $("#btnjagerbomb").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'visible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');
    });

    $("#btnmojito").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'visible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');
    });

    $("#btnmargarita").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'visible text-center');
    });

});