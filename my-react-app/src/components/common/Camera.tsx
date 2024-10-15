import React, { useRef, useEffect, useState } from 'react'

const CameraComponent = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvaRef = useRef<HTMLCanvasElement | null>(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    // カメラの起動する関数
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCameraOn(true)
        } catch (err) {
            console.error("カメラのアクセスに失敗しました", err);
        }
    };

    // 写真を撮る関数
    const takePicture = () => {
        if (videoRef.current && canvaRef.current) {
            const context = canvaRef.current.getContext('2d');
            if (context) {
                context.drawImage(videoRef.current, 0, 0, canvaRef.current.width, canvaRef.current.height);
            }
        }
    };

    return (
        <>
            <div>
                {/* カメラを表示するビデオタグ */}
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    style={{ display: isCameraOn ? 'black' : 'noen' }}
                ></video>
                {/* 写真を描画するためのキャンバス */}
                <canvas ref={canvaRef} width={"640"} height={"480"}></canvas>
                {/* カメラを起動するボタン */}
                {!isCameraOn ? (
                    <button onClick={startCamera}>カメラを起動する</button>
                ) : (
                    <button onClick={takePicture}>写真を撮る</button>
                )}
            </div>
        </>
    )
}

export default CameraComponent