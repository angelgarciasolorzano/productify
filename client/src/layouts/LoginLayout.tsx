import { FooterLogin } from "../components/footer";
import { NavbarLogin } from "../components/navbar";
import { MainLogin } from "../components/main";

function LoginLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLogin />
      <MainLogin />
      <FooterLogin />
    </div>
  )
}

export default LoginLayout;