import { FaGithub, FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { containerVariants, itemVariants } from "../../animation/motionVariants";
import { motion } from "framer-motion";

function FooterLogin() {
  return (
    <footer className="py-6 bg-slate-100 duration-300 dark:bg-bgPrimary-dark">
      <motion.div
        className="container mx-auto flex justify-center items-center space-x-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://github.com"
          className="dark:text-white"
          variants={itemVariants}
        >
          <FaGithub size={24} />
        </motion.a>

        <motion.a
          href="https://facebook.com"
          className="dark:text-white"
          variants={itemVariants}
        >
          <FaFacebook size={24} />
        </motion.a>

        <motion.a
          href="https://wa.me/yourphonenumber"
          className="dark:text-white"
          variants={itemVariants}
        >
          <FaWhatsapp size={24} />
        </motion.a>

        <motion.a
          href="https://linkedin.com"
          className="dark:text-white"
          variants={itemVariants}
        >
          <FaLinkedin size={24} />
        </motion.a>
      </motion.div>
    </footer>
  );
}

export default FooterLogin;