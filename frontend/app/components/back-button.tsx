import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => navigate(-1)}
      className="p-4 mr-4"
    >
      ← Back
    </Button>
  );
};
