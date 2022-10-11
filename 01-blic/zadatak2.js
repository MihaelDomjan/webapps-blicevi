
function string (getFirstWord) (string text, "Java script i nije tolko los") {

     index = text.indexOf(' ');
  
    if (index > -1) { 
  
      return text.substring(0, index).trim(); 
  
    } else {
  
      return text; 
    }
  }