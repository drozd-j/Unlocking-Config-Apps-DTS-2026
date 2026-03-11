//MODIFY COLORS

var background_color = When(
  $datapoint.ACTIVITY_TYPE == "Header", "#ffffff",
  $datapoint.ACTIVITY_TYPE == "Project", "#e6e6e6",
  $datapoint.ACTIVITY_TYPE == "Task", "#f5f5f4", "");

var button_color = When(
  $datapoint.PROJECT_STATUS == "Inactive", "#f0cec8",
  $datapoint.PROJECT_STATUS == "Scoping", "#CAE3F0",
  $datapoint.PROJECT_STATUS == "Pending", "#E5D9EE",
  $datapoint.PROJECT_STATUS == "In progress", "#ECD8A2",
  $datapoint.PROJECT_STATUS == "Complete", "#D4E8D6", "");

var button_text_color = When(
  $datapoint.PROJECT_STATUS == "Inactive", "#e27064",
  $datapoint.PROJECT_STATUS == "Scoping", "#5093BC",
  $datapoint.PROJECT_STATUS == "Pending", "#A882C3",
  $datapoint.PROJECT_STATUS == "In progress", "#CB9433",
  $datapoint.PROJECT_STATUS == "Complete", "#5C9771", "");

var timeline_color = When(
  $datapoint.PROJECT_STATUS == "Inactive" && $datapoint.ACTIVITY_TYPE == "Project", "#e27064",
  $datapoint.PROJECT_STATUS == "Scoping" && $datapoint.ACTIVITY_TYPE == "Project", "#5093BC",
  $datapoint.PROJECT_STATUS == "Pending" && $datapoint.ACTIVITY_TYPE == "Project", "#A882C3",
  $datapoint.PROJECT_STATUS == "In progress" && $datapoint.ACTIVITY_TYPE == "Project", "#CB9433",
  $datapoint.PROJECT_STATUS == "Complete" && $datapoint.ACTIVITY_TYPE == "Project", "#5C9771",
  $datapoint.PROJECT_STATUS == "Inactive" && $datapoint.ACTIVITY_TYPE == "Task", "#F0CEC8",
  $datapoint.PROJECT_STATUS == "Scoping" && $datapoint.ACTIVITY_TYPE == "Task", "#CAE3F0",
  $datapoint.PROJECT_STATUS == "Pending" && $datapoint.ACTIVITY_TYPE == "Task", "#E5D9EE",
  $datapoint.PROJECT_STATUS == "In progress" && $datapoint.ACTIVITY_TYPE == "Task", "#ECD8A2",
  $datapoint.PROJECT_STATUS == "Complete" && $datapoint.ACTIVITY_TYPE == "Task", "#D4E8D6", "");



////DO NOT EDIT BELOW THIS////

//NAME
var name_return = When(
  $datapoint.ACTIVITY_TYPE == "_Header_", "",
  $datapoint.ACTIVITY_TYPE == "Project", `<b>` + $datapoint.PROJECT_NAME + `</b>`,
  $datapoint.ACTIVITY_TYPE == "Task", `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` + $datapoint.TASK_NAME, "");

//PROJECT_STATUS
var button_html = `<div style="padding:15px"><p style="text-align:center;background-color:` + button_color + `;border-radius:10px;color:` + button_text_color + `;width:fit-content;padding:2px 5px 2px 5px"><b>&#9679; ` + $datapoint.PROJECT_STATUS + `</b></p></div>`

var status_return = IIf($datapoint.PROJECT_STATUS == "_Header_", "<b><u>Status<u><b>", button_html);

//PROJECT_START_DATE
var project_start_date = Text($datapoint.PROJECT_START_DATE, 'MMM D')

var start_date_return = When(
  $datapoint.ACTIVITY_TYPE == "Header", "<b><u>Start Date<u><b>",
  $datapoint.ACTIVITY_TYPE == "Project", project_start_date,
  $datapoint.ACTIVITY_TYPE == "Task", project_start_date, "");

//PROJECT_END_DATE
var project_end_date = Text($datapoint.PROJECT_END_DATE, 'MMM D')

var end_date_return = When(
  $datapoint.ACTIVITY_TYPE == "Header", "<b><u>End Date<u><b>",
  $datapoint.ACTIVITY_TYPE == "Project", project_end_date,
  $datapoint.ACTIVITY_TYPE == "Task", project_end_date, "");

//PROJECT_DURATION
var project_start_date = $datapoint.PROJECT_START_DATE;
var project_end_date = $datapoint.PROJECT_END_DATE;
var days_difference = DateDiff(project_end_date, project_start_date, 'days');
var project_duration = Round((days_difference / 7), 0)

var duration_return = When(
  $datapoint.ACTIVITY_TYPE == "Header", "<b><u>Duration<u><b>",
  $datapoint.ACTIVITY_TYPE == "Project", project_duration + " weeks",
  $datapoint.ACTIVITY_TYPE == "Task", project_duration + " weeks", "");

