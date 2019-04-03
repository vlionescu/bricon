const isText = text =>  /^(^$|^[a-zA-Z0-9., !?$]+)$/.test(text);

const isEmail = email => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);

const isURL = url => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(url);

const isNumber = number => /[0-9]/.test(number);
export default {
    isText,
    isEmail,
    isURL,
    isNumber,
}
