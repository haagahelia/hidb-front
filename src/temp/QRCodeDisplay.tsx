import {QRCodeSVG} from "qrcode.react";
import {Card, CardContent, CardHeader, CardTitle} from "@/temp/ui/card";
import {QrCode, Smartphone} from "lucide-react";
import {motion} from "framer-motion";

interface QRCodeDisplayProps {
    aircraftId: number;
    aircraftName: string;
    size?: "sm" | "md" | "lg";
    showTitle?: boolean;
}

const QRCodeDisplay = ({aircraftId, aircraftName, size = "md", showTitle = true}: QRCodeDisplayProps) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://museum.app";
    const url = `${baseUrl}/aircraft/${aircraftId}`;

    const sizeMap = {
        sm: 80,
        md: 128,
        lg: 200,
    };

    const qrSize = sizeMap[size];

    return (
        <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.3}}>
            <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
                {showTitle && (
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-sm">
                            <QrCode className="h-4 w-4 text-primary" />
                            Scan QR Code
                        </CardTitle>
                    </CardHeader>
                )}
                <CardContent className={showTitle ? "pt-2" : "pt-6"}>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-white p-3 rounded-lg shadow-md">
                            <QRCodeSVG
                                value={url}
                                size={qrSize}
                                level="H"
                                marginSize={0}
                                bgColor="#ffffff"
                                fgColor="#000000"
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center">
                                <Smartphone className="h-3 w-3" />
                                Scan to view {aircraftName}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default QRCodeDisplay;
