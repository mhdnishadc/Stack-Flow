import { fetchData } from "@/lib/fetch-util";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../loader";
import type { ActivityLog } from "@/types";
import { getActivityIcon } from "./task-icon";

export const TaskActivity = ({ resourceId }: { resourceId: string }) => {
  const { data, isPending } = useQuery({
    queryKey: ["task-activity", resourceId],
    queryFn: () => fetchData(`/tasks/${resourceId}/activity`),
  }) as {
    data: ActivityLog[];
    isPending: boolean;
  };

  if (isPending) return <Loader />;

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <h3 className="text-lg text-muted-foreground mb-4">Activity</h3>

      <div className="space-y-4">
        {data?.map((activity) => (
          <div key={activity._id} className="flex gap-2">
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {getActivityIcon(activity.action)}
            </div>

            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span>{" "}
                {activity.details?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
