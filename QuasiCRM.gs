function QuasiCRM(){
var event = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
var data = event.getDataRange().getValues();
var i = event.getRange(1, 60).getValue();
//Logger.log(i); 
var what = event.getRange(i, 7).getValue();
  
var url = 'LINK?what=';
var url1 = (url.concat(what));
var UrlFetch = UrlFetchApp.fetch(url1, {'muteHttpExceptions': true});
var json = UrlFetch.getContentText();
var datas = JSON.parse(json);

var dot = datas.some(item => item.telephone===what);
if(dot===false){
var str1 = 'LINK/'; 
var link = (str1.concat("?name=", data[i-1][1], "&address=", data[i-1][2], "&city=", data[i-1][3],"&province=",data[i-1][4],"&postalcode=",data[i-1][5], "&country=Canada&phonenumber=", data[i-1][6], "&faxnumber=", data[i-1][7], "&website=", data[i-1][8], "&monday=", data[i-1][10], "&tuesday=", data[i-1][11], "&wednesday=", data[i-1][12], "&thursday=", data[i-1][13], "&friday=", data[i-1][14], "&saturday=", data[i-1][15], "&sunday=", data[i-1][16]));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
Logger.log(link);
var lol = event.getRange(i, 60).setValue(link);
  var name = 'link'; 
  var html = '<html><body><a href="'+link+'" target="blank" onclick="google.script.host.close()">'+name+'</a></body></html>';
  var ui = HtmlService.createHtmlOutput(html)
  SpreadsheetApp.getUi().showModelessDialog(ui,"demo");
}else{
var str100 = 'Already in database';
var lol1 = event.getRange(i, 60).setValue(str100);
datas.forEach(function(obj){ 
var editval = 'LINK/TABLE/EDIT/form2.php?id='; 
var editval1 =(editval.concat(bro));
var lol2 = event.getRange(i, 60).setValue(editval1);
var user2hours = 'LINK/storehours.php?id=';
var user2hours1 = (user2hours.concat(bro));
var lol3 = event.getRange(i, 61).setValue(user2hours1);
    var name = 'Editvalues'; 
    var name1 = 'Edituser2'; 
  var html = '<html><body><a href="'+user2hours1+'" target="blank" onclick="google.script.host.close()">'+name1+'</a> <a href="'+editval1+'" target="blank" onclick="google.script.host.close()">'+name+'</a></body></html>';
  var ui = HtmlService.createHtmlOutput(html)
  SpreadsheetApp.getUi().showModelessDialog(ui,"demo");

});
                                      
Logger.log(str100); 
}
}
