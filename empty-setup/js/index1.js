Vue.use(VueMaterial)

var App = new Vue({
  el: '#app',
  data: () => ({
    checkbox1:[],
    radio1: [],
    name: '',
    nameValid: false,
    mail: '',
    mailValid: false,
    password: '',
    passwordValid: false,
    phoneValid: false,
    phone: '',
    invalidMessage: 'Invalid mail',
    invalidNameMessage: 'Invalid name',
    invalidPasswordMessage: 'Invalid Password',
    invalidPhoneMessage: 'Invalid Password'
  }),
  watch: {
    mail() {
      var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      this.mailValid = emailRegex.test(this.mail);
      if (this.mailValid) {
        this.invalidMessage = 'Valid mail';
      } else {
        this.invalidMessage = 'Invalid mail';
      }
    },
    name() {
      var nameRegex = /^[a-z ,.'-]+$/;
      this.nameValid = nameRegex.test(this.name);
      if (this.nameValid) {
        this.invalidNameMessage = 'Valid name';
      } else {
        this.invalidNameMessage = 'Invalid name';
      }
    },
    password() {
      var passwordRegex = /^(?=.*\d).{4,8}$/;
      this.passwordValid = passwordRegex.test(this.password);
      if (this.passwordValid) {
        this.invalidPasswordMessage = 'Valid password';
      } else {
        this.invalidPasswordMessage = 'Invalid password';
      }
    },
    phone() {
      var phoneRegex = /^\d{10}$/;
      this.phoneValid = phoneRegex.test(this.phone);
      if (this.phoneValid) {
        this.invalidPhoneMessage = 'Valid phone';
      } else {
        this.invalidPhoneMessage = 'Invalid phone';
      }
    }
  }
})

