({

    doInit: function(component, event, helper) {
      
       var page = component.get("v.page") || 1;
       var recordToDisply = 20;  
       helper.getAccounts(component, page, recordToDisply);
       helper.insertAcc(component,helper);
  
    },
  
    navigate: function(component, event, helper) {
    
       var page = component.get("v.page") || 1;
       var direction = event.getSource().get("v.label");
       var recordToDisply = 20;  
       page = direction === "Previous Page" ? (page - 1) : (page + 1);
       helper.getAccounts(component, page, recordToDisply);
  
    },
  
    onSelectChange: function(component, event, helper) {
       	 
       var page = 1
      var recordToDisply = 20;  
       helper.getAccounts(component, page, recordToDisply);
    },
   
 })