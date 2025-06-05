
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner = ({ message = "Processing..." }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="h-12 w-12 animate-spin text-green-500 mb-4" />
      <p className="text-white/80 text-lg animate-pulse">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
