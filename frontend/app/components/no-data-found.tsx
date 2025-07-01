import { CirclePlus, LayoutGrid } from "lucide-react";
import { Button } from "./ui/button";

interface NoDataFoundProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

export const NoDataFound = ({
  title,
  description,
  buttonText,
  buttonAction,
}: NoDataFoundProps) => {
  return (
    <div className="col-span-full text-center py-12 2xl:py-24 bg-muted/40 rounded-lg">
      <LayoutGrid className="size-12 mx-auto text-muted-foreground" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
        {description}
      </p>
      <Button onClick={buttonAction} className="mt-4">
        <CirclePlus className="size-4 mr-2" />
        {buttonText}
      </Button>
    </div>
  );
};
