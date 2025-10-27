import RightIcon from "@/app/_Icons/RightIcon";
import { Badge } from "@/components/ui/badge";

export function BadgeDemo({ categories }) {
  return (
    <Badge
      variant="secondary"
      className="w-min h-min flex items-center justify-center rounded-full bg-background border border-[#E4E4E7]"
    >
      {categories} <RightIcon />
    </Badge>
  );
}
