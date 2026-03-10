import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import "./Sign.css"

const Sign = forwardRef(({},ref) => {
    const canvasRef = useRef(null);
    const isDrawingRef = useRef(false);
    const lastPointRef = useRef({ x: 0, y: 0 });

    const clear = () => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const context = canvas.getContext("2d");

        context.clearRect(0, 0, canvas.width, canvas.height);
        isDrawingRef.current = false;
    };

    const getImage = () => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return null;
        }

        return canvas.toDataURL("image/png");
    };

    useImperativeHandle(ref,()=> ({
        clear,
        getImage,
    }),[]);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const context = canvas.getContext("2d");

        context.lineCap = "round";
        context.lineJoin = "round";
        context.lineWidth = 2;
        context.strokeStyle = "#111";
    }, []);

    const getMousePosition = (event) => {
        const canvas = canvasRef.current;
        const bounds = canvas.getBoundingClientRect();

        return {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
        };
    };

    const startDrawing = (event) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const position = getMousePosition(event);

        isDrawingRef.current = true;
        lastPointRef.current = position;

        context.beginPath();
        context.moveTo(position.x, position.y);
    };

    const draw = (event) => {
        if (!isDrawingRef.current) {
            return;
        }

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const position = getMousePosition(event);

        context.beginPath();
        context.moveTo(lastPointRef.current.x, lastPointRef.current.y);
        context.lineTo(position.x, position.y);
        context.stroke();

        lastPointRef.current = position;
    };

    const stopDrawing = () => {
        isDrawingRef.current = false;
    };

    return (
        <>
            <canvas
                ref={canvasRef}
                className="sign-canvas"
                width={500}
                height={220}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
        </>
    )
})

export default Sign;
