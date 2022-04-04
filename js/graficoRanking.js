google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(desenhar);

function desenhar(){
    var dados = new google.visualization.DataTable();
    dados.addColumn('string', 'Operadoras');
    dados.addColumn('number', 'Totais');
    dados.addRows([
        ['Vivo', 4.2],
        ['Oi', 64.6],
        ['Tim', 0],
        ['Claro(Net)', 12.5],
        ['Brasil Digital', 12.5],
        ['OLLÁ Telecom', 2.1],
        ['LinkNet', 0],
        ['Wianet', 0],
        ['FG Telecom', 0],
        ['GloboFiber', 0],
        ['Outra', 0],
    ]);

    var opcoes = {
        width: 1000,
        height: 750,
        colors: ['#1E90FF','#ff0000','#FFD700','#00FF00','#4B0082','#00BFFF','#FF69B4','#7CFC00','#FF4500','#696969','#ff00ff'],
        chartAread: {
            width: '100%',
            height: '100%'
        },
        is3D: true
    }
    var chart = new google.visualization.PieChart(document.getElementById('provedoras-internet'));
    chart.draw(dados, opcoes);
}
