import React, { useRef, FC, useEffect } from "react";

type PieObject = {
  color: string;
  value: number;
  name?: string;
};

type PieChartProps = {
  category: Array<PieObject>;
  ring?: boolean;
};

const PieChart: FC<PieChartProps> = ({ category, ring }) => {
  let canvasRef = useRef<HTMLCanvasElement>(null);
  // const colors = ['#FFC618','#ff2718', '#ff18d1', '#4018ff', '#18ffff', '#18ff3e']

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      let start_angle = 0;


      if (context) {
        category.forEach((cat, index) => {
          let slice_angle = (2 * Math.PI * cat.value) / 340;
          drawPieSlice(
            context,
            canvas.width / 2,
            canvas.height / 2,
            100,
            start_angle,
            start_angle + slice_angle,
            cat.color
          );
          start_angle += slice_angle;
          ring &&
            drawPieSlice(
              context,
              canvas.width / 2,
              canvas.height / 2,
              50,
              0,
              2 * Math.PI,
              "#ffffff"
            );
        });
      }
    }
  }, [category, ring]);

  function drawPieSlice(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    color: string
  ) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }

  return (
    <>
      <h2>Chart</h2>
      <div
        style={{
          margin: "20px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: 'wrap'
        }}
      >
        <canvas ref={canvasRef} height={250} width={250} />
        <div style={{ display: "flex", gap: "2px", flexDirection: "column" }}>
          {
            category?.map((el) => {
              return (
                <div style={{
                  backgroundColor: el.color,
                  width: 200,
                  borderRadius: "2px",
                  textAlign: "center",
                }}
                >
                  {el.name} - <span>{el.value}</span>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default PieChart;
