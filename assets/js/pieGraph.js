// Import the amCharts 5 core library
import * as am5 from "@amcharts/amcharts5";

// Import the percent charts module (which includes PieChart, etc.)
import * as am5percent from "@amcharts/amcharts5/percent";

// Import an optional built-in theme (for animations and nicer visuals)
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// ✅ Create a <div> element dynamically for the chart to live in
// (This is useful when you're not editing the HTML directly.)
const chartDiv = document.createElement("div");
chartDiv.id = "chartdiv";                 // Give it an ID (amCharts needs this)
chartDiv.style.width = "100%";            // Set the chart width
chartDiv.style.height = "500px";          // Set the chart height
document.body.appendChild(chartDiv);      // Add the div to the document body

// ✅ Initialize the root of the amCharts system
// 'root' is the entry point where all charts, containers, and themes connect.
const root = am5.Root.new("chartdiv");

// ✅ Apply the Animated theme for smooth transitions and a modern look
root.setThemes([
  am5themes_Animated.new(root)
]);

// ✅ Create the main PieChart container
// This acts as the chart canvas that holds the pie series and legend.
const chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    layout: root.verticalLayout // Stacks elements vertically (chart + legend)
  })
);

// ✅ Create the PieSeries
// This determines how slices are drawn and which data fields they use.
const series = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",     // Field in the data that represents numeric value
    categoryField: "from"    // Field that represents the slice label/category
  })
);

// ✅ Load external JSON data asynchronously
// In this case, 'data/dining.json' is your provided file.
fetch("data/dining.json")
  .then(res => res.json())          // Parse the JSON response
  .then(data => {
    // Filter only the objects that have "to": "Dining"
    // (these represent revenue sources flowing *into* Dining)
    const inflows = data.filter(d => d.to === "Dining");

    // Assign that filtered array as the data source for the pie chart
    series.data.setAll(inflows);
  });

// ✅ Add a legend under the chart for labels and values
chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50, // Center the legend horizontally
    x: am5.p50
  })
);

// ✅ Add an appear animation for the series
// The numbers control duration and delay (in milliseconds)
series.appear(1000, 100);
