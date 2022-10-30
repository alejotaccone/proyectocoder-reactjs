import { toast } from "react-toastify";

const ToastifyDelete = () => {
  toast.success("¡Eliminado Del carrito!", {
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

export default ToastifyDelete;
