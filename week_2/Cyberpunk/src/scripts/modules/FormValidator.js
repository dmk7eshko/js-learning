export class FormValidator {
  constructor(form) {
    this.form = form;
    this.nameInput = form.querySelector('#name');
    this.emailInput = form.querySelector('#email');
    this.errorMessages = form.querySelector('#errorMessages');
    this.loader = document.querySelector('#loader'); // Элемент лоадера

    this.form.querySelector('button').addEventListener('click', () => this.validate());
  }

  validate() {
    this.clearErrors();

    let errors = [];

    if (!this.validateName(this.nameInput.value)) {
      errors.push("Имя должно содержать только кириллицу, латиницу, пробел и знак дефис.");
      this.highlightField(this.nameInput, true);
    } else {
      this.highlightField(this.nameInput, false);
    }

    if (!this.validateEmail(this.emailInput.value)) {
      errors.push("Введите корректный Email.");
      this.highlightField(this.emailInput, true);
    } else {
      this.highlightField(this.emailInput, false);
    }

    if (errors.length > 0) {
      this.showErrors(errors);
      return false;
    } else {
      this.clearErrors();
      return true;
    }
  }

  validateName(name) {
    const nameRegex = /^[А-Яа-яЁёA-Za-z\s\-]+$/;
    return nameRegex.test(name);
  }

  validateEmail(email) {
    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  }

  highlightField(field, hasError) {
    if (hasError) {
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  }

  clearErrors() {
    if (this.errorMessages) {
      this.errorMessages.innerHTML = '';
    }
    this.highlightField(this.nameInput, false);
    this.highlightField(this.emailInput, false);
  }

  showErrors(errors) {
    if (this.errorMessages) {
      this.errorMessages.innerHTML = errors.join('<br>');
    }
  }

  submit() {
    if (this.validate()) {
      this.showLoader(true);
      setTimeout(() => {
        this.showLoader(false);
        alert("Форма успешно отправлена!");
        this.form.submit(); 
      }, 2000);
    }
  }

  showLoader(visible) {
    if (visible) {
      this.loader.style.display = 'block';
    } else {
      this.loader.style.display = 'none';
    }
  }

  static create(form) {
    return new FormValidator(form);
  }
}
