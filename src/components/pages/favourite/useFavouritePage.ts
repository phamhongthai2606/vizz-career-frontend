import { useState, useMemo } from "react";
import { DropdownOption } from "@/components/pages/favourite/components/Dropdown";

export const useFavouritePage = () => {
  // call API
  const jobFavourites = useMemo(
    () => [
      {
        id: 1,
        image: "",
        companyName: "株式会社BlueAI 1",
        companyWebsite: "www.blueai.jp",
        position:
          "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
        jobTitle:
          "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎　#土日出勤　#圧倒的成長　#埼玉県　#東京都",
        jobType:
          "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
        grade: "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
        workDays: "週1日〜、応相談",
        location: "五反田駅 徒歩3分 大崎駅 徒歩8分",
        salary: "月給10万〜50万円",
        salaryNote: "（毎月の評価に応じて決定します。） （交通費：全額支給）",
        favouriteAt: "2025-11-01",
      },
      {
        id: 2,
        image: "",
        companyName: "株式会社BlueAI 2",
        companyWebsite: "www.blueai.jp",
        position:
          "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
        jobTitle:
          "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎　#土日出勤　#圧倒的成長　#埼玉県　#東京都",
        jobType:
          "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
        grade: "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
        workDays: "週1日〜、応相談",
        location: "五反田駅 徒歩3分 大崎駅 徒歩8分",
        salary: "月給10万〜50万円",
        salaryNote: "（毎月の評価に応じて決定します。） （交通費：全額支給）",
        favouriteAt: "2025-11-02",
      },
      {
        id: 3,
        image: "",
        companyName: "株式会社BlueAI 3",
        companyWebsite: "www.blueai.jp",
        position:
          "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
        jobTitle:
          "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎　#土日出勤　#圧倒的成長　#埼玉県　#東京都",
        jobType:
          "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
        grade: "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
        workDays: "週1日〜、応相談",
        location: "五反田駅 徒歩3分 大崎駅 徒歩8分",
        salary: "月給10万〜50万円",
        salaryNote: "（毎月の評価に応じて決定します。） （交通費：全額支給）",
        favouriteAt: "2025-11-03",
      },
      {
        id: 4,
        image: "",
        companyName: "株式会社BlueAI 4",
        companyWebsite: "www.blueai.jp",
        position:
          "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
        jobTitle:
          "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎　#土日出勤　#圧倒的成長　#埼玉県　#東京都",
        jobType:
          "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
        grade: "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
        workDays: "週1日〜、応相談",
        location: "五反田駅 徒歩3分 大崎駅 徒歩8分",
        salary: "月給10万〜50万円",
        salaryNote: "（毎月の評価に応じて決定します。） （交通費：全額支給）",
        favouriteAt: "2025-11-04",
      },
      {
        id: 5,
        image: "",
        companyName: "株式会社BlueAI 5",
        companyWebsite: "www.blueai.jp",
        position:
          "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
        jobTitle:
          "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎　#土日出勤　#圧倒的成長　#埼玉県　#東京都",
        jobType:
          "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
        grade: "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
        workDays: "週1日〜、応相談",
        location: "五反田駅 徒歩3分 大崎駅 徒歩8分",
        salary: "月給10万〜50万円",
        salaryNote: "（毎月の評価に応じて決定します。） （交通費：全額支給）",
        favouriteAt: "2025-11-05",
      },
      {
        id: 6,
        image: "",
        companyName: "株式会社BlueAI 6",
        companyWebsite: "www.blueai.jp",
        position:
          "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
        jobTitle:
          "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎　#土日出勤　#圧倒的成長　#埼玉県　#東京都",
        jobType:
          "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
        grade: "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
        workDays: "週1日〜、応相談",
        location: "五反田駅 徒歩3分 大崎駅 徒歩8分",
        salary: "月給10万〜50万円",
        salaryNote: "（毎月の評価に応じて決定します。） （交通費：全額支給）",
        favouriteAt: "2025-11-06",
      },
      {
        id: 7,
        image: "",
        companyName: "株式会社BlueAI 7",
        companyWebsite: "www.blueai.jp",
        position:
          "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
        jobTitle:
          "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎　#土日出勤　#圧倒的成長　#埼玉県　#東京都",
        jobType:
          "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
        grade: "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
        workDays: "週1日〜、応相談",
        location: "五反田駅 徒歩3分 大崎駅 徒歩8分",
        salary: "月給10万〜50万円",
        salaryNote: "（毎月の評価に応じて決定します。） （交通費：全額支給）",
        favouriteAt: "2025-11-07",
      },
    ],
    [],
  );

  // handle sort job favourite and pagination job favourite
  // ===== SORT =====
  const sortOptions: DropdownOption[] = [
    { label: "保存日が新しい順", value: "newest" },
    { label: "最も古い保存日", value: "oldest" },
  ];
  const [sortValue, setSortValue] = useState("newest");
  // ===== PAGINATION =====
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  // ===== SORTED DATA =====
  const sortedJobs = useMemo(() => {
    if (!jobFavourites) return [];
    const jobsCopy = [...jobFavourites];
    if (sortValue === "newest") {
      jobsCopy.sort(
        (a, b) =>
          new Date(b.favouriteAt).getTime() - new Date(a.favouriteAt).getTime(),
      );
    } else {
      jobsCopy.sort(
        (a, b) =>
          new Date(a.favouriteAt).getTime() - new Date(b.favouriteAt).getTime(),
      );
    }
    return jobsCopy;
  }, [jobFavourites, sortValue]);
  // ===== PAGINATED JOBS =====
  const totalPages = Math.ceil(sortedJobs.length / itemsPerPage);
  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedJobs.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedJobs, currentPage]);
  // ===== khi đổi sort → reset page = 1 =====
  const handleSortChange = (value: string) => {
    setSortValue(value);
    setCurrentPage(1);
  };

  // handle apply job favourite
  const handleApply = (id: number | string) => {
    console.log("Apply job", id);
  };

  // handle delete job favourite
  const handleDelete = (id: number | string) => {
    console.log("Delete job", id);
  };

  return {
    // handle sort job favourite and pagination job favourite
    sortOptions,
    sortValue,
    sortedJobs,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedJobs,
    handleSortChange,
    // handle apply job
    handleApply,
    // handle delete job favourite
    handleDelete,
  };
};
