'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardIcon, EyeIcon, TrashIcon } from "./icons"; // Import icons
import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";
import JsonViewer from "./ui/json-viewer";
import shalow from "zustand/shallow";
import { useResponseStore } from "@/store/responseStore";
import { error } from "console";

const ResponseCard = () => {
  const response = useResponseStore((state) => state.response);
  const loading = useResponseStore((state) => state.loading);
  const sampleJson = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Response</CardTitle>
        <CardDescription>View API responses</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center h-32">
            <div className="w-6 h-6 border-t-2 border-b-2 border-gray-800 rounded-full animate-spin"></div>
            </div>
            ) : (
              <>
              <div className="flex gap-4">
          <Badge color={
            response?.error ? "green" : "red"
          }>{response?.status}</Badge>
          <span className="text-sm">{response?.duration}</span>
          <span className="text-sm">{response?.size}</span>
        </div>
        <div className="grid gap-4">
          <Tabs defaultValue="response">
            <TabsList>
              <TabsTrigger value="response">Response</TabsTrigger>
              <TabsTrigger value="headers">Headers</TabsTrigger>
              <TabsTrigger value="cookies">Cookies</TabsTrigger>
            </TabsList>
            <TabsContent value="response">
            <Card className="max-w-[550px]">
                  <CardContent>
                      <Separator />
                      {response?.success ? (<JsonViewer src={response?.data} />) : ( 
                        <JsonViewer src={{error: response?.error}} />
                      )}
                      {/* {<JsonViewer src={response?.data} />} */}
                  </CardContent>
                </Card>
                
            </TabsContent>
            <TabsContent value="headers">
              <Textarea
                placeholder="Response headers..."
                className="h-40 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </TabsContent>
            <TabsContent value="cookies">
              <Textarea
                placeholder="Response cookies..."
                className="h-40 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </TabsContent>
          </Tabs>
        </div>
              </>
            )
              }
      </CardContent>
    </Card>
  );
};

export default ResponseCard;
