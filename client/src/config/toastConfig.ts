import { ToastPosition } from "react-hot-toast";

interface ToastConfigParams {
  theme: boolean;
  position: ToastPosition;
};

const toastConfig = ({ theme, position }: ToastConfigParams) => ({
  position,
  reverseOrder: true,
  toastOptions: {
    style: {
      background: theme ? '#374151' : '#FFFFFF',
      color: theme ? '#F8FAFC' : '#000000',
    },
  }
});

export default toastConfig;