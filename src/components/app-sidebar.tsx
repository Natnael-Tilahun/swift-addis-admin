"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Command,
  Wallet,
  Image,
  Newspaper,
  Paperclip,
  Users,
  BarChart,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Swift Addis",
    email: "m@example.com",
    avatar: "/logo1.png",
  },
  teams: [
    {
      name: "Swift Addis",
      logo: "/logo1.png",
      plan: "Admin",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: BarChart,
    },
    {
      title: "Bookings",
      url: "/bookings",
      icon: Wallet,
    },
    {
      title: "Services",
      url: "/services",
      icon: BookOpen,
    },
    {
      title: "Addons",
      url: "/addons",
      icon: Paperclip,
    },
    {
      title: "Gallery",
      url: "/gallery",
      icon: Image,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: Newspaper,
    },
    {
      title: "Team",
      url: "/team",
      icon: Users,
    },
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
