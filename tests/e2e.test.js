require('../nightwatch.conf.js');
let {values, newValues } = require("../config.js")

module.exports = {
    'Validate that a user can sign up successfully' : function(browser)  {
      browser.page.pages()
      
        .navigate()
        .validateForm()
        .fillInForm(values.firstName, 
          values.lastName, 
          values.email, 
          values.phoneNumber,
          values.password, 
          values.passwordConfirmation)
        .submit()
        .validateHomePage(values.pageTitle);
        
      
    },


    'Validate that users can change their profile data successfully' : function(browser)  {
      browser.page.pages()

      .navigateToProfilePage()
      .validateProfilePage(newValues.pageTitle, newValues.url)
      .fillInProfileForm(newValues.firstName, 
        newValues.lastName, 
        newValues.email, 
        newValues.day, 
        newValues.month, 
        newValues.year, 
        newValues.address, 
        newValues.zipCode, 
        newValues.city, 
        newValues.state, 
        newValues.jobTitle, 
        newValues.companyName)
      .save()

      browser.end();
      
    }
  };
