
// Change House

$(document).on('change', '.div-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
	$('.div-toggle').trigger('change');
});

// Generate table

$("#submitButton").click(function() {
  var table = $("#resultTable");
  var rowNum = parseInt($("#table-row-num").val(), 10);
  var resultHtml = '';
  
for(var i = 0 ; i < rowNum ; i++) {
  resultHtml += ["<tr>", 
 '<td><input class="physnum" placeholder="Physical"></td>',
 '<td><input class="emonum" placeholder="Emotional"></td>',
 '</tr>'].join("\n");
}  

table.html(resultHtml);
  return false; 
});
// Calculate average
function CalculatePhys() {
  var table = document.getElementById("resultTable");
  var items = table.getElementsByClassName("physnum");
  var sum = 0;
  var rowCount = table.rows.length;
  for(var i=0; i<items.length; i++)
      sum += parseInt(items[i].value);
  var output = document.getElementById("sum");
  output.innerHTML = "Physical Average: " + Math.round(sum/rowCount);
  Plotly.restyle('Physical', 'value', [Math.round(sum/rowCount)]);
}

function CalculateEmo() {
  var table = document.getElementById("resultTable");
  var items = table.getElementsByClassName("emonum");
  var emosum = 0;
  var rowCount = table.rows.length;
  for(var i=0; i<items.length; i++)
      emosum += parseInt(items[i].value);
  var output = document.getElementById("emosum");
  output.innerHTML = "Emotional Average: " + Math.round(emosum/rowCount);
  Plotly.restyle('Emotional', 'value', [Math.round(emosum/rowCount)])

}

// Graphs

var physicalData = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: [0],
    title: { text: "Physical" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [null, 10] },
      steps: [
        { range: [0, 5], color: "lightgray" },
        { range: [5, 8], color: "gray" }
      ],
    }
  }
];

var emotionalData = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: [0],
    title: { text: "Emotional" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [null, 10] },
      steps: [
        { range: [0, 5], color: "lightgray" },
        { range: [5, 8], color: "gray" }
      ],
    }
  }
];


var layout = { width: 400, height: 250, margin: { t: 0, b: 0 } };
Plotly.newPlot('Emotional', emotionalData, layout);
Plotly.newPlot('Physical', physicalData, layout);


// Define the function 
        // to screenshot the div
        function takeshot() {
          let div =
            document.getElementById('screenshot'); 

          html2canvas(div).then(
              function (canvas) {
                  document
                  .getElementById('output')
                  .appendChild(canvas);
              })
              
      }
      