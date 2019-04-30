public with sharing class samplePagerCtrl {
   @AuraEnabled
 public static AccountPagerWrapper fetchAccount(Decimal pageNumber ,Integer recordToDisply) {
      Integer pageSize = recordToDisply;
      Integer offset = ((Integer)pageNumber - 1) * pageSize;
    
      AccountPagerWrapper obj =  new AccountPagerWrapper();
   
        obj.pageSize = pageSize;
        obj.page = (Integer) pageNumber;
        obj.total = [SELECT count() FROM account];
        obj.accounts = [SELECT Id, Name,Phone FROM Account ORDER BY Name LIMIT :recordToDisply OFFSET :offset];
   
        return obj;
     }
    @AuraEnabled
    public static List<Account> insertAcc (){
        List<Account> accList = new List<Account>();

            for(integer i=1; i<500; i++){
                 Account acc = new Account();
                 acc.Name='TestAccount'+i;
                 accList.add(acc);
            }
        try {
           // Database.upsert(accList);
           // upsert accList;
            
        }catch(DMLException e){
            throw new AuraHandledException(e.getDMLMessage(0)); 
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage()); 
        }

        return accList;
    }

   
 public class AccountPagerWrapper {
    @AuraEnabled public Integer pageSize {get;set;}
    @AuraEnabled public Integer page {get;set;}
    @AuraEnabled public Integer total {get;set;}
    @AuraEnabled public List<Account> accounts {get;set;}
   }
}