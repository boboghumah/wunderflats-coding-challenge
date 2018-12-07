let signUpCommands = {
    validateForm: function() {
        return this.waitForElementVisible('body', 1000)
            .waitForElementVisible('@signUpLink', 3000)
            .click('@signUpLink')
			.verify.visible('@firstName')
			.verify.visible('@lastName')
            .verify.visible('@email')
            .verify.visible('@signUpButton')
            .verify.visible('@phoneNumber')
            
			
	},
	fillInForm: function(firstName, lastName, email, phoneNumber, password, passwordConfirmation) {
        return this.waitForElementVisible('body', 1000)           
            .setValue('@firstName', firstName)
            .setValue('@lastName', lastName)
            .setValue('@email', email)
            .click('@phoneNumberCountry')
            .click('@phoneNumberCountryValue')
            .setValue('@phoneNumber', phoneNumber)
            .setValue('@password', password)
            .setValue('@passwordConfirmation', passwordConfirmation)
            .click('@termsAndCondition')
	},
	submit: function() {
		return this
			.click('@signUpButton')
	},
	validateHomePage: function(pageTitle) {
        return this.waitForElementVisible('body', 2000)
            .waitForElementVisible('@wunderFlatsLogo', 7000)
            .assert.title(pageTitle)
	}
};

let updateProfileCommands = {
    navigateToProfilePage: function() {
        return this.waitForElementVisible('@profileLink', 3000)
            .click('@profileLink')
			.waitForElementVisible('@accountLink', 2000)
            .click('@accountLink')
			
	},
    validateProfilePage: function(pageTitle, url) {
        return this.waitForElementVisible('body', 3000)
            .assert.title(pageTitle)
            .assert.urlEquals(url)
            .verify.visible('@language')
			.verify.visible('@firstName')
			.verify.visible('@lastName')
            .verify.visible('@email')
            .verify.visible('@phoneNumber')
            .verify.visible('@nationality')
            .verify.visible('@country')
			.verify.visible('@jobTitle')
            .verify.visible('@companyName')
            .verify.visible('@saveButton')
            .verify.visible('@day')
            .verify.visible('@month')
            .verify.visible('@address')
            .verify.visible('@zipCode')
            .verify.visible('@city')
            .verify.visible('@state')
            .verify.visible('@saveButton')
			
	},
	fillInProfileForm: function(firstName, lastName, email, day, month, year, address, zipCode, city, state, jobTitle, companyName) {
        return this.waitForElementVisible('body', 1000)           
            .click('@language')
            .click('@languageValue')
            .clearValue('@firstName')
            .clearValue('@lastName')       
            .clearValue('@phoneNumber')
            .setValue('@firstName', firstName)
            .setValue('@lastName', lastName)
            .clearValue('@email')
            .setValue('@email', email)
            .click('@phoneNumberCountry')
            .click('@phoneNumberCountryValue')
            .click('@nationality')
            .click('@nationalityValue')
            .setValue('@day', day)
            .setValue('@month', month)
            .setValue('@year', year)
            .setValue('@address', address)
            .setValue('@zipCode', zipCode)
            .setValue('@city', city)
            .setValue('@state', state)
            .click('@country')
            .click('@countryValue')
            .setValue('@jobTitle', jobTitle)
            .setValue('@companyName', companyName)
	},
	save: function() {
		return this.waitForElementVisible('@saveButton', 1000)
			.click('@saveButton')
	},
	
};


module.exports = {
    commands: [signUpCommands,updateProfileCommands],
    
    url: 'https://en-master.wunderflats.xyz/my/account',
    elements: {
        signUpLink:{
            selector:'a.Modal-footer-link'
        },
        firstName:{
            selector:'input[id=firstName]'
        },
        lastName:{
            selector:'input[id=lastName]'
        },
        email:{
            selector:'input[id=email]'
        },
        phoneNumberCountry:{
            selector:'select.CustomPhoneNumberInput-country-select'
        },
        phoneNumberCountryValue:{
            selector:'option[value="NG"]'
        },
        phoneNumber:{
            selector:'input.CustomPhoneNumberInput-textInput.qa-phoneNumber'
        },
        password:{
            selector:'input[name=password]'
        },
        passwordConfirmation:{
            selector:'input[name=passwordConfirmation]'
        },
        termsAndCondition:{
            selector:'input[name=tos]'
        },
        signUpButton:{
            selector:'button.Button--primary'
        },
        wunderFlatsLogo:{
            selector:'div.WunderflatsLogo'
        },
        profileLink:{
            selector:'label.AppHeaderUserNavigation-toggle'
        },
        accountLink:{
            selector:'a.AppHeader-link.AppHeader-link--myAccount'
        },
        language:{
            selector:'select[name=language]'
        },
        languageValue:{
            selector:'option[value="de"]'
        },
        nationality:{
            selector:'select[name=nationality]'
        },
        nationalityValue:{
            selector:'option[value="NG"]'
        },
        day:{
            selector:'input.DateTextInput-day'
        },
        month:{
            selector:'input.DateTextInput-month'
        },
        year:{
            selector:'input.DateTextInput-year'
        },
        address:{
            selector:'input[id=addressLine1]'
        },
        zipCode:{
            selector:'input[id=zipCode]'
        },
        city:{
            selector:'input[id=city]'
        },
        state:{
            selector:'input[id=region]'
        },
        country:{
            selector:'select[id=addressCountry]'
        },
        countryValue:{
            selector:'option[value="NG"]'
        },
        jobTitle:{
            selector:'input[id=jobTitle]'
        },
        companyName:{
            selector:'input[id=companyName]'
        },
        saveButton:{
            selector:'button.UserProfileForm-submitButton'
        },
    
    }


    
  };

