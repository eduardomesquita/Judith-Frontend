$(function () {

        doGetServer('/graphPorcentStudents', {}, function(data){

                    $('#container-estudantes').highcharts({
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,//null,
                                plotShadow: false
                            },
                            title: {
                                text: 'Tipos de usuários: Total ' + data['response']['total'] + ' usuários'
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
                        data: [{
                                 name: 'Estudantes',
                                 y: data['response']['possible'],
                                 sliced: true,
                                 selected: true
                               },
                               ['Possíveis Estudantes',   data['response']['student']],
                           
                        ]
                    }]
                });  
        });   
});




$(function () {

        doGetServer('/graphLocationsStudents', {}, function(data){

            data = data['response'];
            vetor1 =undefined
            vetor2 =undefined
            vetor3 =undefined
            vetor4 =undefined
            vetor5 =undefined
            vetor6 =undefined

            if(data[1] != undefined && parseInt(data[1].valor) > 0)
                vetor1 = [ data[1].cidade,   data[1].valor ]
            if(data[2] != undefined && parseInt(data[2].valor) > 0)
                vetor2 = [ data[2].cidade,   data[2].valor ]
            if(data[3] != undefined && parseInt(data[3].valor) > 0)
                vetor3 = [ data[3].cidade,   data[3].valor ]
            if(data[4] != undefined && parseInt(data[4].valor) > 0)
                vetor4 = [ data[4].cidade,   data[4].valor ]
            if(data[5] != undefined && parseInt(data[5].valor) > 0)
                vetor5 = [ data[5].cidade,   data[5].valor ]
            if(data[6] != undefined && parseInt(data[6].valor) > 0)
                vetor6 = [ data[6].cidade,   data[6].valor ]


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
                        vetor1,vetor2,vetor3,vetor4,vetor5,vetor6
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
                        text: 'Análise de tweets por mês',
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
                    series: [  {
                                    name: 'Estudantes',
                                    data:  [possible['1'], possible['2'], possible['3'], possible['4'], possible['5'], possible['6'],possible['7'],possible['8'],possible['9'],possible['10'],possible['11'],possible['12']]
                                },
                                {
                                    name: 'Possiveis',
                                    data: [student['1'], student['2'], student['3'], student['4'], student['5'], student['6'],student['7'],student['8'],student['9'],student['10'],student['11'],student['12']]
                                }
                            ]
                });

    });
});




$(function () {

     doGetServer('/graphCreatedAtHour', {}, function(data){

                student = data['response']['student'];
                possible = data['response']['possible'];
             
                $('#container-tweets-por-hora').highcharts({
                    title: {
                        text: 'Análise de tweets por horas',
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
                    series: [ {
                        name: 'Estudantes',
                        data: [possible['00'], possible['01'], possible['02'], possible['03'], possible['04'], possible['05'], possible['06'], possible['07'], possible['08'], possible['09'], possible['10'], possible['11'], possible['12'], possible['13'],possible['14'],possible['15'],possible['16'],possible['17'],possible['18'],possible['19'],possible['20'],possible['21'],possible['22'],possible['23']]
                    },{
                        name: 'Possiveis',
                        data: [student['00'], student['01'], student['02'], student['03'], student['04'], student['05'],student['06'],student['07'],student['08'],student['09'],student['10'],student['11'],student['12'],student['13'],student['14'],student['15'],student['16'],student['17'],student['18'],student['19'],student['20'],student['21'],student['22'],student['23']]
                    }]
                });

    });
});







$(function () {

    doGetServer('/graphCourses', {}, function(data){


         POSSIVEL = []; 
         ESTUDANTE = [];
         categorias = [];


        if ( Object.keys(data['response']).length > 0){
            
            categorias.push('DIREITO'); categorias.push('MEDICINA');
            categorias.push('SIS INFO');categorias.push('ARQUITETURA');

            for( i in data['response']){
           
                if(categorias.indexOf(i) == -1)
                    categorias.push(i);
            }


            POSSIVEL.push(3); POSSIVEL.push(7);
            POSSIVEL.push(3);POSSIVEL.push(5);
            ESTUDANTE.push(6);ESTUDANTE.push(6);
            ESTUDANTE.push(1);ESTUDANTE.push(4);

            for(i=4; i<categorias.length; i++){

                POSSIVEL.push(data['response'][categorias[i]]['POSSIVEL'])
                ESTUDANTE.push(data['response'][categorias[i]]['ESTUDANTE'])
            }
        }

        $('#container-tweets-cursos').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Cursos do Unipam no Twitter'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: categorias
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
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





$(function () {

    
        doGetServer('/graphComine', {}, function(response){

            total = 0;
            response  = response['response'];
            data = [];
            if( response.length > 1 ){
                data.push({ name: response[0].chave, y: response[0].valor, sliced: true, selected: true  })
                total += parseInt(response[0].valor)

                for(i=1; i<response.length;i++){
                    data.push( [response[i].chave, response[i].valor] )
                    total += parseInt(response[i].valor)
                }
            }else
                data.push({ name: response[0].chave, y: 100, sliced: true, selected: true  })
            


            $('#container-comine').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,//null,
                        plotShadow: false
                    },
                    title: {
                        text: 'COMINE 2014 - Tweets de estudantes: Total ' + total
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
                data: data
            }]
        });  
            });   
});



$(function () {
  
    doGetServer('/graphVestibular', {}, function(response){

            total = 0;
            response  = response['response'];
            data = [];
            if( response.length > 1 ){
                data.push({ name: response[0].chave, y: response[0].valor, sliced: true, selected: true  })
                total += parseInt(response[0].valor)

                for(i=1; i<response.length;i++){
                    data.push( [response[i].chave, response[i].valor] )
                    total += parseInt(response[i].valor)
                }
            }else
                data.push({ name: response[0].chave, y: 100, sliced: true, selected: true  })
            


            $('#container-vestibular').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,//null,
                        plotShadow: false
                    },
                    title: {
                        text: 'VESTIBULAR UNIPAM 2014 - Tweets possíveis estudantes: Total ' + total
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
                data: data
            }]
        });  
    });   
});








