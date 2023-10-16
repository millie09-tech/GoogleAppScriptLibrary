# GoogleAppScriptLibrary
Over the years, I have worked extensively with Google Apps Script. Although, a lot of it has been for business purposes, which unfortunately I cannot share. Although, here is bits and pieces of functions I've writen which I can share. 

iterateThroughRows Function: 
This function in essence, allowed me to go through more than a 1000 points of stock opening and closing dates for two companies, Neste Oil and Air Canada. It filtered the date of each stock and made sure they were the same, so I was able to generate graphical data for both. 

assignEditUrls Function:
This function is a very common function used by Google Apps Script developers who want to integrate into Google Forms. It allows users to generate the Edit Link for the Google Forms directly in the spreadsheet. Therefore, owners of the spreadsheet can view the form later. This came in handy when I was working with a company who was using Google Forms and Google Sheets / Excel as their Quasi Customer Management System. They would input a customer through Google Forms and store it in a Google Spreadsheet, but needed to edit the customer from time to time. 

QuasiCRM Function:
This function allowed the company mentioned above during their transition to a new CMS. During the transition period, we were making API calls to the new CMS, although still using the old one. Certain fields such as hours for the customer needed to inputed to both the new CMS and spreadsheet. Therefore, multiple versions of this function were used. The one shown here allowed members of the sales team to input the information into the new CMS database by calling a PHP script on our web server. It leveraged link variables to do this by POSTing the information. 
