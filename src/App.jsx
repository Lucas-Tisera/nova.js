import { useBattery } from "./hooks/js/useBattery";

function AppJs() {
  const battery = useBattery();

  return (
    <div>
      <p>Battery level:{battery.level * 100}</p>
      <p>{battery.charging ? "Battery charging" : "Battery not charging"}</p>
    </div>
  );
}

export default AppJs;
