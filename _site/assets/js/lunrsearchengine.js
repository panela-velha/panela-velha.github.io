
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "",
    "body": "Sabor, cultura e muito carinho :) Siga @mes_amis_food "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": " Please send your message to Panela velha (que faz comida boa). We will reply as soon as possible!                   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               CUSCUZ DE MILHO COM CASTANHA-DE-CAJU                         1 2 3 4 5                      :       Cuscuz de milho não é só café da manhã. É um ótimo acompanhamento para variar as refeições. Nesta receita, depois de cozido ele é passado na frigideira com manteiga e. . . :                                                                               Panela Velha                 17 Apr 2020                                "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/cuscuz-de-milho-com-castanha-de-caju/",
    "title": "CUSCUZ DE MILHO COM CASTANHA-DE-CAJU",
    "body": "2020/04/17 - Cuscuz de milho não é só café da manhã. É um ótimo acompanhamento para variar as refeições. Nesta receita, depois de cozido ele é passado na frigideira com manteiga e castanha para ganhar mais uma camada de sabor e de textura. Ótimo para servir com receitas ensopadas ou com molho. INGREDIENTES 1 xícara (chá) de farinha de milho flocada para cuscuz pré-cozida ⅓ de xícara (chá) de castanha-de-caju torrada sem sal ½ xícara (chá) de água ½ colher (chá) de sal 2 colheres (sopa) de manteigaMODO DE PREPARO   Numa tigela misture a farinha de milho com o sal. Regue com a água aos poucos, misturando com uma colher (ou com as mãos) para umedecer bem a farinha – a textura deve ficar como a de areia molhada.     Deixe a farinha hidratar por 5 minutos – assim os flocos ficam mais macios ao cozinhar no vapor. Enquanto isso, pique grosseiramente as castanhas-de-caju.     Preencha o fundo da cuscuzeira com água e encaixe o cesto de vapor na panela. Transfira a farinha de milho hidratada para o cesto, sem compactar. Tampe e leve para cozinhar em fogo alto.     Assim que começar a ferver (vai sair um leve vapor pela lateral da tampa), abaixe o fogo e deixe cozinhar por mais 5 minutos, ou até o cuscuz ficar bem macio. Verifique ao abrir a tampa: o cuscuz deve estar inflado, macio ao toque.     Desligue o fogo e, com cuidado para não se queimar ou virar o cesto, puxe a haste central para desenformar cuscuz. Transfira para uma tigela e desfaça o cuscuz com um garfo.     Leve uma frigideira grande com a manteiga ao fogo médio. Quando derreter, adicione as castanhas picadas e mexa por 1 minuto para perfumar. Junte o cuscuz e mexa por 2 minutos para incorporar os sabores. Sirva a seguir.  FARINHA DE MILHO COMUM: Caso você não encontre a farinha de milho pré-cozida, basta deixar a farinha hidratar por 10 minutos e cozinhar o cuscuz no vapor por mais tempo. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});