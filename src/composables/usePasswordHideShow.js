import { ref } from "vue";

let PwToText = ref();
let hideShowIcon = ref();
let hideShow = () => {
    if (hideShowIcon.value.classList.value === "fa-solid fa-eye-slash") {
        PwToText.value.type = "text";
        hideShowIcon.value.classList.value = "fa-solid fa-eye";
    } else {
        PwToText.value.type = "password";
        hideShowIcon.value.classList.value = "fa-solid fa-eye-slash";
    }
};

// Repeat Password
let hideShowIconRep = ref();
let PwToTextRep = ref();
let hideShowRep = () => {
    if (hideShowIconRep.value.classList.value === "fa-solid fa-eye-slash") {
        hideShowIconRep.value.classList.value = "fa-solid fa-eye";
        PwToTextRep.value.type = "text";
    } else {
        hideShowIconRep.value.classList.value = "fa-solid fa-eye-slash";
        PwToTextRep.value.type = "password";
    }
};

let usePasswordHideShow = () => {
    return { PwToText, hideShowIcon, hideShow };
};
let usePasswordHideShowRep = () => {
    return { PwToTextRep, hideShowIconRep, hideShowRep };
};

export { usePasswordHideShow, usePasswordHideShowRep };
