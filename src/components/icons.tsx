// components/Icons.tsx
import { LucideProps, Mailbox, MoveHorizontal, LayoutGrid, Globe, Clock, Bookmark, Activity, Share, Menu, Bell, Trash, Eye, Clipboard } from "lucide-react";

interface IconProps extends LucideProps {}

export const MailboxIcon = (props: IconProps) => <Mailbox {...props} />;
export const MoveHorizontalIcon = (props: IconProps) => <MoveHorizontal {...props} />;
export const LayoutGridIcon = (props: IconProps) => <LayoutGrid {...props} />;
export const GlobeIcon = (props: IconProps) => <Globe {...props} />;
export const ClockIcon = (props: IconProps) => <Clock {...props} />;
export const BookmarkIcon = (props: IconProps) => <Bookmark {...props} />;
export const ActivityIcon = (props: IconProps) => <Activity {...props} />;
export const ShareIcon = (props: IconProps) => <Share {...props} />;
export const MenuIcon = (props: IconProps) => <Menu {...props} />;
export const BellIcon = (props: IconProps) => <Bell {...props} />;
export const TrashIcon = (props: IconProps) => <Trash {...props} />;
export const EyeIcon = (props: IconProps) => <Eye {...props} />;
export const ClipboardIcon = (props: IconProps) => <Clipboard {...props} />;