//PROJECT_TIMELINE
var header_timeline_html = `<svg width="100%" height="auto" viewbox="0 0 1000 20">
    <path style="stroke:#151515;stroke-width:1" d="M 0.31628591,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 84.180452,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 167.54444,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 250.90842,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 334.2724,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 417.63639,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 501.00037,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 584.36435,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 667.72834,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 751.09232,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 834.4563,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 917.82029,0 V 20"/>
    <path style="stroke:#151515;stroke-width:1" d="M 999.68371,0 V 20"/>
    <text style="text-anchor:middle" x="43.026661" y="13.216023">
      <tspan x="43.07666" y="13.216023" style="font-size:14px">Jan</tspan>
    </text>
    <text style="text-anchor:middle" x="123.39" y="14.112">
      <tspan x="123.44" y="14.112" style="font-size:14px">Feb</tspan>
    </text>
    <text style="text-anchor:middle" x="206.14334" y="13.216023">
      <tspan x="206.19334" y="13.216023" style="font-size:14px">Mar</tspan>
    </text>
    <text style="text-anchor:middle" x="291.25668" y="13.216023">
      <tspan x="291.30667" y="13.216023" style="font-size:14px">Apr</tspan>
    </text>
    <text style="text-anchor:middle" x="375.97003" y="13.216023">
      <tspan x="376.02002" y="13.216023" style="font-size:14px">May</tspan>
    </text>
    <text style="text-anchor:middle" x="461.49335" y="13.216023">
      <tspan x="461.54333" y="13.216023" style="font-size:14px">Jun</tspan>
    </text>
    <text style="text-anchor:middle" x="539.78668" y="14.112025">
      <tspan x="539.83667" y="14.112025" style="font-size:14px">Jul</tspan>
    </text>
    <text style="text-anchor:middle" x="620.85004" y="13.216023">
      <tspan x="620.90002" y="13.216023" style="font-size:14px">Aug</tspan>
    </text>
    <text style="text-anchor:middle" x="705.67334" y="13.552025">
      <tspan x="705.72333" y="13.552025" style="font-size:14px">Sep</tspan>
    </text>
    <text style="text-anchor:middle" x="788.53668" y="13.552025">
      <tspan x="788.58667" y="13.552025" style="font-size:14px">Oct</tspan>
    </text>
    <text style="text-anchor:middle" x="872.36005" y="13.216023">
      <tspan x="872.41003" y="13.216023" style="font-size:14px">Nov</tspan>
    </text>
    <text style="text-anchor:middle" x="957.80334" y="13.216023">
      <tspan x="957.85333" y="13.216023" style="font-size:14px">Dec</tspan>
    </text>
</svg>`
var today_line = ((Text(Now(), 'DDD')) / 365) * 1000
var project_start_date = $datapoint.PROJECT_START_DATE;
var project_end_date = $datapoint.PROJECT_END_DATE;
var days_difference = DateDiff(project_end_date, project_start_date, 'days');
var timeline_length = (days_difference / 365) * 1000
var first_day_of_year = Date(Year($datapoint.PROJECT_START_DATE), 0, 1);
var project_start_date = $datapoint.PROJECT_START_DATE;
var days_difference = DateDiff(project_start_date, first_day_of_year, 'days');
var timeline_start = (days_difference / 365) * 1000
var timeline_html = `<svg width="100%" height="auto" viewBox="0 0 1000 50">
    <rect
        style="fill: ` + timeline_color + `"
        id="rect1"
        width="` + timeline_length + `"
        height="20"
        x="` + timeline_start + `"
        y="15"
        ry="7.5" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 0.5,0 V 50" id="path1" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 83.75,0 V 50" id="path2" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 167,0 V 50" id="path3" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 250.25,0 V 50" id="path4" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 333.5,0 V 50" id="path5" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 416.75,0 V 50" id="path6" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 500,0 V 50" id="path7" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 583.25,0 V 50" id="path8" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 666.5,0 V 50" id="path9" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 749.75,0 V 50" id="path10" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 833,0 V 50" id="path11" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 916.25,0 V 50" id="path12" />
    <path style="stroke: #a6a6a6; stroke-width: 1; stroke-dasharray: 10, 10" d="M 999.5,0 V 50" id="path13" />
    <path style="stroke: #40403a; stroke-width: 2" d="M ` + today_line + `,0 V 50" id="path14" />
</svg>`

var timeline_return = When(
  $datapoint.ACTIVITY_TYPE == "Header", header_timeline_html,
  $datapoint.ACTIVITY_TYPE == "Project", timeline_html,
  $datapoint.ACTIVITY_TYPE == "Task", timeline_html, "");


return {
  cells: {
    PROJECT_NAME: {
      displayText: name_return,
      textColor: '',
      backgroundColor: background_color,
      textAlign: 'left',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },

    PROJECT_STATUS: {
      displayText: status_return,
      textColor: '',
      backgroundColor: background_color,
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },

    PROJECT_START_DATE: {
      displayText: start_date_return,
      textColor: '',
      backgroundColor: background_color,
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },

    PROJECT_END_DATE: {
      displayText: end_date_return,
      textColor: '',
      backgroundColor: background_color,
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },

    PROJECT_DURATION: {
      displayText: duration_return,
      textColor: '',
      backgroundColor: background_color,
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },

    GANTT_VISUAL: {
      displayText: timeline_return,
      textColor: '',
      backgroundColor: background_color,
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },

  }
}
