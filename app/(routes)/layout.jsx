'use client'
import React, {useEffect} from "react";
import SideNav from "./_components/SideNav";
import TopNav from "./_components/TopNav";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
const AppLayout = ({ children }) => {
    const {user} = useUser()
    const router = useRouter()
    useEffect(() => {
        budgetAvailable()
    }, [user])
    const budgetAvailable =async () => {
        const result = await db.select()
            .from(Budgets)
            .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))

            console.log(result)
            if(result?.length === 0) {
                router.replace('/dashboard/budget')
            }

    }
  return (
    <div className="bg-sky-50 relative flex w-full min-h-screen gap-2 p-2 md:flex-row flex-col-reverse">
      <div className="w-full md:w-1/6 bg-white rounded-sm p-2">
        <SideNav />
      </div>
      <div className="relative w-full flex flex-col md:w-5/6 bg-white rounded-sm ">
        <TopNav />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
