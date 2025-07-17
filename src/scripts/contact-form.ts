// Contact form handler with custom confirmation dialog

const showDialog = () => {
  const dialog = document.getElementById('confirmation-dialog') as HTMLElement;
  if (dialog) {
    dialog.classList.remove('hidden');
    const dialogContent = dialog.querySelector('.transform') as HTMLElement;
    if (dialogContent) {
      dialogContent.classList.remove('scale-95');
      dialogContent.classList.add('scale-100');
    }
  }
};

const hideDialog = () => {
  const dialog = document.getElementById('confirmation-dialog') as HTMLElement;
  if (dialog) {
    const dialogContent = dialog.querySelector('.transform') as HTMLElement;
    if (dialogContent) {
      dialogContent.classList.remove('scale-100');
      dialogContent.classList.add('scale-95');
    }

    setTimeout(() => {
      dialog.classList.add('hidden');
    }, 300);
  }
};

const handleSubmit = (evt: Event) => {
  evt.preventDefault();

  const myForm = evt.target as HTMLFormElement;
  if (!myForm || !(myForm instanceof HTMLFormElement)) {
    console.error('Contact form not found');
    return;
  }

  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData as any).toString(),
  })
    .then(() => {
      console.log('Form successfully submitted');
      showDialog();
      myForm.reset();
    })
    .catch((error: Error) => {
      console.error('Form submission error:', error);
      alert(
        'Es gab einen Fehler beim Senden Deiner Nachricht. Bitte versuche es erneut.'
      );
    });
};

// Initialize form handler
const form = document.querySelector("form[name='contact']") as HTMLFormElement;
if (form) {
  form.addEventListener('submit', handleSubmit);
} else {
  console.error('Contact form not found');
}

// Initialize dialog close handler
const closeButton = document.getElementById(
  'close-dialog'
) as HTMLButtonElement;
if (closeButton) {
  closeButton.addEventListener('click', hideDialog);
}

// Close dialog when clicking outside
const dialog = document.getElementById('confirmation-dialog') as HTMLElement;
if (dialog) {
  dialog.addEventListener('click', (e: Event) => {
    if (e.target === dialog) {
      hideDialog();
    }
  });
}

// Close dialog when pressing Escape key
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    const dialog = document.getElementById('confirmation-dialog') as HTMLElement;
    if (dialog && !dialog.classList.contains('hidden')) {
      hideDialog();
    }
  }
});
