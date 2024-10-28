import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { SearchX } from "lucide-react";
import { Button } from "../ui/button";

const NoJobs = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <SearchX className="h-6 w-6 text-muted-foreground" />
        </div>
        <CardTitle className="text-xl font-semibold">No Jobs Found</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">
          We couldn't find any jobs matching your current search criteria. Try
          adjusting your filters or search terms.
        </p>
      </CardContent>
    </Card>
  );
};

export default NoJobs;
