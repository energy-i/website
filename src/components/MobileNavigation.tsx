import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Props {
  links: { label: string; href: string }[];
  bookDemoUrl: string;
  joinPilotUrl: string;
}

export default function MobileNavigation({
  links,
  bookDemoUrl,
  joinPilotUrl,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open navigation menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pb-[env(safe-area-inset-bottom)]">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Explore Energy-i, book a demo, or join the pilot.
            </SheetDescription>
          </SheetHeader>
          <nav aria-label="Mobile navigation" className="flex flex-col px-4">
            {links.map(({ label, href }) => (
              <SheetClose key={href} asChild>
                <a
                  href={href}
                  className="rounded-md px-3 py-3 font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-ring"
                >
                  {label}
                </a>
              </SheetClose>
            ))}
          </nav>
          <SheetFooter>
            <SheetClose asChild>
              <a
                href={bookDemoUrl}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Book a demo
              </a>
            </SheetClose>
            <SheetClose asChild>
              <a href={joinPilotUrl} className={buttonVariants({ size: "lg" })}>
                Join Pilot
              </a>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
