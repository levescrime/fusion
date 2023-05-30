const validateEmail = (email) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

const validatePassword = (password) => {
    //no password check required
    return true;
}

const  validateServerAddress = (serverAddress) => {
    const addressPattern = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9\-]+(?:\.[a-z0-9\-]+)+(?:\/.*)?$/i;

    return addressPattern.test(serverAddress);
}

const validateServerPath = (val) => {
    const pathRegex = /^[a-zA-Z0-9/]+$/;

    return pathRegex.test(val);
}


const validatePort = (val) => {
    const portNumber = Number(val);
    return Number.isInteger(portNumber) && portNumber >= 0 && portNumber <= 65535;
}

export default {
    validatePort,
    validateServerPath,
    validateServerAddress,
    validatePassword,
    validateEmail
}