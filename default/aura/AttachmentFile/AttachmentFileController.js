({

    doInit: function(component, event, helper) {
      
        var parentId = component.get("v.parentId")
        var action = component.get("c.filesId");
    
        action.setParams({
           "parentsId": parentId 
        });
        
        action.setCallback(this, function(response) {  
           var result = response.getReturnValue();
           component.set("v.files", result);
        });
        $A.enqueueAction(action);
   
     },
    doSave: function(component, event, helper) {
        if (component.find("fileId").get("v.files").length > 0) {
            helper.uploadHelper(component, event);
        } else {
            alert('Please Select a Valid File');
        }
    },
 
    handleFilesChange: function(component, event, helper) {
        var fileName = 'No File Selected..';
        if (event.getSource().get("v.files").length > 0) {
            fileName = event.getSource().get("v.files")[0]['name'];
        }
        component.set("v.fileName", fileName);
    },
})
