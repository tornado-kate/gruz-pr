import IMask from 'imask';

export const initFancyForm = function (link = '', options) {
    let instance = Fancybox.show(
        [
            {
                src: link,
                groupAttr: false,
                mainClass: 'popup',
                autoFocus: false,
                dragToClose: false,
                closeButton: false,
                type: 'ajax',
            }
        ],
        {
            on: {
                done: (instance, current) => {
                    const popupForm = $(current.$content).find('form')[0]
                    formInit(popupForm, function () {
                        console.log(instance);
                        instance.close(true)
                    })
                },
            },
        }
    )
}

export const formInit = function (form, callbackAjax) {
    initPhoneMask('[data-field=phone]');


    form.addEventListener('submit', function (event) {
        event.preventDefault();

    })
}
function initPhoneMask(el) {
    const phones = document.querySelectorAll(el)

    phones.forEach(phone => {
        IMask(phone, {
            mask: '+7 (000) 000-00-00',
            prepare: (val, masked) => !masked.value && val === '8' ? "" : val
        });
    })
}