"use client";

import { useState } from "react";
import { navItems } from "@/data/nav-items";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SubNav() {
  const [isActive, setIsActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  interface NavItem {
    path: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }

  const NavLink = ({
    item,
    isMobile = false,
  }: {
    item: NavItem;
    isMobile?: boolean;
  }) => {
    const Icon = item.icon;
    return (
      <a
        key={item.path}
        href={item.path}
        onClick={() => {
          setIsActive(item.name);
          if (isMobile) setIsOpen(false);
        }}
        className={`flex items-center gap-2 text-sm transition-colors hover:text-blue-500 ${
          isActive === item.name ? "text-blue-500" : "text-gray-600"
        } ${isMobile ? "py-2" : ""}`}
      >
        <Icon className="h-4 w-4" />
        {item.name}
      </a>
    );
  };

  return (
    <>
      <nav className="hidden md:flex items-center space-x-6 py-4 shadow-sm bg-white px-4 md:px-12">
        {navItems.map((item) => (
          <NavLink key={item.path} item={item} />
        ))}
      </nav>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="md:hidden  top-12 left-4 z-50 my-2 ml-4"
            size={"lg"}
          >
            Open Menu
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} isMobile={true} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
