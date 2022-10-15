import React, { useRef, FC, useEffect } from 'react'

type PieObject={
    color: string,
    value: number
}

type PieChartProps={
    category: Array<PieObject>
}

const PieChart:FC<PieChartProps> = ({category}) => {
    let canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');  
            if (context) {
                category.forEach((cat, index)=>{
                    let end_angle = index
                    let slice_angle =  2 * Math.PI * 1 / 4
                    drawPieSlice(
                        context,
                        100,
                        100,
                        100,
                        cat.value,
                        end_angle + slice_angle,
                        cat.color

                    )
                })

               
            }

        }         
    })

    function drawPieSlice (ctx: any, centerX: number, 
            centerY: number, 
            radius: number, 
            startAngle: number, 
            endAngle: number, 
            color: string
        ){

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX,centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }

  return (
    <div>
        <canvas ref={canvasRef} height={300} width={300}/>
    </div>
  )
}


export default PieChart