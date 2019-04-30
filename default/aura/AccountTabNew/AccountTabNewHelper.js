({
    insertAcc: function(component,helper){

        var action = component.get("c.insertAcc");
        action.setCallback(this, function(response) {
            var result = response.getReturnValue();
        });
        $A.enqueueAction(action);
    },

    getAccounts: function(component, page, recordToDisply) {
      
       var action = component.get("c.fetchAccount");
      
       action.setParams({
          "pageNumber": page,
          "recordToDisply": recordToDisply
       });
      
       action.setCallback(this, function(response) {
          var result = response.getReturnValue();
          component.set("v.Accounts", result.accounts);
          component.set("v.page", result.page);
          component.set("v.total", result.total);
          component.set("v.pages", Math.ceil(result.total / recordToDisply));
  
       });
       
       $A.enqueueAction(action);
    }
 })