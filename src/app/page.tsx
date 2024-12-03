import DashboardCard from "../components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, Users } from "lucide-react";
import PostsTable from "../components/posts/PostsTable";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-5 mb-5">
        <div className="flex-1 min-w-[200px]">
          <DashboardCard
            title="Posts"
            count={100}
            icon={<Newspaper className="text-slate-500" size={72} />}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <DashboardCard
            title="Categories"
            count={12}
            icon={<Folder className="text-slate-500" size={72} />}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <DashboardCard
            title="Users"
            count={750}
            icon={<Users className="text-slate-500" size={72} />}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <DashboardCard
            title="Comments"
            count={1200}
            icon={<MessageCircle className="text-slate-500" size={72} />}
          />
        </div>
      </div>
      <PostsTable title="Latest Posts" limit={5}/>
    </>
  );
}
