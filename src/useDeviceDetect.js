import { useState, useEffect } from "react";

function useDeviceDetect() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    if (!window.matchMedia) return;
    setIsTouchDevice(window.matchMedia("(pointer:coarse)").matches);
  }, []);

  return isTouchDevice;
}
export default useDeviceDetect;
