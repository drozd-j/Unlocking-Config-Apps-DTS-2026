var html = `<div style="width: 386px">
    <div style="background-color: rgba(181, 221, 146, .35);border-radius:5px;border:1px solid #426820;width:100%;">
        <details>
        <summary style="align-items:center;display:grid;grid-template-columns:15% 47% 19% 19%;grid-template-rows:64px;">
            <img style="justify-self: center" src="https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/information-16.svg" alt="icon" width="32" height="32">
            <span style="color:#575757;"><strong>PRIORITY ITEM #1</strong></span>
            <span style="border: solid 1px #426820; background-color: rgba(181, 221, 146, .35); border-radius: 5px; text-align: center;padding-top: 5px; padding-bottom: 5px; color: #426820"><strong>Good</strong></span>
            <img style="justify-self: center" src="https://cnra.maps.arcgis.com/sharing/rest/content/items/1978f5fab19f4ee38f5bfc6ad3a2e741/data" alt="icon">
        </summary>
            <div style="background-color:#ffffff;color:#444;padding:10px;">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet.</p>
            <p><strong>Data: </strong><a style="color:#00619B;" target="_blank" rel="noopener noreferrer" href="https://esri.com">Data Source</a></p>
            <p style="text-align: right; color: #767676; margin: 0px"><i>(Last Update: 2026)</i></p>
            </div>
        </details>
    </div>
</div>`

return { 
	type : 'text', 
	text : html //this property supports html tags 
}
