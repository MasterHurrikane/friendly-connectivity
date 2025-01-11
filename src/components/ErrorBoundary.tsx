import { useRouteError } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <div className="min-h-screen bg-gradient-page flex items-center justify-center p-4">
      <Alert variant="destructive" className="max-w-lg">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription className="mt-2">
          {error.message || "An unexpected error occurred. Please try again later."}
        </AlertDescription>
        <div className="mt-4 flex gap-2">
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
          <Button
            variant="default"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </Alert>
    </div>
  );
}