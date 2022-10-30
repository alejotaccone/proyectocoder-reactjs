import { toast } from "react-toastify";

const ToastifyDeleteAll = () => {
  toast.success("¡Todo El Carrito Se Ha Eliminado!", {
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

export default ToastifyDeleteAll;
