"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PublishSettingModal from "../modals/PublishSettingModal";              // when status = 公開停止中
import UnpublishWarningModal from "../modals/UnpublishWarningModal";          // when status = 公開中
import DeleteDraftJobModal from "../modals/DeleteDraftJobModal";
import type { Job } from "../useJobsManager";

interface JobListRowProps {
  job: Job;
  index: number;
}

export default function JobListRow({ job, index }: JobListRowProps) {
  const [openPublish, setOpenPublish] = useState(false);
  const [openUnpublish, setOpenUnpublish] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const isLinkRow = index === 1;

  return (
    <>
      <div className="grid grid-cols-[3fr_1fr_1fr_1fr] border-b border-[#E5E7EB] px-6 py-5 text-sm text-[#344054]">

        <div className="leading-relaxed">
          {isLinkRow ? (
            <Link href="#" className="text-[#175CD3] underline underline-offset-2 hover:text-[#0C4A9A]">
              {job.title}
            </Link>
          ) : (
            <span>{job.title}</span>
          )}
        </div>

        <div className="pl-10 font-medium text-[#344054]">{job.status}</div>
        <div>{job.updatedAt}</div>

        <div className="flex items-center gap-5 text-[#161870] font-medium">

          {job.status === "下書き" ? (
            <>
              <button className="flex items-center gap-1 hover:opacity-70">
                <Image src="/business/jobs-manager/edit.svg" alt="edit" width={16} height={16}/>
                <span className="text-[#161870]">編集する</span>
              </button>

              {job.status === "下書き" && (
                <button className="hover:opacity-70" onClick={() => setOpenDelete(true)}>
                  <Image src="/business/jobs-manager/delete.svg" alt="delete" width={16} height={16} />
                </button>
              )}
            </>
          ) : (
            <>
              <button
                className="flex items-center gap-1 hover:opacity-70"
                onClick={() => {
                  if (job.status === "公開中") setOpenUnpublish(true);
                  if (job.status === "公開停止中") setOpenPublish(true);
                }}
              >
                <Image src="/business/jobs-manager/setting.svg" alt="公開設定" width={16} height={16}/>
                <span className="text-[#161870]">公開設定</span>
              </button>
            </>
          )}
        </div>
      </div>

      <UnpublishWarningModal
        open={openUnpublish}
        onClose={() => setOpenUnpublish(false)}
        onConfirm={() => {
          console.log("Unpublished");
          setOpenUnpublish(false);
        }}
      />

      <PublishSettingModal
        open={openPublish}
        onClose={() => setOpenPublish(false)}
        onConfirm={() => {
          console.log("Published");
          setOpenPublish(false);
        }}
      />

      <DeleteDraftJobModal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={() => {
          console.log("Deleted");
          setOpenDelete(false);
        }}
      />
    </>
  );
}
