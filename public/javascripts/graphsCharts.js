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
                vetor1 = [ data[1].cidade,   parseInt(data[1].valor) ]
            if(data[2] != undefined && parseInt(data[2].valor) > 0)
                vetor2 = [ data[2].cidade,   parseInt(data[2].valor) ]
            if(data[3] != undefined && parseInt(data[3].valor) > 0)
                vetor3 = [ data[3].cidade,   parseInt(data[3].valor) ]
            if(data[4] != undefined && parseInt(data[4].valor) > 0)
                vetor4 = [ data[4].cidade,   parseInt(data[4].valor) ]
            if(data[5] != undefined && parseInt(data[5].valor) > 0)
                vetor5 = [ data[5].cidade,   parseInt(data[5].valor) ]
            if(data[6] != undefined && parseInt(data[6].valor) > 0)
                vetor6 = [ data[6].cidade,   parseInt(data[6].valor) ]


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
                    name: 'cidades twittadas',
                    data: [
                        
                        {
                            name: data[0].cidade,
                            y: parseInt(data[0].valor),
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
                                    data:  [parseInt(possible['1']), parseInt(possible['2']), parseInt(possible['3']), parseInt(possible['4']), parseInt(possible['5']), parseInt(possible['6']), parseInt(possible['7']), parseInt(possible['8']), parseInt(possible['9']), parseInt(possible['10']), parseInt(possible['11']), parseInt(possible['12'])]
                                },
                                {
                                    name: 'Possiveis',
                                    data: [parseInt(student['1']), parseInt(student['2']), parseInt(student['3']), parseInt(student['4']), parseInt(student['5']), parseInt(student['6']),parseInt(student['7']),parseInt(student['8']),parseInt(student['9']),parseInt(student['10']),parseInt(student['11']),parseInt(student['12'])]
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
                        data: [parseInt(possible['00']), parseInt(possible['01']), parseInt(possible['02']), parseInt(possible['03']), parseInt(possible['04']), parseInt(possible['05']), parseInt(possible['06']), parseInt(possible['07']), parseInt(possible['08']), parseInt(possible['09']), parseInt(possible['10']), parseInt(possible['11']), parseInt(possible['12']), parseInt(possible['13']), parseInt(possible['14']), parseInt(possible['15']), parseInt(possible['16']), parseInt(possible['17']), parseInt(possible['18']), parseInt(possible['19']), parseInt(possible['20']), parseInt(possible['21']), parseInt(possible['22']), parseInt(possible['23'])]
                    },{
                        name: 'Possiveis',
                        data: [parseInt(student['00']), parseInt(student['01']), parseInt(student['02']), parseInt(student['03']), parseInt(student['04']), parseInt(student['05']), parseInt(student['06']), parseInt(student['07']), parseInt(student['08']), parseInt(student['09']), parseInt(student['10']), parseInt(student['11']), parseInt(student['12']), parseInt(student['13']), parseInt(student['14']), parseInt(student['15']), parseInt(student['16']), parseInt(student['17']), parseInt(student['18']), parseInt(student['19']), parseInt(student['20']), parseInt(student['21']), parseInt(student['22']), parseInt(student['23'])]
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
            POSSIVEL.push(3); POSSIVEL.push(5);
            ESTUDANTE.push(1);ESTUDANTE.push(6);
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
               
                 data.push( ['PATOS DE MINAS', 17] )
                 total += 17
                 data.push( ['VAZANTE', 2] )
                 total += 2
                 data.push( ['CARMO DO PARANAIBA', 1] )
                 total += 1
                 data.push( ['PRESIDENTE OLEGARIO', 1] )
                 total += 1

                for(i=4; i<response.length;i++){
                    data.push( [response[i].chave, parseInt(response[i].valor)] )
                    total += parseInt(response[i].valor)
                }


            }


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
             
                data.push( ['PATOS DE MINAS', 3] )
                total += 5
                data.push( ['PRESIDENTE OLEGARIO', 1] )
                total += 2

                for(i=2; i<response.length;i++){
                    data.push( [response[i].chave, parseInt(response[i].valor)] )
                    total += parseInt(response[i].valor)
                }
            }


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
               
                 data.push( ['PATOS DE MINAS', 2] )
                 total += 6

                for(i=2; i<response.length;i++){
                    data.push( [response[i].chave, parseInt(response[i].valor)] )
                    total += parseInt(response[i].valor)
                }
            }


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
              
                data.push( ['PATOS DE MINAS', 2] )
                total += 1

                for(i=2; i<response.length;i++){
                    data.push( [response[i].chave, response[i].valor] )
                    total += parseInt(response[i].valor)
                }
            }
           

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
            categ.push('COMINE');categ.push('PALESTRA'); 
            categ.push('AULA');
            categ.push('FACULDADE'); categ.push('PORTAL');


            VALORES.push(40); VALORES.push(35);
            VALORES.push(21);
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
            VALORES.push(6); VALORES.push(8);
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
                            name: 'Possíveis Estudantes',
                            data: VALORES
                      }
                      
                    ]
        });
    
     });
});