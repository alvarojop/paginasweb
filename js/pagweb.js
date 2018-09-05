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

        $("#dinicio").attr('style', 'display:block');
        $("#dpicosita").attr('style', 'display:none');
        $("#dmichelada").attr('style', 'display:none');
        $("#djagerbomb").attr('style', 'display:none');
        $("#dmojito").attr('style', 'display:none');
        $("#dmargarita").attr('style', 'display:none');
    });

    $("#btnpicosita").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'visible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');

        $("#dinicio").attr('style', 'display:none');
        $("#dpicosita").attr('style', 'display:block');
        $("#dmichelada").attr('style', 'display:none');
        $("#djagerbomb").attr('style', 'display:none');
        $("#dmojito").attr('style', 'display:none');
        $("#dmargarita").attr('style', 'display:none');
    });

    $("#btnmichelada").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'visible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');

        $("#dinicio").attr('style', 'display:none');
        $("#dpicosita").attr('style', 'display:none');
        $("#dmichelada").attr('style', 'display:block');
        $("#djagerbomb").attr('style', 'display:none');
        $("#dmojito").attr('style', 'display:none');
        $("#dmargarita").attr('style', 'display:none');
    });

    $("#btnjagerbomb").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'visible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');

        $("#dinicio").attr('style', 'display:none');
        $("#dpicosita").attr('style', 'display:none');
        $("#dmichelada").attr('style', 'display:none');
        $("#djagerbomb").attr('style', 'display:block');
        $("#dmojito").attr('style', 'display:none');
        $("#dmargarita").attr('style', 'display:none');
    });

    $("#btnmojito").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'visible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');

        $("#dinicio").attr('style', 'display:none');
        $("#dpicosita").attr('style', 'display:none');
        $("#dmichelada").attr('style', 'display:none');
        $("#djagerbomb").attr('style', 'display:none');
        $("#dmojito").attr('style', 'display:block');
        $("#dmargarita").attr('style', 'display:none');
    });

    $("#btnmargarita").click(function() {
        $("#dinicio").attr('class', 'invisible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'visible text-center');

        $("#dinicio").attr('style', 'display:none');
        $("#dpicosita").attr('style', 'display:none');
        $("#dmichelada").attr('style', 'display:none');
        $("#djagerbomb").attr('style', 'display:none');
        $("#dmojito").attr('style', 'display:none');
        $("#dmargarita").attr('style', 'display:block');
    });

});