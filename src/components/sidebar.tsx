// components/Sidebar.js
import Link from "next/link";
import React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MailboxIcon, MoveHorizontalIcon, LayoutGridIcon, GlobeIcon, ClockIcon, BookmarkIcon, ActivityIcon, ShareIcon } from "@/components/icons"; // Import icons

const Sidebar = () => {
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MailboxIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Tadsman</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoveHorizontalIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="flex-1 space-y-2 overflow-auto px-4 py-4">
        {["Collections", "Environments", "History", "Favorites", "Monitors", "Team"].map((item, idx) => (
          <Link
            key={idx}
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            {React.createElement(iconMap[item])}
            <span>{item}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

const iconMap = {
  Collections: LayoutGridIcon,
  Environments: GlobeIcon,
  History: ClockIcon,
  Favorites: BookmarkIcon,
  Monitors: ActivityIcon,
  Team: ShareIcon,
};

export default Sidebar;
