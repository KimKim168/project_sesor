import { useState } from "react";
import VideoPlay from "./VideoPlay";
import { Dialog, DialogContent } from "@/pages/nokor-tech/components/ui/dialog";

export default function SingleVideoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/J0NuOlA2xDc?si=IiGdSgybkKc3-Uem";

  return (
    <>
      {/* Hero Button */}
      <div className="flex justify-center">
        <VideoPlay onClick={() => setIsOpen(true)} />
      </div>

      {/* Video Popup */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-w-3xl bg-black rounded-2xl p-0 aspect-video">
          <iframe
            src={`${videoUrl}?autoplay=1`}
            className="w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
