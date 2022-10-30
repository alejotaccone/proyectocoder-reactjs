import { toast } from "react-toastify";

const ToastifyAdd = () => {
  toast.success("¡Agregado al carrito!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export default ToastifyAdd;
