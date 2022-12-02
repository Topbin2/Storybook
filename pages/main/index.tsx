import Logo from "@public/vercel.svg";
import Image from "next/image";

const Main = () => {
  return (
    <div>
      MainPage
      <Image src={Logo} alt="logo" width={100} height={100} />
    </div>
  );
};

export default Main;
