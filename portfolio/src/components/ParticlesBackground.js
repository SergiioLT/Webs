import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({ isDarkMode, id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: isDarkMode ? "#000000" : "#FFFFFF", // Cambia según el modo
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 45,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#FFFFFF" : "#000000", // Cambia según el modo
        },
        links: {
          color: isDarkMode ? "#CCCCCC" : "#333333", // Cambia el color de los enlaces
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [isDarkMode] // Se recalcula cada vez que cambia el modo
  );

   return (
    <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, zIndex: 0 }}>
      <Particles init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesBackground;
