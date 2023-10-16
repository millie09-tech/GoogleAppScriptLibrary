function iterateThroughRows() {
 var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
 var data = sheet.getDataRange().getValues();
 var i =1; 
var date1; 
var date2;
data.forEach(function (row) {
   date1 = new Date(row[0]); 
   date2 = new Date(row[2]); 
Logger.log(date1);
Logger.log(date2);  
  if(date1.valueOf() == date2.valueOf()){
    Logger.log("Same"); 
  }else {
    Logger.log("Not same"); 
    Logger.log(row);
    sheet.deleteRow(i); 
    i--;
  }
   Logger.log(i); 
   i++; 
  
 });

}
