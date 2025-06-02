
import { useState, useRef } from "react";
import { Camera, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  selectedImage: string | null;
  onClearImage: () => void;
}

const ImageUpload = ({ onImageSelect, selectedImage, onClearImage }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        onImageSelect(file);
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Please select a valid image file");
      }
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      setStream(mediaStream);
      setIsCapturing(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      
      toast.success("Camera started! Position your amphibian and tap capture.");
    } catch (error) {
      console.error("Error accessing camera:", error);
      toast.error("Unable to access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCapturing(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'captured-amphibian.jpg', { type: 'image/jpeg' });
            onImageSelect(file);
            stopCamera();
            toast.success("Photo captured successfully!");
          }
        }, 'image/jpeg', 0.9);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!selectedImage && !isCapturing && (
        <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-white/50 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex justify-center space-x-4">
              <Button
                onClick={startCamera}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
              >
                <Camera size={20} />
                <span>Take Photo</span>
              </Button>
              
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
              >
                <Upload size={20} />
                <span>Upload Image</span>
              </Button>
            </div>
            
            <p className="text-gray-600">
              Capture or upload an image of an amphibian for identification
            </p>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      )}

      {isCapturing && (
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full rounded-xl shadow-lg"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Button
              onClick={capturePhoto}
              className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full"
            >
              <Camera size={20} />
            </Button>
            <Button
              onClick={stopCamera}
              variant="destructive"
              className="px-6 py-3 rounded-full"
            >
              <X size={20} />
            </Button>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="relative">
          <img
            src={selectedImage}
            alt="Selected amphibian"
            className="w-full rounded-xl shadow-lg max-h-96 object-cover"
          />
          <Button
            onClick={onClearImage}
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2 rounded-full"
          >
            <X size={16} />
          </Button>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default ImageUpload;
