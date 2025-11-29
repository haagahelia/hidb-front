import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Play, Pause, Volume2} from "lucide-react";

interface AudioGuideProps {
    aircraftName: string;
    audioDescription: string;
}

const AudioGuide = ({aircraftName, audioDescription}: AudioGuideProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [, setProgress] = useState(0);

    // Simulate audio playback
    const toggleAudio = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            // Simulate audio progress
            const duration = audioDescription.length * 50; // Rough estimate
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 1;
                });
            }, duration / 100);
        } else {
            setIsPlaying(false);
            setProgress(0);
        }
    };

    // Text-to-speech simulation
    const speakDescription = () => {
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(audioDescription);
            utterance.lang = "en-US";
            utterance.rate = 0.9;

            if (isPlaying) {
                window.speechSynthesis.cancel();
                setIsPlaying(false);
            } else {
                window.speechSynthesis.speak(utterance);
                setIsPlaying(true);

                utterance.onend = () => {
                    setIsPlaying(false);
                };
            }
        }
    };

    return (
        <Card className="p-4 gradient-sky">
            <div className="flex items-center gap-4">
                <Button
                    onClick={speakDescription}
                    size="lg"
                    variant={isPlaying ? "secondary" : "default"}
                    className="shrink-0"
                >
                    {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                    {isPlaying ? "Pause" : "Play"} Audio Guide
                </Button>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Volume2 className="h-4 w-4 text-white" />
                        <p className="text-sm font-semibold text-white">Audio Guide for {aircraftName}</p>
                    </div>
                    <p className="text-xs text-white/80">Listen to detailed information about this aircraft</p>
                </div>
            </div>
        </Card>
    );
};

export default AudioGuide;
