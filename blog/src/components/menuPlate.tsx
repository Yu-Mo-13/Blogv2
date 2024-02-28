import { topMenu } from "@/constants/const";
import Link from "next/link";

export const MenuPlate = () => {
  return (
    <div id="menu" className="flex justify-center">
      {topMenu.map((menu, index) => {
        return (
          <Link href={`/${menu.toLowerCase()}`} key={index}>
            <div className="flex flex-col m-4">
              <div className="flex justify-center">
                <h2 className="text-2xl hover:underline">{menu}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
