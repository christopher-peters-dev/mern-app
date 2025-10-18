import { Button } from "@/components/ui/button";
import { buttonConfig } from "@/constants";
import { Link } from "react-router";

interface ActionButtonProps {
  name: keyof typeof buttonConfig;
}
const ActionButton = ({ name }: ActionButtonProps) => {
  const { icon: Icon, label, actionUrl } = buttonConfig[name];
  return actionUrl ? (
    <Link to={actionUrl}>
      <Button>
        <Icon />
        {label}
      </Button>
    </Link>
  ) : (
    <Button>
      <Icon />
      {label}
    </Button>
  );
};

export default ActionButton;
