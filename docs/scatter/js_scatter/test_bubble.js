var trace1 = {

  x: [1, 2, 3, 4],

  y: [10, 11, 12, 13],

  mode: 'markers',

  marker: {

    size: [40, 60, 80, 100]

  }

};


var data = [trace1];


var layout = {

  title: 'Marker Size',

  showlegend: false,

  height: 600,

  width: 600

};


//Plotly.newPlot('myDiv2', data, layout);

Plotly.newPlot('myDiv2',

[
  {

  x: [1, 2, 3, 4],

  y: [10, 11, 12, 13],

  mode: 'markers',

  marker: {

    size: [40, 60, 80, 100]

  }

}],
{

  title: 'Marker Size',

  showlegend: false,

  height: 600,

  width: 900

}
);
