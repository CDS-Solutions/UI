import React, { useRef, FC, useEffect } from 'react'

type PieObject={
    color: string,
    value: number,
    name?: string
}

type PieChartProps={
    category: Array<PieObject>,  
    ring?: boolean

}

const PieChart:FC<PieChartProps> = ({category, ring}) => {
    let canvasRef = useRef<HTMLCanvasElement>(null);
    // const colors = ['#FFC618','#ff2718', '#ff18d1', '#4018ff', '#18ffff', '#18ff3e']
    
    
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
                        ring &&   drawPieSlice(
                            context,
                            100,
                            100,
                            50,
                            0,
                            2 * Math.PI,
                            "white"
                        )
                })


             
              
            }

        }         
    }, [ring])

    function drawPieSlice (ctx: any, centerX: any, 
            centerY: any, 
            radius: any, 
            startAngle: any, 
            endAngle: any, 
            color: string
        ){

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX,centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();

    }

    function randomColor(){}

  return (
    <>
        <h2>Chart</h2>
        <div style={{margin: '20px', display: 'flex',gap:'20px' ,alignItems: 'center'}}>
            <canvas ref={canvasRef} height={200} width={200}/>
            <div style={{display: 'flex', gap:'2px', flexDirection:'column'}}>
                {
                    category?.map((el)=>{
                        return( 
                            <div style={{backgroundColor: el.color, 
                                        width:200, 
                                        borderRadius: '2px', 
                                        textAlign: 'center'}}>
                                {el.name} - <span>{el.value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}


export default PieChart