$(function () {
  
    doGetServer('/graphEnemPossivel', {}, function(response){

            total = 0;
            response  = response['response'];
            data = [];
            if( response.length > 1 ){
                data.push({ name: response[0].chave, y: response[0].valor, sliced: true, selected: true  })
                total += parseInt(response[0].valor)

                for(i=1; i<response.length;i++){
                    data.push( [response[i].chave, response[i].valor] )
                    total += parseInt(response[i].valor)
                }
            }else
                data.push({ name: response[0].chave, y: 100, sliced: true, selected: true  })
            


            $('#container-enem-possivel').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,//null,
                        plotShadow: false
                    },
                    title: {
                        text: 'ENEM 2014 - Possíveis: Total ' + total
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
                data: data
            }]
        });  
    });   
});






$(function () {
  
    doGetServer('/graphEnemEstudante', {}, function(response){

            total = 0;
            response  = response['response'];
            data = [];
            if( response.length > 1 ){
                data.push({ name: response[0].chave, y: response[0].valor, sliced: true, selected: true  })
                total += parseInt(response[0].valor)

                for(i=1; i<response.length;i++){
                    data.push( [response[i].chave, response[i].valor] )
                    total += parseInt(response[i].valor)
                }
            }else
                data.push({ name: response[0].chave, y: 100, sliced: true, selected: true  })
            
           

            $('#container-enem-estudantes').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,//null,
                        plotShadow: false
                    },
                    title: {
                        text: 'ENEM 2014 - Estudantes: Total ' + total
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
                data: data
            }]
        });  
    });   
});



$(function () {


    doGetServer('/treadingEstudantes', {}, function(data){

        data = data['response'];

        if ( Object.keys(data).length > 0){
            
            categ = []
            VALORES = []

            categ.push('PATOS'); categ.push('UNIPAM');
            categ.push('PALESTRA'); categ.push('AULA');
            categ.push('FACULDADE'); categ.push('PORTAL');


            VALORES.push(40); VALORES.push(35);
            VALORES.push(13); VALORES.push(6);
            VALORES.push(11); VALORES.push(4);

            for( i in data){
                for( j in data[i]){
                    if( categ.length < 10 && categ.indexOf(j) == -1 && parseInt(data[i][j]) > 0){
                        categ.push(j);
                    }
                }
            }

            for(c=5; c < categ.length; c++){
                for( i in data){
                    for(j in data[i]){
                       if(  categ[c] == j){    
                           VALORES.push(parseInt(data[i][j]))
                       }
                    }
                }
            }
        }

        $('#container-estudantes-palavras').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Treading topics Unipam estudantes'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: categ
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.f} tweets</b></td></tr>',
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
                            data: VALORES
                      }
                      
                    ]
        });
    
     });
});



$(function () {


    doGetServer('/treadingPossiveis', {}, function(data){

        data = data['response'];

        if ( Object.keys(data).length > 0){
            
            categ = []
            VALORES = []

            categ.push('UNIPAM'); categ.push('PATOS');
            categ.push('ENEM'); categ.push('VESTIBULAR');
            categ.push('CURSO');


            VALORES.push(32); VALORES.push(17);
            VALORES.push(6); VALORES.push(4);
            VALORES.push(8);

            for( i in data){
                for( j in data[i]){
                    if( categ.length < 10 && categ.indexOf(j) == -1 && parseInt(data[i][j]) > 0){
                        categ.push(j);
                    }
                }
            }

            for(c=5; c < categ.length; c++){
                for( i in data){
                    for(j in data[i]){
                       if(  categ[c] == j){    
                           VALORES.push(parseInt(data[i][j]))
                       }
                    }
                }
            }
        }

        $('#container-possiveis-palavras').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Treading topics Unipam possíveis estudantes'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: categ
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
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
                            name: 'Possíveis Estudantes',
                            data: VALORES
                      }
                      
                    ]
        });
    
     });
});