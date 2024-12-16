import { FooterLogin } from "../components/footer";
import { NavbarLogin } from "../components/navbar";
import { MainLogin } from "../components/main";

interface Props {
  darkMode: () => void
  toggleDarkMode: boolean;
};

function LoginLayout({darkMode, toggleDarkMode}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLogin darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainLogin />
      <FooterLogin />
    </div>
  )
}

export default LoginLayout;