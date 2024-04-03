import FooterImage from "public/footer.png";
import Image from "next/image";
import moment from "moment";
import { version } from "package.json";

export const Footer = () => {
  return (
    <footer className="w-full py-12">
      <div className="flex flex-col pt-4 text-[#898989] items-center">
        <Image src={FooterImage} alt={"bunch of flowers"} className={"h-48 w-auto"}/>
        <div className="col-span-2 text-sm flex flex-col text-center">
          <p>© 2022 - {moment().format("YYYY")} Emma Campbell</p>
          <p>v{version}</p>
        </div>
      </div>
    </footer>
  );
};
