$(function () {

            doGetServer('/graphPorcentStudents', {}, function(data){

                        $('#container-estudantes').highcharts({
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,//null,
                                    plotShadow: false
                                },
                                title: {
                                    text: 'Tipos de usuários: ( total ' + data['response']['total'] + ' usuários)'
                                },
                                tooltip: {
                                    pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
                                },
                                plotOptions: {
                                    pie: {
                                       allowPointSelect: true,
                                       cursor: 'pointer',
                                        dataLabels: {
                                            enabled: false
                                        },
                                        showInLegend: true
                                    }
                                },
                            series: [{
                            type: 'pie',
                            name: 'Students',
                            data: [
                                 {
                                    name: 'Alunos',
                                    y: data['response']['possible'],
                                    sliced: true,
                                    selected: true
                                },
                                ['Possíveis Alunos',   data['response']['student']],
                               
                            ]
                        }]
                    });

                    
            });    



 


});





$(function () {


        
        doGetServer('/graphLocationsStudents', {}, function(data){
            
            data = data['response'];
           
            $('#container-tweets-por-cidade').highcharts({
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                },
                title: {
                    text: 'Tweets por cidade'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data: [
                        
                        {
                            name: data[0].cidade,
                            y: data[0].valor,
                            sliced: true,
                            selected: true
                        },
                        [data[1].cidade,   data[1].valor],
                        [data[2].cidade,   data[2].valor],
                        [data[3].cidade,   data[3].valor],
                        [data[4].cidade,   data[4].valor],
                        [data[5].cidade,   data[5].valor],
                        [data[6].cidade,   data[6].valor],
                    ]
                }]
            });
    });   


});


$(function () {

     doGetServer('/graphCreatedAtMoth', {}, function(data){


                student = data['response']['student'];
                possible = data['response']['possible'];
                

                $('#container-ano-twitter').highcharts({
                    title: {
                        text: 'Posts no Twitter por ano',
                        x: -20 //center
                    },
                    
                    xAxis: {
                         categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                    },
                    yAxis: {
                        title: {
                            text: 'Quantidade'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        valueSuffix: ' Tweet'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: [{
                        name: 'Possiveis',
                        data: [student['1'], student['2'], student['3'], student['4'], student['5'], student['6'],student['7'],student['8'],student['9'],student['10'],student['11'],student['12']]
                    }, {
                        name: 'Estudantes',
                        data:  [possible['1'], possible['2'], possible['3'], possible['4'], possible['5'], possible['6'],possible['7'],possible['8'],possible['9'],possible['10'],possible['11'],possible['12']]
                    }]
                });

    });
});




$(function () {

     doGetServer('/graphCreatedAtHour', {}, function(data){

                student = data['response']['student'];
                possible = data['response']['possible'];
             
                $('#container-tweets-por-hora').highcharts({
                    title: {
                        text: 'Posts no Twitter horas',
                        x: -20 //center
                    },
                    
                    xAxis: {
                         categories: [ '00', '01', '02', '03', '04', '05',
                                       '06', '07', '08', '09', '10', '11', '12','13',
                                       '14', '15','16', '17', '18', '19', '20','21',
                                       '22', '23']
                    },
                    yAxis: {
                        title: {
                            text: 'Quantidade'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        valueSuffix: ' Tweet'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: [{
                        name: 'Possiveis',
                        data: [student['00'], student['01'], student['02'], student['03'], student['04'], student['05'],student['06'],student['07'],student['08'],student['09'],student['10'],student['11'],student['12'],student['13'],student['14'],student['15'],student['16'],student['17'],student['18'],student['19'],student['20'],student['21'],student['22'],student['23']]
                    }, {
                        name: 'Estudantes',
                        data: [possible['00'], possible['01'], possible['02'], possible['03'], possible['04'], possible['05'], possible['06'], possible['07'], possible['08'], possible['09'], possible['10'], possible['11'], possible['12'], possible['13'],possible['14'],possible['15'],possible['16'],possible['17'],possible['18'],possible['19'],possible['20'],possible['21'],possible['22'],possible['23']]
                    }]
                });

    });
});













$(function () {

    
    doGetServer('/graphCourses', {}, function(data){

        categ = []
        for( i in data['response']){
            categ.push(i);
        }

        POSSIVEL = []
        ESTUDANTE = []

        for(c in categ){
            name = categ[c];
            POSSIVEL.push(data['response'][name]['POSSIVEL'])
            ESTUDANTE.push(data['response'][name]['ESTUDANTE'])
        }



        $('#container-tweets-cursos').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Cursos mais comentados no Twitter'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: categ
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [ {
                            name: 'Estudantes',
                            data: ESTUDANTE
                      },
                      {
                            name: 'Possíveis Estudantes',
                        data: POSSIVEL
                      }
                    ]
        });
    
     });
});