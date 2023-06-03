function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dNUcruG5R6":
        Script1();
        break;
  }
}

function Script1()
{
  const userId = Math.random().toString(36).substring(2);
const timeVisited = new Date().toLocaleString('en-US');
const player = GetPlayer();
const timeSpent = player.GetVar("NumericEntry");//Storyline variables assigned to JS variables
//display it in an alert
//alert("Hello");
alert("Thank you for graciously investing "+(timeSpent/1000)+"  seconds of your precious time to read about me until now. If you're intrigued to learn more, I invite you to click on my LinkedIn link.");
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://prod-175.westeurope.logic.azure.com:443/workflows/13cd8a1f411f44039f1f6fe13a5b7781/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Dla8uEoCmZYeSXvBTB4MnI6fl76fa6H7T74N3dludTo", true); 
// Replace with your endpoint URL
xhr.setRequestHeader("Content-Type", "application/json");
var data = JSON.stringify(
{ 
"userId": userId,
"timeVisited": timeVisited,
"timeSpent": timeSpent
});
xhr.send(data);
}

