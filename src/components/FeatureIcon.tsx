import {
  Award,
  BatteryCharging,
  Gavel,
  GraduationCap,
  Handshake,
  HeartPulse,
  Layers,
  Leaf,
  Medal,
  Sparkles,
  Sprout,
  Star,
  Trophy,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "../data";
import { cn } from "../utils/cn";

const icons: Record<IconKey, LucideIcon> = {
  battery: BatteryCharging,
  pcm: Layers,
  collaboration: Handshake,
  mobility: Leaf,
  award: Award,
  medal: Medal,
  trophy: Trophy,
  star: Star,
  teacher: GraduationCap,
  excellence: Sparkles,
  gavel: Gavel,
  mentor: Users,
  blood: HeartPulse,
  tree: Sprout,
  energy: Wind,
};

export function FeatureIcon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = icons[name];
  return <Component className={cn("h-5 w-5", className)} strokeWidth={strokeWidth} aria-hidden="true" />;
}
