import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsQR from 'jsqr';

const QRCodeScanner: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [qrCodeData, setQrCodeData] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const startCamera = async () => {
            try {
                const permissionStatus = await navigator.permissions.query({ name: 'camera' as PermissionName });

                if (permissionStatus.state === 'granted') {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                } else {
                    console.error('Camera permission denied.');
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        startCamera();

        canvasRef.current = document.createElement('canvas');

        const intervalId = setInterval(() => {
            if (videoRef.current && canvasRef.current) {
                const context = canvasRef.current.getContext('2d');

                if (context && videoRef.current.videoWidth > 0 && videoRef.current.videoHeight > 0) {
                    canvasRef.current.width = videoRef.current.videoWidth;
                    canvasRef.current.height = videoRef.current.videoHeight;

                    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

                    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

                    try {
                        const imageData = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);

                        if (imageData.data) {
                            const code = jsQR(imageData.data, imageData.width, imageData.height);

                            if (code) {
                                setQrCodeData(code.data);
                                const lines = code.data.split('\n')
                                const shop_index = lines[0]
                                const tableNumber = lines[1]
                                navigate(`/menu/${shop_index}`, { state: { tableNum: tableNumber } });
                            } else {
                                setQrCodeData(null);
                            }
                        }
                    } catch (error) {
                        console.error('Error processing QR code:', error);
                    }
                }
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [navigate]);

    return (
        <div>
            <video ref={videoRef} width="400" height="400" autoPlay></video>
        </div>
    );
};

export default QRCodeScanner;
