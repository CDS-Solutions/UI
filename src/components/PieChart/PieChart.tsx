import React, { useRef, FC, useEffect } from 'react'

type PieObject={
    color: string,
    value: number,
    name?: string
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
            let start_angle = 0
            let end_angle = 0
            if (context) {
                category.forEach((cat, index)=>{
                    
                    
                    let slice_angle =  2 * Math.PI * cat.value / 340
                    drawPieSlice(
                        context,
                        100,
                        100,
                        100,
                        start_angle,
                        start_angle + slice_angle,
                        cat.color

                    )
                    end_angle += slice_angle
                    start_angle += slice_angle
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
    <>
        <canvas ref={canvasRef} height={300} width={300}/>

            {
                category?.map((el)=>{
                    return <div style={{backgroundColor: el.color}}><li>{el.name} <span>{el.value}</span></li></div>
                })
            }
       
    </>
  )
}


export default PieChart