import { useState } from "react";

export const usePageHome = () => {
  // handle like job
  const [likedIds, setLikedIds] = useState<(number | string)[]>([]);
  const toggleLike = (id: number | string) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // call API
  const jobsRecommend = [
    {
      id: 1,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "東京23区",
      category: "教育",
      schedule: "週1~3日以上",
      company: "株式会社BlueAI",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
      position: "営業、エンジニア、デザイナー、経理、マーケティング",
      salary: "時給1,200円〜",
    },
    {
      id: 2,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job2.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 3,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job3.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 4,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job4.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 5,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job5.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 6,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job6.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 7,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 8,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 9,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 10,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 11,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 12,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "",
      position: "営業職",
      salary: "時給1,200円〜",
    },
  ];

  const jobs = [
    {
      id: 4,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "東京23区",
      category: "教育",
      schedule: "週1~3日以上",
      company: "株式会社BlueAI",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job4.png",
      position: "営業、エンジニア、デザイナー、経理、マーケティング",
      salary: "時給1,200円〜",
    },
    {
      id: 5,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job5.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 6,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job6.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 7,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "",
      position: "営業職",
      salary: "時給1,200円〜",
    },
  ];

  const jobsFeatured = [
    {
      id: 4,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "東京23区",
      category: "教育",
      schedule: "週1~3日以上",
      company: "株式会社BlueAI",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job4.png",
      position: "営業、エンジニア、デザイナー、経理、マーケティング",
      salary: "時給1,200円〜",
    },
    {
      id: 5,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job5.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 6,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job6.png",
      position: "営業職",
      salary: "時給1,200円〜",
    },
    {
      id: 7,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "",
      position: "営業職",
      salary: "時給1,200円〜",
    },
  ];

  return {
    // handle like job
    likedIds,
    toggleLike,
    // call API
    jobsRecommend,
    jobs,
    jobsFeatured,
  };
};
