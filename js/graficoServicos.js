google.charts.load('current', {'packages':['corechart', 'bar']})
google.charts.setOnLoadCallback(desenhar);

function desenhar(){
    var dados = google.visualization.arrayToDataTable([
        ['Servicos', 'Votos', {role: 'style'}, {role: 'annotation'}],
        ['Jogar', 28, '#00BFFF', '58,3%'],
        ['Assistir serviços de streamming', 39, '#00BFFF', '81,3%'],
        ['Estudar', 36, '#00BFFF', '75%'],
        ['Trabalhar', 19, '#00BFFF', '39,6%'],
        ['Escutar músicas', 28, '#00BFFF', '58,3%'],
        ['Fazer Downloads diversos', 30, '#00BFFF', '62,5%'],
        ['Todas as respostas acima', 1, '#00BFFF', '2,1%'],
        ['Redes sociais e notícias', 1, '#00BFFF', '2,1%'],
        ['Tudo!', 1, '#00BFFF', '2,1%'],
        ['Video aula no YouTube', 1, '#00BFFF', '2,1%'],
        ['Uso em geral mesmo', 1, '#00BFFF', '2,1%'],
        ['FF', 1, '#00BFFF', '2,1%']
    ]);
    var opcoes = {
        width: 1000,
        height: 500,
        legend: {
            position: 'none'
        },
        hAxis: {
            title: 'Votos'
        },
        is3D: true

    }

    var chart = new google.visualization.BarChart(document.getElementById('grafico-servicos'));
    chart.draw(dados, opcoes);
}
