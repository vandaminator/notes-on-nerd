import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function MainDrawer() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>What are you looking for?</SheetDescription>
        </SheetHeader>
        <ul className="my-3 space-y-3">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/subjects">Subjects</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MainDrawer;
