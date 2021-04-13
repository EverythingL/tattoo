
document.addEventListener('DOMContentLoaded', () => {

    function formCheck() {
        const form = $('.form-body');
        form.addEventListener('submit', formSend);
        
        async function formSend(event) {
            event.preventDefault();
    
            let error = formValidate(form);
    
            let formData = new FormData(form);
            formData.append('image', formImage.files[0]);
    
            if (error === 0) {
                form.classList.add('_sending')
                form.classList.add('_sending');
                let response = await fetch ('sendmail.php', {
                    method: 'POST',
                    body: formData,
                });
                if (response.ok) {
                    let result = await responce.json();
                    alert(result.message);
                    formPreview.innerHTML = '';
                    form.reset();
                    form.classLest.remove('_sending')
                } else {
                    alert('Error');
                    form.classLest.remove('_sending')
                }
            } else {
                alert('Complete the required fields');
            }
        }
    
        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll('._req');
    
            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);
    
                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    } 
                }
            }
            return error;
        }
    
        function formAddError(input) {
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
        } 
        function formRemoveError(input) {
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
        } 
        function emailTest(input) {
            return !/^\w+([\.]?w+)*@\w+([\.]?w+)*(\.\w{2,8})+$/.test(input.value);
        }
    
        const formImage = $('#formImage');
        const formPreview = $('.file-preview');
    
        formImage.addEventListener('change', () => {
            uploadFile(formImage.files[0]);
        })
    
        function uploadFile(file) {
            if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
                alert('Only images!')
                formImage.value = '';
                return;
            }
            let maxFileSize = 2 * 1024 * 1024;
            if (file.size > maxFileSize) {
                alert(`Size of file is too big, (${((file.size / 10**6).toFixed(2))} mb) max size of file is: ${Math.floor(maxFileSize / 10**6)} mb`);
                return;
            }
    
            let reader = new FileReader();
            reader.onload = function(event) {
                formPreview.innerHTML = `<img src="${event.target.result}" alt="Photo">`;
            };
            reader.onerror = function (event) {
                alert('Error, file not found');
            }
            reader.readAsDataURL(file);
        }
    }

    function modalCheck() {
        const contactButtonModal = $('.contact-button-modal');
        const modalBody = $('.modal-body');
        const modal = $('.modal');
        const modalClose = $('.modal-close');
        
        function openModal() {
            modal.classList.add('open');
            document.addEventListener('keydown', escapeHandler);
        }
        function closeModal() {
            modal.classList.remove('open');
            document.removeEventListener('keydown', escapeHandler);
        }
        
        contactButtonModal.addEventListener('click', () => {
            openModal();
        })
        modal.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('modal-close') || 
            target.classList.contains('open')) {
                closeModal();
            }        
        })
    
        const escapeHandler = (event) => {
            if (event.keyCode === 27 || event.code === "Escape") {
                closeModal();
            }
        }
    }

    formCheck();
    modalCheck();
    
});