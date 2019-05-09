import LocalizedStrings from 'react-native-localization';
 
// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');
 
 export let strings = new LocalizedStrings({
  "English": {
    phone_number: "Phone Number",
    register: "REGISTER/LOGIN",
    plumber: "Plumber",


},
"Arabic": {
    phone_number: "رقم الهاتف",
    register: "التسجيل/الدخول",
    plumber: "سباك",
},
 "en-US":{
   how:"How do you want your egg today?",
   boiledEgg:"Boiled egg",
   softBoiledEgg:"Soft-boiled egg",
   choice:"How to choose the egg",
   login:"Login",
   forgot_password: "Forgot Password?",
   username:"Username",
	 email: "Email",
	 password: "Password",
	 phone:"Phone",
	 country:"Select Country",
	 register:"Register",
	 verify_by_email:"Enter registered E-mail id",
	 send_Otp:"Send OTP",
	 cancel:"Cancel",
	 enter_code:"Enter Code",
	 verify_now:"Verify now",
	 accountlogin:"Login to your Account",
	 welcome:"Welcome to Moms Up",
	 terms_and_conditions: "By clicking the button below, you agree to our Terms of Service & Privacy Policy.",
	 email_is_required: "Email is required",
 },
 en:{
   how:"How do you want your egg today?",
   boiledEgg:"Boiled egg",
   softBoiledEgg:"Soft-boiled egg",
   choice:"How to choose the egg",
   login:"Login",
 },
 it: {
   how:"Come vuoi il tuo uovo oggi?",
   boiledEgg:"Uovo sodo",
   softBoiledEgg:"Uovo alla coque",
   choice:"Come scegliere l'uovo"
 }
});