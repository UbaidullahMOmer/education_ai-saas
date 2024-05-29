import Heading from "@/components/heading";
import SubscriptionButton from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { DollarSign } from "lucide-react";

const ManageSubscriptions = async () => {

  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
      title="Manage Subscriptions"
      description="Manage your account"
      icon={DollarSign}
      iconColor="text-green-500"
      bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
            {isPro ? "You are currently on Pro Plan": "You are currently on Free Plan"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default ManageSubscriptions;
