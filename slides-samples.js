// format incident name
var IncidentNameFormatted = Upper($datapoint.IncidentName) + " INCIDENT";

// generate incident type label
var IncidentTypeCategory = $datapoint.IncidentTypeCategory;
var IncidentTypeLabel = When(
  IncidentTypeCategory == "RX",
  "RX - Prescribed Fire",
  IncidentTypeCategory == "WF",
  "WF - Wildfire",
  IncidentTypeCategory == "IC",
  "IC - Incident Complex",
  "",
);

// determine number of days ago the fire started
var FireDiscoveryDateTime = $datapoint.FireDiscoverDateTime;
var DaysSinceFireDiscoverDate = Floor(
  DateDiff(Now(), FireDiscoveryDateTime, "days"),
);

// determine background color of incident label chip
var IncidentTypeCategory = $datapoint.IncidentTypeCategory;
var IncidentTypeColor = When(
  IncidentTypeCategory == "RX",
  "#E7BD73", // mustard
  IncidentTypeCategory == "WF",
  "#CF3F3B", // dark red
  IncidentTypeCategory == "IC",
  "#9431CE", //purple
  "",
);

// change the text color of the incident label chip
var IncidentTypeTextColor = When(
  IncidentTypeCategory == "RX",
  "black", // black text on mustard
  IncidentTypeCategory == "WF",
  "white", // white text on dark red
  IncidentTypeCategory == "IC",
  "white",
  // white text on purple
  "",
);

// progress bars
var ProgressBarTextOnPctComplete = `<div style="background-color:#EAEAEA; padding:5px; width:100%; border-radius:2px"><div style="background-color:#3d4666; color:#fff; text-align:center; padding:3px; width:${PercentContained}; border-radius:2px">${PercentContained}% Contained</div></div>`;

var ProgressBarTextOnRemainder = `<div style="background-color:#EAEAEA; padding:5px; width:100%; display:flex; border-radius:2px"><div style="background-color:#3d4666; color:#fff; text-align:center; width:${PercentContained}%; border-radius:2px">&nbsp;</div><div style="color:#000; text-align:center; width:${ProgressRemainder}%;">${PercentContained}% Contained</div></div>`

var NoProgressRecorded = `<p>Containment not yet reported</p>`

var ProgressBar = When(IsEmpty(PercentContained), NoProgressRecorded,
                    PercentContained>50, ProgressBarTextOnPctComplete,
                    ProgressBarTextOnRemainder)