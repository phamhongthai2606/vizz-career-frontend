import Dropdown, { DropdownOption } from "./Dropdown";

type FilterBarProps = {
  status: string;
  jobType: string;
  onChangeStatus: (value: string) => void;
  onChangeJobType: (value: string) => void;
};

export default function FilterBar({
                                    status,
                                    jobType,
                                    onChangeStatus,
                                    onChangeJobType,
                                  }: FilterBarProps) {
  const statusOptions: DropdownOption[] = [
    { label: "全て表示", value: "all" },
    { label: "応募済み", value: "applied" },
    { label: "辞退", value: "rejected" },
  ];

  const jobTypeOptions: DropdownOption[] = [
    { label: "指定なし", value: "none" },
    { label: "エンジニア", value: "engineer" },
    { label: "デザイン", value: "design" },
    { label: "営業", value: "sales" },
  ];

  return (
    <div className="flex gap-4">
      <Dropdown
        options={statusOptions}
        value={status}
        onChange={onChangeStatus}
        width={220}
      />

      <Dropdown
        options={jobTypeOptions}
        value={jobType}
        onChange={onChangeJobType}
        width={220}
      />
    </div>
  );
}
