// components/EnvironmentsCard.js
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "./icons"; // Import icons

const EnvironmentsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Environments</CardTitle>
        <CardDescription>Manage your environments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
            <Input
              type="text"
              placeholder="Base URL"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <Button variant="ghost" size="icon">
              <TrashIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
            <Input
              type="text"
              placeholder="API Key"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <Button variant="ghost" size="icon">
              <TrashIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnvironmentsCard;
