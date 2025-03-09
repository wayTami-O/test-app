// import { useState } from "react";
// import { animated, useTrail } from "@react-spring/web";

// function TestAnim() {
//     const [isToggled, setIsToggled] = useState(false);

//     const styles = useSpring({
//         to: { opacity: isToggled ? 1 : 0.1, transform: isToggled ? "scale(1.2)" : "scale(1)" },
//         from: { opacity: 0.3, transform: "scale(1)" },
//     });

//     return (
//         <div className="flex flex-col items-center gap-4 p-6">
//         <animated.div
//             style={styles}
//             className="w-32 h-32 bg-blue-500 rounded-lg"
//         />
//         <button
//             onClick={() => setIsToggled(!isToggled)}
//             className="px-4 py-2 bg-gray-800 text-white rounded-md"
//         >
//             Animate
//         </button>
//         </div>
//     );
// }

// export default TestAnim;




// import React, { useState } from "react";
// import { useTrail, animated } from "@react-spring/web";

// const items = ["React", "Spring", "Animations"];

// function AnimatedList() {
//   const [isVisible, setIsVisible] = useState(false);

//   const trail = useTrail(items.length, {
//     to: { opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0px)" : "translateY(20px)" },
//     from: { opacity: 0, transform: "translateY(20px)" },
//   });

//   return (
//     <div className="flex flex-col items-center gap-2 p-6">
//       <button
//         onClick={() => setIsVisible(!isVisible)}
//         className="px-4 py-2 bg-gray-800 text-white rounded-md"
//       >
//         Toggle List
//       </button>
//       <div className="mt-4">
//         {trail.map((style, index) => (
//           <animated.div
//             key={index}
//             style={style}
//             className="p-2 bg-purple-500 text-white rounded-md text-lg"
//           >
//             {items[index]}
//           </animated.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AnimatedList;


import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function InterpolatedAnimation() {
  const [toggled, setToggled] = useState(false);

  const { x } = useSpring({
    x: toggled ? 1 : 0,
    config: { duration: 500 }, // Настраиваем скорость анимации
  });

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <animated.div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "10px",
          background: x.interpolate([0, 1], ["#ff0000", "#00ff00"]),
          transform: x.interpolate([0, 1], (val) => `scale(${1 + val * 0.5})`),
        }}
      />
      <button
        onClick={() => setToggled(!toggled)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md"
      >
        Interpolate
      </button>
    </div>
  );
}

export default InterpolatedAnimation;
