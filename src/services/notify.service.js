import { toast } from 'react-toastify';

class NotifyService {
    constructor() {
        toast.configure()
    }

    send(message, args = {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'my-toast-container',
        hideProgressBar: true,
        toastClassName: 'my-toast',
        bodyClassName: 'my-toast-body',
        autoClose: 1500,
        closeButton: false,
    }) {
        console.log(message, args);
        toast(message, args);
    }
}

export { NotifyService }