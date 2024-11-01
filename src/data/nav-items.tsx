import {
  Home,
  Layout,
  Box,
  FileText,
  Image,
  FileCode,
  Table,
} from "lucide-react";

export const navItems = [
  { name: "Home", icon: Home, path: "/", isActive: true },
  { name: "Interface", icon: Layout, path: "/interface" },
  { name: "Components", icon: Box, path: "/components" },
  { name: "Pages", icon: FileText, path: "/pages" },
  { name: "Forms", icon: Table, path: "/forms" },
  { name: "Gallery", icon: Image, path: "/gallery" },
  { name: "Documentation", icon: FileCode, path: "/docs" },
];
