var text_color = When(
    $datapoint.PRIMARY_COLOR == "#0067A4", "#ffffff",
    $datapoint.PRIMARY_COLOR == "#1AA658", "#ffffff",
    $datapoint.PRIMARY_COLOR == "#864C38", "#ffffff",
    $datapoint.PRIMARY_COLOR == "#ACDCEF", "#000000",
    $datapoint.PRIMARY_COLOR == "#C53883", "#ffffff",
    $datapoint.PRIMARY_COLOR == "#DA2428", "#ffffff",
    $datapoint.PRIMARY_COLOR == "#EC8B2B", "#ffffff",
    $datapoint.PRIMARY_COLOR == "#FFF004", "#000000", ""
)



var html = `<div style="background-color:#f6f7eb;box-shadow:0 0px 5px rgba(0, 0, 0, 0.25);padding:10px;width:239px;">
    <div style="align-items:center;border:1px solid black;display:grid;grid-template-columns:repeat(1, 1fr);justify-items:center;">
        <div style="background-color:` + $datapoint.PRIMARY_COLOR + `;color:` + text_color + `;border:1px solid black;margin-top:10px;padding:5px;text-align:center;width:80%;">
            <div>
                TITLE DEED
            </div>
            <div>
                <strong>` + $datapoint.NAME + `</strong>
            </div>
        </div>
        <div style="padding:5px;text-align:center;">
            <div>
                RENT $50
            </div>
        </div>
        <div style="align-items:center;display:grid;grid-template-columns:repeat(2, 1fr);">
            <div style="justify-self:start;">
                With 1 House
            </div>
            <div style="justify-self:end;">
                $ 200.
            </div>
            <div style="justify-self:start;">
                With 2 Houses
            </div>
            <div style="justify-self:end;">
                600.
            </div>
            <div style="justify-self:start;">
                With 3 House
            </div>
            <div style="justify-self:end;">
                1400.
            </div>
            <div style="justify-self:start;">
                With 4 House
            </div>
            <div style="justify-self:end;">
                1700.
            </div>
        </div>
        <div style="padding:5px;text-align:center;">
            <div>
                With HOTEL $2000
            </div>
            <div>
                Mortgage Value $200.
            </div>
            <div>
                Houses cost $200. each
            </div>
            <div>
                Hotels, $200. plus 4 houses
            </div>
        </div>
        <div style="padding:5px;text-align:center;">
            <div style="font-size:8px;">
                If the player owns ALL the Lots of any Color-Group, the rent is Double on Unimproved Lots in that group.
            </div>
        </div>
    </div>
</div>`

return {
  textColor: '',
  backgroundColor: '',
  separatorColor:'#f4f0ef',
  selectionColor: '',
  selectionTextColor: '',
  attributes: {
    attribute1: html
  }
}
