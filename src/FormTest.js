export class FormTest {

  constructor() {


  }

  autoInput(values) {

    for (var name in values) {
      this.inputValue(name, values[name]);
    }
  }

  inputValue(name, value) {
    let el = document.querySelector('[name="' + name + '"]');
    if (el == null) return;

    var inputType = null;

    switch (el.tagName.toUpperCase()) {
      case 'INPUT':
        let type = el.getAttribute('type').toLowerCase();

        //hiddenの場合はcheckboxの空送信で入れている可能性あり
        if (type == 'hidden') {
          let elements = document.querySelectorAll('input[name="' + name + '"]');
          elements.forEach((e) => {
            if (e.getAttribute('type').toLowerCase() == 'checkbox') {
              type = 'checkbox';
            }
          });
        }

        switch (type) {
          case 'text':
          case 'email':
          case 'password':
            inputType = 'normal';
            break;
          case 'radio':
            inputType = 'radio';
            break;
          case 'checkbox':
            inputType = 'checkbox';
            break;
        }
        break;
      case 'TEXTAREA':
        inputType = 'normal';
        break;
      case 'SELECT':
        inputType = 'normal';
        break;
      default:
        return false;
    }

    switch (inputType) {

      case 'normal':
        el.value = value;
        break;

      case 'radio':
        let radios = document.querySelectorAll('[name="' + name + '"]');
        radios.forEach((el) => {
          el.checked = false;
        });
        radios.forEach((el) => {
          if (el.value == value) {
            el.checked = true;
          }
        })
        break;

      case 'checkbox':
        let checks = document.querySelectorAll('[name="' + name + '"]');
        checks.forEach((el) => {
          el.checked = false;
        });
        checks.forEach((el) => {
          for (let i = 0; i < value.length; i++) {
            let val = value[i];
            if (el.value == val) {
              el.checked = true;
            }
          }
        })
        break;


    }

  }


}