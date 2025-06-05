
import { Share2, Twitter, Facebook, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AmphibianData } from "@/services/geminiService";
import { useState } from "react";

interface ShareButtonProps {
  data: AmphibianData;
  image: string;
}

const ShareButton = ({ data, image }: ShareButtonProps) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareText = `🐸 Just identified a ${data.commonName} (${data.scientificName}) using Amphi Vision! 
📍 Habitat: ${data.habitat}
🌍 Range: ${data.geographicRange}
📏 Size: ${data.size}

#AmphiVision #AmphibianIdentification #Nature`;

  const shareUrl = window.location.href;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      toast.success("Copied to clipboard!");
      setIsShareOpen(false);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
    setIsShareOpen(false);
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, '_blank');
    setIsShareOpen(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.commonName} - Amphi Vision`,
          text: shareText,
          url: shareUrl,
        });
        setIsShareOpen(false);
      } catch (error) {
        console.log('Native share cancelled or failed');
      }
    } else {
      setIsShareOpen(!isShareOpen);
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={handleNativeShare}
        className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
      >
        <Share2 size={16} className="mr-2" />
        Share Discovery
      </Button>

      {isShareOpen && !navigator.share && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border p-3 z-10 min-w-[200px]">
          <div className="space-y-2">
            <Button
              onClick={shareToTwitter}
              variant="outline"
              className="w-full justify-start"
            >
              <Twitter size={16} className="mr-2 text-blue-400" />
              Share on Twitter
            </Button>
            <Button
              onClick={shareToFacebook}
              variant="outline"
              className="w-full justify-start"
            >
              <Facebook size={16} className="mr-2 text-blue-600" />
              Share on Facebook
            </Button>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="w-full justify-start"
            >
              <Copy size={16} className="mr-2" />
              Copy Link
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
