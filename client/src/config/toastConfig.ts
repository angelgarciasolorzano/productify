import { ToastPosition } from "react-hot-toast";

interface ToastConfigParams {
  darkMode: boolean;
  position: ToastPosition;
};

const toastConfig = ({ darkMode, position }: ToastConfigParams) => ({
  position,
  reverseOrder: true,
  toastOptions: {
    style: {
      background: darkMode ? '#374151' : '#FFFFFF',
      color: darkMode ? '#F8FAFC' : '#000000',
    },
  }
});

export default toastConfig;