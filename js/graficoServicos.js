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
        ['Outros', 6, '#00BFFF', '10,5%']
    ]);
    var opcoes = {
        width: 750,
        height: 750,
        legend: {
            position: 'none'
        },
        hAxis: {
            title: 'Votos'
        },

    }

    var chart = new google.visualization.BarChart(document.getElementById('grafico-servicos'));
    chart.draw(dados, opcoes);
}
