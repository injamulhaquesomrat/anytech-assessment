import { cn } from "@/lib/utils";
import { ChevronDown, Globe } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DesktopNavbar = ({ isLanguageOpen }) => {
  return (
    <nav className="lg:flex items-center gap-8 hidden ">
      <ul className="flex items-center justify-between gap-5 text-base">
        <li className="cursor-pointer group relative px-6 py-3">
          <div className="flex items-center gap-1">
            <span>Solutions</span>
            <span>
              <ChevronDown
                size={20}
                className={cn(
                  "text-xs duration-150 transition-all",
                  isLanguageOpen ? "rotate-180" : ""
                )}
              />
            </span>
          </div>
          <div className="group-hover:block hidden p-4 pb-0 absolute top-10 min-w-52 left-0 bg-slate-50 text-accent-foreground rounded">
            <ul className="space-y-2">
              <li className="hover:text-blue-500">AnyCaas</li>
              <hr />
              <li className="hover:text-blue-500">AnyBaas</li>
              <hr />
              <li className="hover:text-blue-500">AnyPaas</li>
            </ul>
          </div>
        </li>
        <li className=" px-6 py-3">Services</li>
        <li className=" px-6 py-3">About Us</li>
      </ul>

      {/* language */}
      <Select>
        <SelectTrigger className="bg-transparent border-white rounded-full cursor-pointer gap-2 w-fit focus:outline-none focus:ring-0 focus:ring-offset-0">
          <span>
            <Globe size={20} className="text-xs" />
          </span>
          <span className="mr-auto uppercase">EN</span>
        </SelectTrigger>
        <SelectContent className="border rounded text-base p-2 w-fit">
          <SelectItem
            className="text-base px-2 py-1.5 cursor-pointer focus:bg-transparent focus:text-[#1f80f0] "
            value="Enlish"
          >
            EN (English)
          </SelectItem>
          <hr />
          <SelectItem
            className="text-base px-2 py-1.5 cursor-pointer focus:bg-transparent focus:text-[#1f80f0]"
            value="Thai"
          >
            TH (Thai)
          </SelectItem>

          <hr />
          <SelectItem
            className="text-base px-2 py-1.5 cursor-pointer focus:bg-transparent focus:text-[#1f80f0]"
            value="system"
          >
            ID (Bahasa Indonesia)
          </SelectItem>

          <hr />
          <SelectItem
            className="text-base px-2 py-1.5 cursor-pointer focus:bg-transparent focus:text-[#1f80f0]"
            value="system"
          >
            TW (Traditional Chinese)
          </SelectItem>
        </SelectContent>
      </Select>
    </nav>
  );
};

export default DesktopNavbar;
