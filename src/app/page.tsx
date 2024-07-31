import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import RequestForm from "@/components/request-form";
import ResponseCard from "@/components/response-card";
import EnvironmentsCard from "@/components/environments-card";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex h-full flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
        <div className="grid h-full grid-cols-[1fr_600px] gap-6 p-6">
          <div className="flex flex-col gap-6 h-screen">
            <RequestForm />
          </div>
             <div className="flex flex-col gap-6">
                <ResponseCard />
            </div>
            {/* <EnvironmentsCard /> */}
        </div>
        </main>
      </div>
    </div>
  );
};

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/VbLT7Z85IeH
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen w-full">
//       <aside className="flex h-full w-64 flex-col border-r bg-background">
//         <div className="flex h-16 items-center justify-between px-4">
//           <Link href="#" className="flex items-center gap-2" prefetch={false}>
//             <MailboxIcon className="h-6 w-6" />
//           </Link>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <MoveHorizontalIcon className="h-5 w-5" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//         <nav className="flex-1 space-y-2 overflow-auto px-4 py-4">
//           <Link
//             href="#"
//             className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//             prefetch={false}
//           >
//             <LayoutGridIcon className="h-5 w-5" />
//             <span>Collections</span>
//           </Link>
//           <Link
//             href="#"
//             className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//             prefetch={false}
//           >
//             <GlobeIcon className="h-5 w-5" />
//             <span>Environments</span>
//           </Link>
//           <Link
//             href="#"
//             className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//             prefetch={false}
//           >
//             <ClockIcon className="h-5 w-5" />
//             <span>History</span>
//           </Link>
//           <Link
//             href="#"
//             className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//             prefetch={false}
//           >
//             <BookmarkIcon className="h-5 w-5" />
//             <span>Favorites</span>
//           </Link>
//           <Link
//             href="#"
//             className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//             prefetch={false}
//           >
//             <ActivityIcon className="h-5 w-5" />
//             <span>Monitors</span>
//           </Link>
//           <Link
//             href="#"
//             className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//             prefetch={false}
//           >
//             <ShareIcon className="h-5 w-5" />
//             <span>Team</span>
//           </Link>
//         </nav>
//       </aside>
//       <div className="flex h-full flex-1 flex-col">
//         <header className="flex h-16 items-center justify-between border-b bg-background px-6">
//           <div className="flex items-center gap-4">
//             <Button variant="ghost" size="icon">
//               <MenuIcon className="h-6 w-6" />
//             </Button>
//             <Input
//               type="text"
//               placeholder="Search..."
//               className="w-full max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <Button variant="ghost" size="icon">
//               <BellIcon className="h-6 w-6" />
//             </Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Avatar className="h-8 w-8 overflow-hidden rounded-full border">
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>John Doe</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Logout</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </header>
//         <main className="flex-1 overflow-auto">
//           <div className="grid h-full grid-cols-[1fr_600px] gap-6 p-6">
//             <div className="flex flex-col gap-6 h-screen">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>API Request</CardTitle>
//                   <CardDescription>
//                     Create and send API requests to test your endpoints.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid gap-4">
//                     <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
//                       <Select>
//                         <SelectTrigger className="w-[180px]">
//                           <SelectValue placeholder="Selecione o método..." />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectGroup>
//                             <SelectItem value="get">GET</SelectItem>
//                             <SelectItem value="post">POST</SelectItem>
//                             <SelectItem value="put">PUT</SelectItem>
//                             <SelectItem value="patch">PATCH</SelectItem>
//                             <SelectItem value="delete">DELETE</SelectItem>
//                           </SelectGroup>
//                         </SelectContent>
//                       </Select>
//                       <Input
//                         type="text"
//                         placeholder="https://api.example.com/endpoint"
//                         className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//                       />
//                       <Button>Send</Button>
//                     </div>
//                     <Tabs defaultValue="headers">
//                       <TabsList>
//                         <TabsTrigger value="params">Params</TabsTrigger>
//                         <TabsTrigger value="body">Body</TabsTrigger>
//                         <TabsTrigger value="auth">Authentication</TabsTrigger>
//                         <TabsTrigger value="headers">Headers</TabsTrigger>
//                       </TabsList>
//                       <TabsContent value="headers">
//                         <div className="grid gap-2">
//                           <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
//                             <Input
//                               type="text"
//                               placeholder="Content-Type"
//                               className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//                             />
//                             <Input
//                               type="text"
//                               placeholder="application/json"
//                               className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//                             />
//                             <Button variant="ghost" size="icon">
//                               <TrashIcon className="h-5 w-5" />
//                             </Button>
//                           </div>
//                           <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
//                             <Input
//                               type="text"
//                               placeholder="Authorization"
//                               className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//                             />
//                             <Input
//                               type="text"
//                               placeholder="Bearer token"
//                               className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//                             />
//                             <Button variant="ghost" size="icon">
//                               <TrashIcon className="h-5 w-5" />
//                             </Button>
//                           </div>
//                         </div>
//                       </TabsContent>
//                       <TabsContent value="body">
//                         <RadioGroup
//                           defaultValue="comfortable"
//                           className="flex my-3"
//                         >
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="default" id="r1" />
//                             <Label htmlFor="r1">No Body</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="comfortable" id="r2" />
//                             <Label htmlFor="r2">Json</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="compact" id="r3" />
//                             <Label htmlFor="r3">Form Data</Label>
//                           </div>
//                         </RadioGroup>
//                         <Textarea
//                           placeholder="Request body..."
//                           className="h-40 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//                         />
//                       </TabsContent>
//                       <TabsContent value="auth">
//                         <div className="grid gap-2">
//                           <Select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring">
//                             <option value="none">No Authentication</option>
//                             <option value="bearer">Bearer Token</option>
//                             <option value="basic">Basic Auth</option>
//                             <option value="apikey">API Key</option>
//                           </Select>
//                           <Input
//                             type="text"
//                             placeholder="API Key or Username"
//                             className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//                           />
//                           <Input
//                             type="password"
//                             placeholder="Password"
//                             className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
//                           />
//                         </div>
//                       </TabsContent>
//                     </Tabs>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="flex flex-col gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Response</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Tabs defaultValue="headers" className="ml-0 mb-1">
//                     <TabsList>
//                       <TabsTrigger value="params">Params</TabsTrigger>
//                       <TabsTrigger value="body">Body</TabsTrigger>
//                       <TabsTrigger value="auth">Authentication</TabsTrigger>
//                       <TabsTrigger value="headers">Headers</TabsTrigger>
//                     </TabsList>
//                   </Tabs>
//                   <div className="grid gap-2">
//                     <div className="flex items-center justify-between">
//                       <span className="font-medium">Status Code:</span>
//                       <span>200 OK</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="font-medium">Headers:</span>
//                       <span>Content-Type: application/json</span>
//                     </div>
//                     <Separator />
//                     <pre className="whitespace-pre-wrap break-words">{`{
//   "id": "1",
//   "name": "John Doe",
//   "email": "john@example.com"
// }`}</pre>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Environments</CardTitle>
//                   <CardDescription>
//                     Manage different environments for your API requests.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid gap-2">
//                     <Link
//                       href="#"
//                       className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
//                       prefetch={false}
//                     >
//                       <div className="flex items-center gap-2">
//                         <GlobeIcon className="h-5 w-5" />
//                         <span>Development</span>
//                       </div>
//                       <ChevronRightIcon className="h-5 w-5" />
//                     </Link>
//                     <Link
//                       href="#"
//                       className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
//                       prefetch={false}
//                     >
//                       <div className="flex items-center gap-2">
//                         <GlobeIcon className="h-5 w-5" />
//                         <span>Staging</span>
//                       </div>
//                       <ChevronRightIcon className="h-5 w-5" />
//                     </Link>
//                     <Link href="#" prefetch={false} />
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// function ActivityIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
//     </svg>
//   );
// }

// function BellIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   );
// }

// function BookmarkIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//     </svg>
//   );
// }

// function ChevronRightIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m9 18 6-6-6-6" />
//     </svg>
//   );
// }

// function ClockIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   );
// }

// function GlobeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
//       <path d="M2 12h20" />
//     </svg>
//   );
// }

// function LayoutGridIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="7" height="7" x="3" y="3" rx="1" />
//       <rect width="7" height="7" x="14" y="3" rx="1" />
//       <rect width="7" height="7" x="14" y="14" rx="1" />
//       <rect width="7" height="7" x="3" y="14" rx="1" />
//     </svg>
//   );
// }

// function MailboxIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
//       <polyline points="15,9 18,9 18,11" />
//       <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
//       <line x1="6" x2="7" y1="10" y2="10" />
//     </svg>
//   );
// }

// function MenuIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }

// function MoveHorizontalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="18 8 22 12 18 16" />
//       <polyline points="6 8 2 12 6 16" />
//       <line x1="2" x2="22" y1="12" y2="12" />
//     </svg>
//   );
// }

// function ShareIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//       <polyline points="16 6 12 2 8 6" />
//       <line x1="12" x2="12" y1="2" y2="15" />
//     </svg>
//   );
// }

// function TrashIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   );
// }

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }
