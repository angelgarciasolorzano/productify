import { LoginPage } from "../pages";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function LoginLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LoginPage />
      <Footer />
    </div>
  )
}

export default LoginLayout;