import { ToasterProps } from "react-hot-toast";
import { themeStore } from "@/store";

function toastConfig(): ToasterProps {
  const theme = themeStore((state) => state.theme);

  return {
    position: "top-right",
    reverseOrder: true,
    toastOptions: {
      success: theme ? {
        style: {
          color: "white",
          background: "rgba(0, 71, 1, 0.8)",
          backdropFilter: "blur(7px) saturate(100%)",
          WebkitBackdropFilter: "blur(7px) saturate(100%)",
          border: "1px solid #0b6c08"
        }
      }: {},
      error: theme ? {
        style: {
          color: "#fff0f0",
          background: "rgba(71, 0, 0, 0.8)",
          backdropFilter: "blur(7px) saturate(100%)",
          WebkitBackdropFilter: "blur(7px) saturate(100%)",
          border: "1px solid rgb(146, 10, 10)"
        }
      } : {
        style: {
          color: "rgb(215, 0, 0)",
          background: "rgb(255, 221, 221)",
          border: "1px solid rgb(255, 192, 192)"
        }
      }
    }
  }
};

export default toastConfig;