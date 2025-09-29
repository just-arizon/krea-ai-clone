"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Bell,
  Home,
  Brain,
  X,
  Sun,
  Moon,
  Headset,
  Images,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { User } from "@heroui/user";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Selection } from "@react-types/shared";
import { motion } from "framer-motion";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );
  const pathname = usePathname();

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/images", icon: Images, label: "Image" },
    { href: "/videos", icon: "video", label: "Video" },
    { href: "/enhancer", icon: "enhancer", label: "Enhancer" },
    { href: "/realtime", icon: "realtime", label: "Realtime" },
    { href: "/edit", icon: "edit", label: "Edit" },
    { href: "/assets", icon: "assets", label: "Assets" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <TooltipProvider>
      <header className="bg-white w-full fixed z-50 dark:bg-black lg:bg-transparent dark:lg:bg-transparent">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="flex-1 flex items-center gap-6">
            <div className="flex items-center lg:gap-10 md:gap-4">
              <Link
                href="/"
                className="w-8 h-8 bg- rounded-lg flex items-center justify-center"
              >
                <svg
                  aria-label="Krea Logo"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block"
                >
                  <path
                    d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"
                    className="svelte-qzh0aw"
                  ></path>
                  <path
                    d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"
                    className="svelte-qzh0aw"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="h-5 w-5 iconify iconify--mynaui md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.392.032.851.044 1.416.05V3.752c-.565.005-1.024.017-1.416.049"
                  ></path>
                </svg>
              </Link>

              <div className="flex flex-1 justify-end cursor-pointer hidden md:flex">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <div className="flex items-center gap-1.5"
                     onClick={toggleDropdown}
                    >
                      {/* User Avatar */}
                      <div className="flex gap-1.5">
                        <Avatar
                          isBordered
                          as="button"
                          className="transition-transform  w-6 h-6  hover:scale-105 cursor-pointer"
                          src="/profile.svg"
                        />
                        <span className="text-xs items-center flex">
                          Arinze Chinweuba
                        </span>
                      </div>
                      {/* Chevron Icons */}
                      <span className="" 
                     >
                        {isDropdownOpen ? (
                          <ChevronUpIcon className="w-4 h-4 font-bold text-[#262626] dark:text-[#f1f1f1]" />
                        ) : (
                          <ChevronDownIcon className="w-4 h-4 font-bold text-[#262626] dark:text-[#f1f1f1]" />
                        )}
                      </span>
                    </div>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="User Actions"
                    variant="flat"
                    className="w-64"
                  >
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-medium text-xs">Workspaces</p>
                      <span className="text-sm text-gray-500">
                        Arinze Calistus
                      </span>
                    </DropdownItem>
                    <DropdownItem key="settings">
                      <p className="font-medium text-xs">Create a new team</p>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {/* Mobile Navigation Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex md:hidden">
              {/* Background Blur */}
              <div
                className="absolute inset-0 transition-[backdrop-filter] duration-200 ease-out starting:backdrop-blur-none
				touch-none backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Sliding Menu */}
              <motion.div
                className={`relative z-50 w-[calc(100svw-4rem)] max-w-[360px] h-full bg-white dark:bg-neutral-900 p-3 overflow-y-scroll"
                `}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
              >
                <div className="flex justify-between">
                  <div className="flex flex-1">
                    <button
                      className="absolute top-4 left-4 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="relative top-1 flex flex-1 justify-end cursor-pointer">
                    <Dropdown placement="bottom-end">
                      <DropdownTrigger>
                        <div className="flex items-center gap-1.5">
                          {/* Chevron Icon */}
                          <ChevronDownIcon className="w-4 h-4 text-white font-bold" />

                          {/* User Avatar */}
                          <div className="flex gap-1.5">
                            <Avatar
                              isBordered
                              as="button"
                              className="transition-transform  w-6 h-6  hover:scale-105 cursor-pointer"
                              src="/profile.svg"
                            />
                            <span className="text-xs items-center flex">
                              Arinze Calistus
                            </span>
                          </div>
                        </div>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="User Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                          <p className="font-medium text-xs">Workspaces</p>
                        </DropdownItem>
                        <DropdownItem key="settings">
                          Create a new team
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>

                <nav className="mt-12 flex flex-col gap-6">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="bg-[var(--primary)] text-secondary dark:text-secondary dark:bg-[#f1f1f6] relative flex aspect-square h-11 items-center justify-center rounded-[10px] opacity-100">
                      <svg
                        aria-label="Krea Logo"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"></path>
                        <path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"></path>
                      </svg>
                    </div>
                    <span className="font-semibold">Home</span>
                  </Link>
                </nav>

                {/* Accordion with Mapped Items */}
                <Accordion
                  selectedKeys={selectedKeys}
                  onSelectionChange={handleSelectionChange}
                  className="px-0 mt-6"
                >
                  <AccordionItem
                    key="1"
                    aria-label="Apps"
                    title="Apps"
                    className="text-xl font-medium"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                      {/* Card 1 - Images */}
                      <Card className="group transition-shadow cursor-pointer border-0 shadow-none">
                        <CardContent className="py-3 px-1">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0"
                              style={{
                                background:
                                  "linear-gradient(0deg, #D0E3F1 0%, #294962 100%)",
                                width: "42px",
                                height: "42px",
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 m-auto text-[#f1f1f1]"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z"
                                  fill="currentColor"
                                ></path>
                                <rect
                                  x="2.75"
                                  y="3.86182"
                                  width="18.5"
                                  height="16.5"
                                  rx="3.25"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                ></rect>
                                <path
                                  d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="grid gap-1 w-full">
                              <span className="flex gap-1 items-center justify-between">
                                <h4 className="font-medium text-[14px]">
                                  Image
                                </h4>
                                <Link
                                  href="/images"
                                  className="bg-[#f1f1f1] dark:bg-[#262626] ml-auto flex h-9 w-22 items-center justify-center rounded-full align-middle text-xs font-medium text-black dark:text-[#f1f1f1] hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                  Open
                                </Link>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Card 2 - Videos */}
                      <Card className="group transition-shadow cursor-pointer border-0 shadow-none">
                        <CardContent className="py-3 px-1">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative aspect-square rounded-[10px] bg-[oklch(79.55%_0.1875_75.3501)] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0"
                              style={{
                                width: "42px",
                                height: "42px",
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                className="absolute inset-0 bottom-[1px] left-0.5 m-auto text-[#f1f1f1]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z"
                                  fill="currentColor"
                                ></path>
                                <rect
                                  x="1"
                                  y="5.11182"
                                  width="16"
                                  height="15"
                                  rx="4"
                                  fill="currentColor"
                                ></rect>
                              </svg>
                            </div>
                            <div className="grid gap-1 w-full">
                              <span className="flex gap-1 items-center justify-between">
                                <h4 className="font-medium text-[14px]">
                                  Video
                                </h4>
                                <Link
                                  href="/videos"
                                  className="bg-[#f1f1f1] dark:bg-[#262626] ml-auto flex h-9 w-22 items-center justify-center rounded-full align-middle text-xs font-medium text-black dark:text-[#f1f1f1] hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                  Open
                                </Link>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Card 3 - RealTime */}
                      <Card className="group transition-shadow cursor-pointer border-0 shadow-none">
                        <CardContent className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0"
                              style={{
                                background:
                                  "linear-gradient(0deg, rgb(206, 246, 255) 0%, oklch(0.7972 0.1583 221.31) 35%, oklch(0.6575 0.1796 237.869) 100%)",
                                width: "42px",
                                height: "42px",
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                className="absolute inset-0 m-auto text-[#f1f1f1]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="grid gap-1 w-full">
                              <span className="flex gap-1 items-center justify-between">
                                <h4 className="font-medium text-[14px]">
                                  Realtime
                                </h4>
                                <Link
                                  href="/realtime"
                                  className="bg-[#f1f1f1] dark:bg-[#262626] ml-auto flex h-9 w-22 items-center justify-center rounded-full align-middle text-xs font-medium text-black dark:text-[#f1f1f1] hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                  Open
                                </Link>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Card 4 - Enhancer */}
                      <Card className="group transition-shadow cursor-pointer border-0 shadow-none">
                        <CardContent className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0"
                              style={{
                                background:
                                  "linear-gradient(0deg, #888888 0%, #000000 100%)",
                                width: "42px",
                                height: "42px",
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                className="absolute inset-0 m-auto text-[#f1f1f1]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M7.82105 18.4485H7.83105"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12.8125 3.69873H12.8025"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <rect
                                  x="3.3868"
                                  y="5.14091"
                                  width="2.5"
                                  height="22.0199"
                                  rx="1.25"
                                  transform="rotate(-44.5361 3.3868 5.14091)"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                ></rect>
                                <path
                                  d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div className="grid gap-1 w-full">
                              <span className="flex gap-1 items-center justify-between">
                                <h4 className="font-medium text-[14px]">
                                  Enhancer
                                </h4>
                                <Link
                                  href="/enhancer"
                                  className="bg-[#f1f1f1] dark:bg-[#262626] ml-auto flex h-9 w-22 items-center justify-center rounded-full align-middle text-xs font-medium text-black dark:text-[#f1f1f1] hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                  Open
                                </Link>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Card 5 - Edit */}
                      <Card className="group transition-shadow cursor-pointer border-0 shadow-none">
                        <CardContent className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0"
                              style={{
                                background:
                                  "linear-gradient(0deg, #AE91CA 0%, #592A85 60%, #180728 100%)",
                                width: "42px",
                                height: "42px",
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                className="absolute inset-0 m-auto text-[#f1f1f1]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 2.854L12 5.51603"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                                <circle
                                  cx="12.0001"
                                  cy="8.17831"
                                  r="2.12118"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                ></circle>
                                <path
                                  d="M10.4869 10.1001L7.45996 21.4302"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="grid gap-1 w-full">
                              <span className="flex gap-1 items-center justify-between">
                                <h4 className="font-medium text-[14px]">
                                  Edit
                                </h4>
                                <Link
                                  href="/edit"
                                  className="bg-[#f1f1f1] dark:bg-[#262626] ml-auto flex h-9 w-22 items-center justify-center rounded-full align-middle text-xs font-medium text-black dark:text-[#f1f1f1] hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                  Open
                                </Link>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Card 6 - Video Lipsync */}
                      <Card className="group transition-shadow cursor-pointer border-0 shadow-none">
                        <CardContent className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0"
                              style={{
                                background:
                                  "linear-gradient(0deg, #BBCA91 0%, #3C878F 60%, #07280F 100%)",
                                width: "42px",
                                height: "42px",
                              }}
                            >
                              <svg
                                width="22"
                                height="22"
                                className="absolute inset-0  right-[1px] m-auto text-[#f1f1f1]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.4998 21.174C15.4998 20.5 14.3718 20 12.9998 20C10.9418 20 9.07179 22.356 6.99979 22C4.92779 21.644 4.22479 18.631 5.49979 17.5"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M10.165 8.40356C10.7043 10.6535 12.5111 12.4106 14.7882 12.8777L6.83049 18.7674C6.60581 18.9339 6.32644 19.0157 6.04426 18.9976C5.76209 18.9795 5.49628 18.8627 5.2962 18.6689L4.34224 17.7427C4.14504 17.5516 4.02487 17.2984 4.00345 17.0288C3.98204 16.7593 4.06079 16.4912 4.22547 16.2731L10.165 8.40356Z"
                                  fill="currentColor"
                                ></path>
                                <circle
                                  cx="16.5"
                                  cy="6.5"
                                  r="5.5"
                                  fill="currentColor"
                                ></circle>
                              </svg>
                            </div>
                            <div className="grid gap-1 w-full">
                              <span className="flex gap-1 items-center justify-between">
                                <h4 className="font-medium text-[14px]">
                                  Video Lipsync
                                </h4>
                                <Link
                                  href="/video-lipsync"
                                  className="bg-[#f1f1f1] dark:bg-[#262626] ml-auto flex h-9 w-22 items-center justify-center rounded-full align-middle text-xs font-medium text-black dark:text-[#f1f1f1] hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                  Open
                                </Link>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Card 7 - Motion Transfer */}
                      <Card className="group transition-shadow cursor-pointer border-0 shadow-none">
                        <CardContent className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative flex aspect-square items-center justify-center rounded-[10px] inset-ring-[0.5px] inset-ring-white/10 block shrink-0 bg-[#1B1C1D]"
                              style={{
                                width: "42px",
                                height: "42px",
                              }}
                            >
                              <svg
                                width="42"
                                height="42"
                                className="absolute inset-0 z-10 m-auto shrink-0 text-[#f1f1f1]"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M23.6904 14.625C24.4364 14.625 25.1517 14.3287 25.6792 13.8012C26.2066 13.2738 26.5029 12.5584 26.5029 11.8125C26.5029 11.0666 26.2066 10.3512 25.6792 9.82376C25.1517 9.29632 24.4364 9 23.6904 9C22.9445 9 22.2291 9.29632 21.7017 9.82376C21.1742 10.3512 20.8779 11.0666 20.8779 11.8125C20.8779 12.5584 21.1742 13.2738 21.7017 13.8012C22.2291 14.3287 22.9445 14.625 23.6904 14.625Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M19.8084 21.5699L18.2221 37.4156C18.1717 37.7942 18.2737 38.1775 18.5058 38.4809C18.7378 38.7844 19.081 38.9832 19.4596 39.0337C19.8383 39.0842 20.2215 38.9821 20.525 38.7501C20.8285 38.518 21.0273 38.1749 21.0778 37.7962L22.5965 28.6743C22.6383 28.4147 22.7712 28.1785 22.9713 28.008C23.1715 27.8375 23.4258 27.7439 23.6887 27.7439C23.9516 27.7439 24.2059 27.8375 24.4061 28.008C24.6062 28.1785 24.7391 28.4147 24.7809 28.6743L26.2996 37.7962C26.3501 38.1749 26.549 38.518 26.8524 38.7501C27.1559 38.9821 27.5391 39.0842 27.9178 39.0337C28.2964 38.9832 28.6396 38.7844 28.8716 38.4809C29.1037 38.1775 29.2057 37.7942 29.1553 37.4156L27.5709 21.5699C27.5307 21.1575 27.5821 20.7413 27.7215 20.351C27.8608 19.9607 28.0847 19.6061 28.3771 19.3124L33.0646 13.2824C33.296 12.9729 33.3982 12.5856 33.3499 12.2022C33.3015 11.8188 33.1063 11.4691 32.8053 11.2267C32.5044 10.9843 32.1211 10.868 31.7362 10.9024C31.3513 10.9369 30.9947 11.1192 30.7415 11.4112L26.7534 16.1999C26.5951 16.4046 26.3798 16.5579 26.1346 16.6406C25.7034 16.7793 24.8878 16.9706 23.6896 16.9706C22.4896 16.9706 21.6759 16.7793 21.2428 16.6406C20.9983 16.5576 20.7837 16.4043 20.6259 16.1999L16.6378 11.4112C16.387 11.1111 16.0285 10.9214 15.6393 10.883C15.2501 10.8445 14.8614 10.9603 14.5567 11.2055C14.2521 11.4507 14.0558 11.8057 14.0102 12.1941C13.9646 12.5825 14.0732 12.9733 14.3128 13.2824L19.0003 19.3124C19.5946 19.9049 19.8928 20.7337 19.8084 21.5699Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div className="grid gap-1 w-full">
                              <span className="flex gap-1 items-center justify-between">
                                <h4 className="font-medium text-[14px]">
                                  Motion Transfer
                                </h4>
                                <Link
                                  href="/motion-transfer"
                                  className="bg-[#f1f1f1] dark:bg-[#262626] ml-auto flex h-9 w-22 items-center justify-center rounded-full align-middle text-xs font-medium text-black dark:text-[#f1f1f1] hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                  Open
                                </Link>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Card 8 - Train */}
                      <Card className="group transition-shadow cursor-pointer border-0 shadow-none">
                        <CardContent className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="relative flex aspect-square items-center justify-center rounded-[10px] inset-ring-[0.5px] inset-ring-white/10 block shrink-0 bg-teal-400"
                              style={{
                                width: "42px",
                                height: "42px",
                              }}
                            >
                              <Brain className=" text-[#f1f1f1]" />
                            </div>
                            <div className="grid gap-1 w-full">
                              <span className="flex gap-1 items-center justify-between">
                                <h4 className="font-medium text-[14px]">
                                  Train
                                </h4>
                                <Link
                                  href="/train"
                                  className="bg-[#f1f1f1] dark:bg-[#262626] ml-auto flex h-9 w-22 items-center justify-center rounded-full align-middle text-xs font-medium text-black dark:text-[#f1f1f1] hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                  Open
                                </Link>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </div>
          )}

          <div className="flex-1 flex justify-center">
            <nav
              className="hidden md:flex items-center gap-1 px-2 rounded-2xl
              border border-border backdrop-blur-2xl duration-[480ms] ease-[cubic-bezier(0,1,.35,1)]
             dark:bg-neutral-900
               bg-[#f1f1f1]
             "
            >
              <ul className="flex list-none p-0 m-0">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "group relative my-1.5 block h-10 w-13 leading-none transition-all duration-300 ease-out mr-1.5",
                              "hover:bg-white dark:hover:bg-white/10 rounded-lg",
                              isActive &&
                                "bg-white dark:bg-white/20 shadow-md px-3 py-2"
                            )}
                          >
                            {/* Custom SVG icons for each nav item */}
                            {item.icon === Home && (
                              <svg
                                width="18"
                                height="18"
                                className={cn(
                                  "absolute inset-0 z-20 m-auto transition-colors duration-200",
                                  isActive
                                    ? "text-black dark:text-[#f1f1f1]"
                                    : "text-black dark:text-[#f1f1f1]"
                                )}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2 11.7354C2 10.4141 2 9.75338 2.18958 9.15972C2.35736 8.63437 2.63195 8.14939 2.99611 7.73524C3.40763 7.26724 3.97416 6.92732 5.10723 6.24748L8.70722 4.08748C9.90443 3.36916 10.503 3.01 11.142 2.86967C11.7073 2.74555 12.2927 2.74555 12.858 2.86967C13.497 3.01 14.0956 3.36916 15.2928 4.08748L18.8928 6.24748C20.0258 6.92732 20.5924 7.26724 21.0039 7.73524C21.3681 8.14939 21.6426 8.63437 21.8104 9.15972C22 9.75338 22 10.4141 22 11.7354V18.9118C22 20.0319 22 20.592 21.782 21.0198C21.5903 21.3961 21.2843 21.7021 20.908 21.8938C20.4802 22.1118 19.9201 22.1118 18.8 22.1118H18.2C17.0799 22.1118 16.5198 22.1118 16.092 21.8938C15.7157 21.7021 15.4097 21.3961 15.218 21.0198C15 20.592 15 20.0319 15 18.9118V15.7118C15 15.1518 15 14.8717 14.891 14.6578C14.7951 14.4697 14.6422 14.3167 14.454 14.2208C14.2401 14.1118 13.9601 14.1118 13.4 14.1118H10.6C10.0399 14.1118 9.75992 14.1118 9.54601 14.2208C9.35785 14.3167 9.20487 14.4697 9.10899 14.6578C9 14.8717 9 15.1518 9 15.7118V18.9118C9 20.0319 9 20.592 8.78201 21.0198C8.59027 21.3961 8.28431 21.7021 7.90798 21.8938C7.48016 22.1118 6.9201 22.1118 5.8 22.1118H5.2C4.0799 22.1118 3.51984 22.1118 3.09202 21.8938C2.71569 21.7021 2.40973 21.3961 2.21799 21.0198C2 20.592 2 20.0319 2 18.9118V11.7354Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            )}
                            {item.icon === Images && (
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={cn(
                                  "absolute inset-0 z-20 m-auto transition-colors duration-200",
                                  isActive
                                    ? "text-black dark:text-[#f1f1f1]"
                                    : "text-black dark:text-[#f1f1f1]"
                                )}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z"
                                  fill="currentColor"
                                ></path>
                                <rect
                                  x="2.75"
                                  y="3.86182"
                                  width="18.5"
                                  height="16.5"
                                  rx="3.25"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                ></rect>
                                <path
                                  d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            )}
                            {item.icon === "video" && (
                              <svg
                                width="18"
                                height="18"
                                className={cn(
                                  "absolute inset-0 z-20 m-auto transition-colors duration-200",
                                  isActive
                                    ? "text-black dark:text-[#f1f1f1]"
                                    : "text-black dark:text-[#f1f1f1]"
                                )}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            )}
                            {item.icon === "enhancer" && (
                              <svg
                                width="18"
                                height="18"
                                className={cn(
                                  "absolute inset-0 z-20 m-auto transition-colors duration-200",
                                  isActive
                                    ? "text-black dark:text-[#f1f1f1]"
                                    : "text-black dark:text-[#f1f1f1]"
                                )}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M7.82105 18.4485H7.83105"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12.8125 3.69873H12.8025"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <rect
                                  x="3.3868"
                                  y="5.14091"
                                  width="2.5"
                                  height="22.0199"
                                  rx="1.25"
                                  transform="rotate(-44.5361 3.3868 5.14091)"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                ></rect>
                                <path
                                  d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            )}
                            {item.icon === "realtime" && (
                              <svg
                                width="18"
                                height="18"
                                className={cn(
                                  "absolute inset-0 z-20 m-auto transition-colors duration-200",
                                  isActive
                                    ? "text-black dark:text-[#f1f1f1]"
                                    : "text-black dark:text-[#f1f1f1]"
                                )}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            )}

                            {item.icon === "edit" && (
                              <svg
                                width="18"
                                height="18"
                                className={cn(
                                  "absolute inset-0 z-20 m-auto transition-colors duration-200",
                                  isActive
                                    ? "text-black dark:text-[#f1f1f1]"
                                    : "text-black dark:text-[#f1f1f1]"
                                )}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 2.854L12 5.51603"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                                <circle
                                  cx="12.0001"
                                  cy="8.17831"
                                  r="2.12118"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                ></circle>
                                <path
                                  d="M10.4869 10.1001L7.45996 21.4302"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                              </svg>
                            )}
                            {item.icon === "assets" && (
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className={cn(
                                  "absolute inset-0 z-20 m-auto transition-colors duration-200",
                                  isActive
                                    ? "text-black dark:text-[#f1f1f1]"
                                    : "text-black dark:text-[#f1f1f1]"
                                )}
                              >
                                <path d="M3 5C3 4.45 3.45 4 4 4H9.17C9.58 4 9.95 4.21 10.14 4.55L10.86 5.89C11.05 6.23 11.42 6.44 11.83 6.44H20C20.55 6.44 21 6.89 21 7.44V11C21 11.55 20.55 12 20 12H4C3.45 12 3 11.55 3 11V5Z"></path>
                                <rect
                                  x="3"
                                  y="7"
                                  width="18"
                                  height="12"
                                  rx="1"
                                ></rect>
                                <path
                                  d="M3.15 18.5C3.08 18.15 3.08 17.65 3.08 17H20.92C20.92 17.65 20.92 18.15 20.85 18.5H3.15Z"
                                  opacity="0.3"
                                ></path>
                                <path
                                  d="M5 20H19C19.8 20 20.2 20 20.5 19.8C20.7 19.7 20.9 19.5 21 19.2C21.05 19.1 21.08 19 21.1 18.5H2.9C2.92 19 2.95 19.1 3 19.2C3.1 19.5 3.3 19.7 3.5 19.8C3.8 20 4.2 20 5 20Z"
                                  opacity="0.5"
                                ></path>
                              </svg>
                            )}
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="bg-[var(--primary)] dark:bg-[var(--secondary)]  dark:text-white shadow-md p-2 rounded-lg"
                        >
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="lg:flex-1 flex justify-end gap-3">
            <div className="flex justify-between gap-2">
              <div className="flex items-center lg:gap-3 gap-1">
                <Link
                  href="/gallery"
                  className="gap-2 bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 cursor-pointer border-none outline-none flex items-center px-3 py-2 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors  hidden md:flex"
                >
                  <Images className="w-3 h-3 text-[#262626] dark:text-[#f1f1f1]  cursor-pointer" />
                  <span>Gallery</span>
                </Link>
                <Link
                  href="/support"
                  className="gap-2 bg-gray-50  dark:bg-neutral-900 dark:hover:bg-neutral-800 cursor-pointer border-none outline-none flex items-center px-3 py-2 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors  hidden md:flex"
                >
                  <Headset className="w-3 h-3 text-[#262626] dark:text-[#f1f1f1] cursor-pointer" />
                  <span>Support</span>
                </Link>
                <div className="bg-gray-50  dark:bg-neutral-900 dark:hover:bg-neutral-800 cursor-pointer border-none outline-none flex items-center px-3 py-2 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors">
                  <Bell className="w-3.5 h-3.5 text-[#262626] cursor-pointer dark:text-[#f1f1f1]" />
                </div>
                {mounted && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="hover:bg-[#f1f1f1] dark:bg-neutral-900 bg-gray-50 dark:hover:bg-neutral-800 flex h-[30px] w-[30px] items-center justify-center rounded-lg text-black/70 backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] hover:text-black dark:text-[#f1f1f1] dark:hover:text-[#f1f1f1] cursor-pointer"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                )}
                <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center hidden md:flex ml-2">
                  <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                      <Avatar
                        isBordered
                        as="button"
                        className="transition-transform w-full h-full hover:scale-105 cursor-pointer"
                        src="/profile.svg"
                      />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                      <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">arizon@example.com</p>
                      </DropdownItem>
                      <DropdownItem key="settings">My Settings</DropdownItem>
                      <DropdownItem key="team_settings">
                        Team Settings
                      </DropdownItem>
                      <DropdownItem key="analytics">Analytics</DropdownItem>
                      <DropdownItem key="system">System</DropdownItem>
                      <DropdownItem key="configurations">
                        Configurations
                      </DropdownItem>
                      <DropdownItem key="help_and_feedback">
                        Help & Feedback
                      </DropdownItem>
                      <DropdownItem key="logout" color="danger">
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>

              <div className="flex items-center w-full h-full justify-end relative">
                <Button
                  className="lg:hidden md:hidden bg-blue-700 dark:animate-pulse-shadow cursor-pointer flex h-[28px] items-center justify-center gap-1 rounded-lg px-2.5 text-xs font-medium text-white transition-all duration-500 ease-[cubic-bezier(.33,0,.2,1)] hover:bg-blue-600 dark:shadow-[0_0_15px_-2px_var(--color-action)] dark:hover:shadow-[0_0_25px_-2px_var(--color-action)] 
  hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-500/70
  active:brightness-125 active:shadow-lg active:shadow-blue-500/60"
                >
                  <div className="flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      className="inline-block"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q.005-.018.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="currentColor"
                          d="M17 3a2 2 0 0 1 1.492.668l.108.132l3.704 4.939a2 2 0 0 1-.012 2.416l-.108.13l-9.259 10.184a1.25 1.25 0 0 1-1.753.096l-.097-.096l-9.259-10.185a2 2 0 0 1-.215-2.407l.095-.138L5.4 3.8a2 2 0 0 1 1.43-.793L7 3zm-2.477 8H9.477L12 17.307zm5.217 0h-3.063l-2.406 6.015zM7.323 11H4.261l5.468 6.015zm5.059-6h-.764l-2 4h4.764zM17 5h-2.382l2 4H20zM9.382 5H7L4 9h3.382z"
                        ></path>
                      </g>
                    </svg>
                    <span className="">upgrade</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}
