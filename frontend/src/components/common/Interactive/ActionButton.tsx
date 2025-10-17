import { Button } from "@/components/ui/button";
import { buttonConfig } from "@/constants";

interface ActionButtonProps {
  name: keyof typeof buttonConfig;
}
const ActionButton = ({ name }: ActionButtonProps) => {
  const { icon: Icon, label } = buttonConfig[name];
  return (
    <Button>
      <Icon />
      {label}
    </Button>
  );
};

export default ActionButton;
