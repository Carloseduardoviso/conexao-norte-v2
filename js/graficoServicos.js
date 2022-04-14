google.charts.load('current', {'packages':['corechart', 'bar']})
google.charts.setOnLoadCallback(desenhar);

function desenhar(){
    var dados = google.visualization.arrayToDataTable([
        ['Servicos', 'Votos', {role: 'style'}, {role: 'annotation'}],
        ['Jogar', 29, '#00BFFF', '58,3%'],
        ['Assistir serviços de streamming', 40, '#00BFFF', '81,3%'],
        ['Estudar', 37, '#00BFFF', '75%'],
        ['Trabalhar', 20, '#00BFFF', '39,6%'],
        ['Escutar músicas', 29, '#00BFFF', '58,3%'],
        ['Fazer Downloads diversos', 31, '#00BFFF', '62,5%'],
        ['Outros', 6, '#00BFFF', '10,5%']
    ]);
    var opcoes = {
        width: 500,
        height: 500,
        legend: {
            position: 'none'
        },
        hAxis: {
            title: 'Votos'
        }
    }

    var chart = new google.visualization.BarChart(document.getElementById('grafico-servicos'));
    chart.draw(dados, opcoes);
}
